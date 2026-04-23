"use client";

import { useState } from "react";
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
      <div className="flex h-full flex-col">
        <div
          className="flex flex-1 flex-col items-center justify-center bg-primary px-8"
          onClick={() => setSubmitted(false)}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-display mt-8 text-5xl font-bold text-white">
            Thank You!
          </h1>
          <p className="font-body mt-4 text-xl text-white/70">
            We&apos;ll be in touch soon.
          </p>
          <p className="font-body mt-8 text-sm text-white/40">
            Tap anywhere to continue
          </p>
        </div>
        <NavBar />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-cream">
      {/* Header */}
      <div className="texture-overlay bg-primary px-8 py-8 text-center">
        <h1 className="font-display text-4xl font-bold text-white">
          Get in Touch
        </h1>
        <p className="font-body mt-2 text-lg text-white/70">
          Let&apos;s discuss your packaging needs
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-1 items-center justify-center px-8 pb-24">
        <div className="w-full max-w-2xl space-y-5">
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
            <label className="font-body mb-2 block text-sm font-semibold text-dark">
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
            className="h-16 w-full rounded-xl bg-accent font-body text-xl font-bold text-white shadow-lg active:bg-[#d4621f]"
          >
            Submit
          </button>
        </div>
      </div>

      <NavBar />
    </div>
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
      <label className="font-body mb-2 block text-sm font-semibold text-dark">
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
