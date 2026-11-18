import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_PLACEHOLDERS, SERVICES_LIST } from '../data/siteData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    companyName: '',
    serviceRequired: preselectedService,
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>(
    {}
  );
  const whatsappAnchorRef = useRef<HTMLAnchorElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
    referenceId?: string;
    whatsappUrl?: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const validateClient = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!formData.serviceRequired) {
      errors.serviceRequired = 'Please select the service you need.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof ContactFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateClient()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please review the highlighted required fields before submitting.',
      });
      return;
    }

    const submittedData = { ...formData };
    const summaryLines = [
      'New Project Enquiry — Qubex Tech Solutions',
      `Full Name: ${submittedData.fullName.trim()}`,
      `Phone Number: ${submittedData.phone.trim() || 'Not provided'}`,
      `Company Name: ${submittedData.companyName.trim() || 'Not provided'}`,
      `Service Required: ${submittedData.serviceRequired}`,
    ].join('\n');

    const directWhatsappUrl = `${CONTACT_PLACEHOLDERS.whatsappHref}?text=${encodeURIComponent(
      summaryLines
    )}`;

    // Open WhatsApp synchronously within the user's submit gesture
    if (whatsappAnchorRef.current) {
      whatsappAnchorRef.current.href = directWhatsappUrl;
      whatsappAnchorRef.current.click();
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
        keepalive: true,
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        if (payload.errors) {
          setFieldErrors(payload.errors);
        }
        setSubmitStatus({
          type: 'error',
          message:
            payload.message ||
            'Unable to record your enquiry right now. Please try again.',
        });
        return;
      }

      setSubmitStatus({
        type: 'success',
        message: 'Enquiry sent to WhatsApp (+91 93847 54527).',
        referenceId: payload.referenceId,
        whatsappUrl: payload.whatsappUrl || directWhatsappUrl,
      });

      setFormData({
        fullName: '',
        phone: '',
        companyName: '',
        serviceRequired: '',
      });
    } catch {
      setSubmitStatus({
        type: 'success',
        message: 'Opening WhatsApp (+91 93847 54527) with your enquiry details.',
        whatsappUrl: directWhatsappUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Placeholders & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
                GET IN TOUCH
              </p>
              <h2 className="font-display font-bold text-slate-900 tracking-tight leading-[1.12] text-[clamp(1.85rem,3.2vw,2.75rem)] text-balance">
                Let&apos;s Start a Conversation.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Share your goals, timeline, or technical challenge. Reach us directly
                using our contact channels below or submit the project enquiry form.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Company Email</p>
                  <a
                    href={`mailto:${CONTACT_PLACEHOLDERS.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 inline-block break-all"
                  >
                    {CONTACT_PLACEHOLDERS.email}
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Phone Number</p>
                  <a
                    href={CONTACT_PLACEHOLDERS.phoneHref}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 inline-block tabular-nums"
                  >
                    {CONTACT_PLACEHOLDERS.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Office Location</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {CONTACT_PLACEHOLDERS.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {CONTACT_PLACEHOLDERS.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Project Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-9 space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Project Enquiry Form
                </h3>
                <span className="text-xs text-slate-500">
                  Fields marked <span className="text-rose-600 font-semibold">*</span> are
                  required
                </span>
              </div>

              {submitStatus && (
                <div
                  role="status"
                  className={`rounded-xl p-4 border flex items-start gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-sm">
                    <p className="font-semibold">{submitStatus.message}</p>
                    {submitStatus.referenceId && (
                      <p className="mt-1 font-mono text-xs text-emerald-700">
                        Reference ID: {submitStatus.referenceId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      fieldErrors.fullName ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p className="mt-1 text-xs text-rose-600">{fieldErrors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Service Required */}
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Service Required <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    required
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      fieldErrors.serviceRequired ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Multiple Services / Consultation">
                      Multiple Services / Consultation
                    </option>
                  </select>
                  {fieldErrors.serviceRequired && (
                    <p className="mt-1 text-xs text-rose-600">
                      {fieldErrors.serviceRequired}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Submitting opens WhatsApp (+91 93847 54527) directly with your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Enquiry'}</span>
                </button>

                <a
                  ref={whatsappAnchorRef}
                  href={CONTACT_PLACEHOLDERS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sr-only"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  Open WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
