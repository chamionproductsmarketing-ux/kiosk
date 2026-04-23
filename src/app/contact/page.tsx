"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
}

const emptyForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const entry = { ...form, timestamp: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("kiosk-leads") || "[]");
    existing.push(entry);
    localStorage.setItem("kiosk-leads", JSON.stringify(existing));

    setSubmitted(true);
    setForm(emptyForm);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full flex-col"
      >
        <div
          className="texture-overlay flex flex-1 flex-col items-center justify-center bg-primary px-8"
          onClick={() => setSubmitted(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30"
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h1 className="font-display mt-8 text-5xl font-bold text-white">
            Thank You!
          </h1>
          <p className="font-body mt-4 text-xl text-white/70">
            We&apos;ll be in touch soon.
          </p>
          <p className="font-body mt-8 text-base text-white/40">
            Tap anywhere to continue
          </p>
        </div>
        <NavBar />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col bg-cream"
    >
      {/* Header */}
      <div className="texture-overlay relative overflow-hidden bg-gradient-to-br from-[#0f3d1e] via-primary to-secondary px-8 py-8 text-center">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display relative z-10 text-4xl font-bold text-white"
        >
          Get in Touch
        </motion.h1>
        <p className="font-body relative z-10 mt-2 text-lg text-white/60">
          Let&apos;s discuss your packaging needs
        </p>
      </div>

      {/* Form — fills available space */}
      <div className="flex flex-1 items-start justify-center px-8 pt-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-full max-w-2xl space-y-5"
        >
          <div className="grid grid-cols-2 gap-5">
            <Field
              label="Name"
              value={form.name}
              error={errors.name}
              onChange={(v) => updateField("name", v)}
              type="text"
            />
            <Field
              label="Company"
              value={form.company}
              error={errors.company}
              onChange={(v) => updateField("company", v)}
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Field
              label="Email"
              value={form.email}
              error={errors.email}
              onChange={(v) => updateField("email", v)}
              type="email"
            />
            <Field
              label="Phone"
              value={form.phone}
              error={errors.phone}
              onChange={(v) => updateField("phone", v)}
              type="tel"
            />
          </div>

          <div>
            <label className="font-body mb-2 block text-base font-semibold text-dark">
              What are you looking for?
            </label>
            <textarea
              value={form.interest}
              onChange={(e) => updateField("interest", e.target.value)}
              className="font-body h-28 w-full resize-none rounded-xl border-2 border-dark/10 bg-white px-5 py-4 text-lg text-dark placeholder:text-muted/50 focus:border-accent focus:outline-none"
              placeholder="Tell us about your packaging needs..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="h-16 w-full rounded-xl bg-accent font-body text-xl font-bold text-white shadow-lg shadow-accent/20 active:bg-[#d4621f]"
          >
            Submit
          </button>
        </motion.div>
      </div>

      <NavBar />
    </motion.div>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  type,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type: string;
}) {
  return (
    <div>
      <label className="font-body mb-2 block text-base font-semibold text-dark">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`font-body h-14 w-full rounded-xl border-2 bg-white px-5 text-lg text-dark placeholder:text-muted/50 focus:outline-none ${
          error ? "border-red-500" : "border-dark/10 focus:border-accent"
        }`}
        placeholder={label}
      />
      {error && (
        <p className="font-body mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
