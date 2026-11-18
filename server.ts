import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnquiryPayload {
  fullName?: string;
  phone?: string;
  companyName?: string;
  serviceRequired?: string;
}

interface StoredEnquiry extends Required<Omit<EnquiryPayload, 'phone' | 'companyName'>> {
  id: string;
  phone: string;
  companyName: string;
  submittedAt: string;
}

const enquiriesStore: StoredEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'qubex-tech-solutions' });
  });

  app.post('/api/contact', async (req, res) => {
    const body = (req.body || {}) as EnquiryPayload;
    const fullName = String(body.fullName ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const companyName = String(body.companyName ?? '').trim();
    const serviceRequired = String(body.serviceRequired ?? '').trim();

    const errors: Record<string, string> = {};

    if (fullName.length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!serviceRequired) {
      errors.serviceRequired = 'Please select a service.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: 'Please correct the highlighted form fields.',
        errors,
      });
      return;
    }

    const referenceId = `QBX-${Date.now().toString(36).toUpperCase()}`;
    const record: StoredEnquiry = {
      id: referenceId,
      fullName,
      phone,
      companyName,
      serviceRequired,
      submittedAt: new Date().toISOString(),
    };

    enquiriesStore.push(record);

    const whatsappNumber = process.env.WHATSAPP_NUMBER || '919384754527';

    const summaryLines = [
      'New Project Enquiry — Qubex Tech Solutions',
      `Reference ID: ${record.id}`,
      `Full Name: ${record.fullName}`,
      `Phone Number: ${record.phone || 'Not provided'}`,
      `Company Name: ${record.companyName || 'Not provided'}`,
      `Service Required: ${record.serviceRequired}`,
    ].join('\n');

    const callMeBotKey = process.env.CALLMEBOT_API_KEY || '';
    if (callMeBotKey) {
      try {
        await fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
            whatsappNumber
          )}&text=${encodeURIComponent(summaryLines)}&apikey=${encodeURIComponent(
            callMeBotKey
          )}`
        );
      } catch (err) {
        console.error('[WhatsApp API] Failed to push via CallMeBot:', err);
      }
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summaryLines)}`;

    res.status(201).json({
      success: true,
      referenceId,
      whatsappUrl,
      message: 'Enquiry sent directly to WhatsApp (+91 93847 54527).',
      enquiry: {
        id: record.id,
        fullName: record.fullName,
        serviceRequired: record.serviceRequired,
        submittedAt: record.submittedAt,
      },
    });
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Qubex Tech Solutions server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
