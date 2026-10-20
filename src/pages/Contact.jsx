import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Clock,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icons';
import SectionHeader from '../components/SectionHeader';
import { developer, faqList } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Machine Learning / Predictive System',
    budget: '$5,000 - $15,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic mock submission with success animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      projectType: 'Machine Learning / Predictive System',
      budget: '$5,000 - $15,000',
      message: ''
    });
    setSubmitted(false);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <SectionHeader
        badge="Direct Communication"
        title="Get in"
        highlight="Touch"
        subtitle="Have a project in mind, an engineering role open, or want to collaborate? Send a message or connect directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: CONTACT INFO & SOCIALS (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Availability Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#90e0ef] space-y-3 shadow-sm">
            <div className="flex items-center gap-2.5 text-[#0077b6] font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0077b6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0077b6]"></span>
              </span>
              <span>Available for Hire & Projects</span>
            </div>
            <p className="text-sm text-[#1e3a5f] leading-relaxed">
              {developer.availabilityText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#5c768d]">
              <Clock className="w-3.5 h-3.5 text-[#0077b6]" />
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* Direct Contact Cards */}
          <div className="space-y-3">
            {/* Email */}
            <div className="p-5 rounded-2xl bg-white border border-[#90e0ef] flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#caf0f8] border border-[#00b4d8] flex items-center justify-center text-[#0077b6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#5c768d] uppercase tracking-wider font-bold block">Email</span>
                  <a href={`mailto:${developer.email}`} className="text-sm font-bold text-[#03045e] hover:text-[#0077b6] transition-colors">
                    {developer.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? <CheckCircle className="w-4 h-4 text-[#0077b6]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-5 rounded-2xl bg-white border border-[#90e0ef] flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#caf0f8] border border-[#00b4d8] flex items-center justify-center text-[#0077b6] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#5c768d] uppercase tracking-wider font-bold block">Phone & WhatsApp</span>
                <a href={`tel:${developer.phone}`} className="text-sm font-bold text-[#03045e] hover:text-[#0077b6] transition-colors">
                  {developer.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-white border border-[#90e0ef] flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#caf0f8] border border-[#00b4d8] flex items-center justify-center text-[#0077b6] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#5c768d] uppercase tracking-wider font-bold block">Location</span>
                <span className="text-sm font-bold text-[#03045e]">
                  {developer.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-3xl bg-white border border-[#90e0ef] space-y-4 shadow-sm">
            <h4 className="text-sm font-bold text-[#03045e] uppercase tracking-wider">
              Developer Profiles & Socials
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={developer.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f8fdff] border border-[#90e0ef] hover:border-[#0077b6] text-[#03045e] hover:text-[#0077b6] transition-all text-xs font-bold gap-2 shadow-sm"
              >
                <GithubIcon className="w-5 h-5 text-[#0077b6]" />
                <span>GitHub</span>
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f8fdff] border border-[#90e0ef] hover:border-[#0077b6] text-[#03045e] hover:text-[#0077b6] transition-all text-xs font-bold gap-2 shadow-sm"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0077b6]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={developer.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f8fdff] border border-[#90e0ef] hover:border-[#0077b6] text-[#03045e] hover:text-[#0077b6] transition-all text-xs font-bold gap-2 shadow-sm"
              >
                <TwitterIcon className="w-5 h-5 text-[#0077b6]" />
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#90e0ef] shadow-sm relative">
            {submitted ? (
              /* Success Banner */
              <div className="text-center py-12 px-4 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#caf0f8] border border-[#00b4d8] text-[#0077b6] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#03045e]">Message Dispatched!</h3>
                <p className="text-[#1e3a5f] text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#03045e]">{form.name}</strong>. Your message has been received. I will review your requirements and respond back to <span className="text-[#0077b6] font-mono font-bold">{form.email}</span> promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] border border-[#90e0ef] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#03045e] tracking-tight">
                    Send a Message
                  </h3>
                  <p className="mt-1 text-sm text-[#3a506b]">
                    Fill out the form below and I'll get back to you promptly.
                  </p>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] placeholder-[#5c768d] focus:outline-none focus:border-[#0077b6] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] placeholder-[#5c768d] focus:outline-none focus:border-[#0077b6] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                      Project Nature
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] focus:outline-none focus:border-[#0077b6] transition-colors"
                    >
                      <option value="Data Science & Machine Learning">Data Science & Machine Learning</option>
                      <option value="Data Analysis & Visualization">Data Analysis & Visualization</option>
                      <option value="Modern Web Application">Modern Web Application</option>
                      <option value="Tech Agency Landing Page">Tech Agency Landing Page</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                      Estimated Budget / Scope
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] focus:outline-none focus:border-[#0077b6] transition-colors"
                    >
                      <option value="< $5,000">&lt; $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                      <option value="$30,000+">$30,000+</option>
                      <option value="Full-Time Salary">Full-Time Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                    Subject Line *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Brief summary of your inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] placeholder-[#5c768d] focus:outline-none focus:border-[#0077b6] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1e3a5f] mb-2">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your goals, timelines, and technical requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] placeholder-[#5c768d] focus:outline-none focus:border-[#0077b6] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="pt-8">
        <SectionHeader
          badge="Inquiries"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Answers to common questions about collaboration, engineering timelines, and hiring."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#90e0ef] overflow-hidden transition-colors shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[#03045e] hover:text-[#0077b6] cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0077b6] transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-[#1e3a5f] leading-relaxed border-t border-[#90e0ef] pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
