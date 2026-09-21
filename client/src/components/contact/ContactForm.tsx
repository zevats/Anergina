import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormField, FormOption } from './FormField';
import { Button } from '@/components/common/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const INTERESTED_OPTIONS: FormOption[] = [
  { value: 'insurance-partnership', label: 'Insurance Partnership' },
  { value: 'workshop-partnership', label: 'Workshop Partnership' },
  { value: 'technology-partnership', label: 'Technology Partnership' },
  { value: 'business-inquiry', label: 'Business Inquiry' },
  { value: 'other', label: 'Other' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    if (!formData.company.trim()) {
      errs.company = 'Company or organization name is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.interestedIn) {
      errs.interestedIn = 'Please select an area of interest.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          organization: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          inquiryType: formData.interestedIn,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setServerMessage(
          data.message || 'Unable to submit your inquiry at this moment. Please try again later.'
        );
      }
    } catch {
      setStatus('error');
      setServerMessage(
        'Connection to server failed. Your inquiry could not be sent. Please retry shortly.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      interestedIn: '',
      message: '',
    });
    setErrors({});
    setStatus('idle');
    setServerMessage('');
  };

  return (
    <div className="border border-[#1D242B] bg-[#0A0D11] rounded-[10px] p-6 sm:p-10 relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-14 h-14 rounded-full bg-[#62E6A7]/10 border border-[#62E6A7]/30 flex items-center justify-center text-[#62E6A7] mb-6">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-800 text-[#F5F7FA] tracking-tight mb-3">
              Inquiry Received
            </h3>
            <p className="text-sm md:text-base text-[#8E99A5] max-w-md mb-8 leading-relaxed">
              Thank you for contacting Anergina. Our enterprise operations team will review your requirements and reach out via your work email.
            </p>
            <Button variant="secondary" onClick={handleReset}>
              Submit Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                id="name"
                label="Full Name"
                autoComplete="name"
                required
                placeholder="Rishabh Verma"
                value={formData.name}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, name: val }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                }}
                error={errors.name}
                disabled={status === 'loading'}
              />

              <FormField
                id="company"
                label="Company / Organisation"
                autoComplete="organization"
                required
                placeholder="e.g. HDFC ERGO / Workshop Network"
                value={formData.company}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, company: val }));
                  if (errors.company) setErrors((prev) => ({ ...prev, company: '' }));
                }}
                error={errors.company}
                disabled={status === 'loading'}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                id="email"
                label="Work Email"
                type="email"
                autoComplete="email"
                required
                placeholder="name@organization.com"
                value={formData.email}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, email: val }));
                  if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                }}
                error={errors.email}
                disabled={status === 'loading'}
              />

              <FormField
                id="phone"
                label="Phone Number"
                type="tel"
                autoComplete="tel"
                placeholder="+91 (Optional)"
                value={formData.phone}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, phone: val }));
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                }}
                error={errors.phone}
                disabled={status === 'loading'}
              />
            </div>

            <FormField
              id="interestedIn"
              label="Area of Interest"
              type="select"
              required
              placeholder="Select partnership inquiry type"
              options={INTERESTED_OPTIONS}
              value={formData.interestedIn}
              onChange={(val) => {
                setFormData((prev) => ({ ...prev, interestedIn: val }));
                if (errors.interestedIn) setErrors((prev) => ({ ...prev, interestedIn: '' }));
              }}
              error={errors.interestedIn}
              disabled={status === 'loading'}
            />

            <FormField
              id="message"
              label="Operational Scope & Message"
              type="textarea"
              required
              rows={4}
              placeholder="Describe your fleet volume, network coverage, or integration objectives..."
              value={formData.message}
              onChange={(val) => {
                setFormData((prev) => ({ ...prev, message: val }));
                if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
              }}
              error={errors.message}
              disabled={status === 'loading'}
            />

            {status === 'error' && (
              <div className="p-4 rounded-[6px] border border-red-500/30 bg-red-500/10 flex items-start gap-3 text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{serverMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={status === 'loading'}
            >
              Submit Enterprise Inquiry
            </Button>

            <p className="text-[11px] text-[#8E99A5] text-center">
              Your transmission is governed by strict enterprise privacy and operational data protocols.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
