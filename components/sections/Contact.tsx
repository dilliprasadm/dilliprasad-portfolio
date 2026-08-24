"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Send, Mail, Phone, User, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { siteConfig } from "@/lib/site";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    const payload = {
      name: formData.name,
      email: formData.email || "",
      phone: formData.phone || "",
      message: formData.message,
    };

    console.log("EmailJS payload:", payload);

    const templateParams = {
      ...payload,
      // Fallback aliases in case of any variations
      from_name: formData.name,
      from_email: formData.email || "",
      user_name: formData.name,
      user_email: formData.email || "",
      contact_name: formData.name,
      contact_email: formData.email || "",
      to_name: "Dilli Prasad",
    };

    try {
      if (serviceId && templateId && publicKey) {
        // Send email through configured EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Simulation delay if keys are not yet configured in .env.local
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("EmailJS template params prepared:", templateParams);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      setErrorMessage(
        "Could not send email directly right now. Please verify your EmailJS keys or reach out directly at dilliprasadmogarala@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-stack-lg bg-background flex flex-col justify-center overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none opacity-40 animate-pulse-slow" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full flex flex-col items-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel number="05" label="LET'S CONNECT" />
        </motion.div>

        {/* Massive Headline with Outline Glow Effect */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.92] tracking-tighter text-primary mb-8 max-w-[1200px] text-center select-none"
        >
          <span className="block">LET&apos;S BUILD</span>
          <span className="block text-transparent relative group">
            <span
              aria-hidden="true"
              className="absolute inset-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-10 blur-sm pointer-events-none"
              style={{ WebkitTextStroke: "1px currentColor" }}
            >
              SOMETHING GREAT.
            </span>
            <span
              className="relative z-20 group-hover:text-transparent transition-all duration-700"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
              }}
            >
              SOMETHING GREAT.
            </span>
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[18px] md:text-[22px] font-light text-on-surface-variant max-w-2xl text-center mb-8 italic leading-relaxed"
        >
          Have an opportunity, an idea, or a project in mind? Let&apos;s connect and build something meaningful.
        </motion.p>

        {/* Availability Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-surface-container-high/50 backdrop-blur-md border border-white/[0.06] mb-16"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-blue" />
          </span>
          <span className="font-mono text-label-technical text-primary tracking-wider uppercase font-medium">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* Contact Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full max-w-5xl items-start mb-20">
          {/* Left Column: Direct Links & Prompt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-5 flex flex-col gap-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="font-display text-[24px] md:text-[28px] font-bold text-primary tracking-tight">
                Get in Touch
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Feel free to send a message via the form or connect with me directly on LinkedIn, GitHub, or email. I respond promptly to all opportunities.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 border-t border-white/[0.06] pt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 p-3 -mx-3 rounded-md hover:bg-surface-container-low/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors bg-surface-container-lowest">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
                    EMAIL
                  </span>
                  <span className="font-body text-base text-primary group-hover:text-accent-blue transition-colors font-medium break-all">
                    {siteConfig.email}
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 -mx-3 rounded-md hover:bg-surface-container-low/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors bg-surface-container-lowest">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
                    LINKEDIN
                  </span>
                  <span className="font-body text-base text-primary group-hover:text-accent-blue transition-colors font-medium">
                    /in/dilliprasadmogarala
                  </span>
                </div>
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 -mx-3 rounded-md hover:bg-surface-container-low/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors bg-surface-container-lowest">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">
                    GITHUB
                  </span>
                  <span className="font-body text-base text-primary group-hover:text-accent-blue transition-colors font-medium">
                    /dilliprasadm
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="lg:col-span-7 w-full bg-surface-container-low/30 border border-white/[0.06] p-8 md:p-10 backdrop-blur-xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-accent-blue animate-pulse" />
                <h4 className="font-display text-[24px] font-bold text-primary">
                  Message Sent Successfully
                </h4>
                <p className="font-body text-on-surface-variant max-w-md">
                  Thank you, <span className="text-primary font-medium">{formData.name}</span>! Your message has been dispatched. I will review it and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", message: "" });
                  }}
                  className="mt-6 font-mono text-xs text-accent-blue uppercase tracking-widest underline hover:text-primary transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {errorMessage && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5 font-medium"
                    >
                      <User className="w-3.5 h-3.5 text-accent-blue" />
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-surface-container-lowest/60 border-b border-[#262626] focus:border-accent-blue px-3 py-3 font-body text-base text-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface-variant/30 rounded-t-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest flex items-center justify-between font-medium"
                    >
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-accent-blue" />
                        PHONE NUMBER
                      </span>
                      <span className="text-[10px] text-on-surface-variant/50 lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 234 567 8900"
                      className="w-full bg-surface-container-lowest/60 border-b border-[#262626] focus:border-accent-blue px-3 py-3 font-body text-base text-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface-variant/30 rounded-t-sm"
                    />
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest flex items-center justify-between font-medium"
                  >
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-accent-blue" />
                      EMAIL ADDRESS
                    </span>
                    <span className="text-[10px] text-on-surface-variant/50 lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-surface-container-lowest/60 border-b border-[#262626] focus:border-accent-blue px-3 py-3 font-body text-base text-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface-variant/30 rounded-t-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5 font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-accent-blue" />
                    PROJECT DETAILS / MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or engineering requirements..."
                    className="w-full bg-surface-container-lowest/60 border-b border-[#262626] focus:border-accent-blue px-3 py-3 font-body text-base text-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface-variant/30 rounded-t-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-on-primary py-4 px-8 font-mono text-label-technical uppercase tracking-widest hover:bg-primary-fixed-dim hover:-translate-y-[2px] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
