import { useState, useMemo, useEffect } from 'react';
import {
  Award,
  Search,
  ExternalLink,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Sparkles,
  X,
  FileCheck2,
  ArrowRight,
  Eye,
  Maximize2,
  Download,
  Copy,
  Check,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { certificates, getAssetUrl } from '../data/portfolioData';

const categories = ['All', 'Data & ML', 'Frontend & UI'];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCert, setActiveModalCert] = useState(null);
  const [modalViewTab, setModalViewTab] = useState('image'); // 'image' | 'pdf'
  const [lightboxCert, setLightboxCert] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxCert) {
          setLightboxCert(null);
        } else if (activeModalCert) {
          setActiveModalCert(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxCert, activeModalCert]);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (activeModalCert || lightboxCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalCert, lightboxCert]);

  const filteredCerts = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.credentialId.toLowerCase().includes(query) ||
        (cert.description && cert.description.toLowerCase().includes(query)) ||
        cert.skills.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  const handleCopyId = (id) => {
    navigator.clipboard?.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const openCertModal = (cert) => {
    setActiveModalCert(cert);
    setModalViewTab('image');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <SectionHeader
        badge="Verified Credentials"
        title="Licenses &"
        highlight="Certifications"
        subtitle="Accredited professional training and certified diplomas in Advanced Data Science, React JS, and Frontend Development."
      />

      {/* Stats Summary Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#90e0ef] shadow-sm">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <div className="w-10 h-10 rounded-xl bg-[#caf0f8] text-[#0077b6] flex items-center justify-center mb-2">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#03045e]">
            {certificates.length}
          </span>
          <span className="text-xs font-semibold text-[#5c768d] uppercase tracking-wider mt-0.5">
            Verified Credentials
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2">
          <div className="w-10 h-10 rounded-xl bg-[#caf0f8] text-[#0077b6] flex items-center justify-center mb-2">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#0077b6]">
            100%
          </span>
          <span className="text-xs font-semibold text-[#5c768d] uppercase tracking-wider mt-0.5">
            Accredited Programs
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2">
          <div className="w-10 h-10 rounded-xl bg-[#caf0f8] text-[#0077b6] flex items-center justify-center mb-2">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#03045e]">
            Data & Web
          </span>
          <span className="text-xs font-semibold text-[#5c768d] uppercase tracking-wider mt-0.5">
            Specialized Tracks
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-center p-2">
          <div className="w-10 h-10 rounded-xl bg-[#caf0f8] text-[#0077b6] flex items-center justify-center mb-2">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold text-[#0077b6]">
            2026
          </span>
          <span className="text-xs font-semibold text-[#5c768d] uppercase tracking-wider mt-0.5">
            Active & Verified
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#90e0ef] shadow-sm">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0077b6] text-white shadow-md shadow-[#0077b6]/20'
                  : 'bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-[#0077b6] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by certificate, issuer, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-sm text-[#03045e] placeholder-[#5c768d] focus:outline-none focus:border-[#0077b6] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#5c768d] hover:text-[#03045e] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Active Status */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#3a506b] px-1">
        <span>
          Showing <span className="text-[#03045e] font-bold">{filteredCerts.length}</span> of {certificates.length} credentials
        </span>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={clearFilters}
            className="text-[#0077b6] hover:text-[#03045e] underline font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Certificates Grid */}
      {filteredCerts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id || cert.title}
              onClick={() => openCertModal(cert)}
              className="group cursor-pointer rounded-3xl bg-white border border-[#90e0ef] hover:border-[#0077b6] shadow-sm hover:shadow-xl hover:shadow-[#0077b6]/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Certificate Visual Banner Preview */}
              {cert.image && (
                <div className="h-52 w-full relative overflow-hidden bg-[#03045e] border-b border-[#90e0ef]">
                  <img
                    src={getAssetUrl(cert.image)}
                    alt={cert.title}
                    onError={(e) => {
                      const el = e.currentTarget;
                      if (!el.dataset.fallback) {
                        el.dataset.fallback = '1';
                        const clean = (cert.image || '').replace(/^\/+/, '').replace(/^Portfolio\//, '');
                        el.src = `${import.meta.env.BASE_URL}${clean}`;
                      }
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/80 via-[#03045e]/20 to-black/30 pointer-events-none" />

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#03045e]/85 backdrop-blur-md text-white border border-white/20">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
                      {cert.date}
                    </span>
                  </div>

                  {/* Hover Overlay with View Prompt */}
                  <div className="absolute inset-0 bg-[#0077b6]/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-15">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-[#0077b6] shadow-lg shadow-black/20 group-hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-[#0077b6]" />
                      <span>عرض الشهادة</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#03045e] group-hover:text-[#0077b6] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#5c768d]">
                    <span>Issued by</span>
                    <span className="text-[#03045e] font-bold">{cert.issuer}</span>
                  </div>

                  {cert.description && (
                    <p className="mt-3 text-xs sm:text-sm text-[#1e3a5f] leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  {/* Credential ID */}
                  <div className="p-2.5 rounded-xl bg-[#caf0f8] border border-[#90e0ef] text-xs font-mono text-[#03045e] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#5c768d] font-semibold">Credential ID</span>
                    <span className="font-bold">{cert.credentialId}</span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#caf0f8] text-[#03045e] border border-[#90e0ef] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 mt-2 border-t border-[#90e0ef] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openCertModal(cert);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-[#0077b6] hover:bg-[#caf0f8] transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>عرض الشهادة</span>
                  </button>

                  <a
                    href={getAssetUrl(cert.link)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-sm transition-all hover:scale-105"
                  >
                    <span>فتح الملف (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-[#90e0ef] space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#caf0f8] flex items-center justify-center mx-auto text-[#0077b6]">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#03045e]">No credentials found</h3>
          <p className="text-sm text-[#3a506b] max-w-sm mx-auto">
            We couldn't find any credentials matching "{searchQuery}".
          </p>
          <button
            onClick={clearFilters}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#0077b6] hover:bg-[#03045e] text-white transition-colors cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* CTA Bottom Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#90e0ef] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#03045e]">
            Need official verification or certificate files?
          </h3>
          <p className="text-sm text-[#3a506b] max-w-xl">
            Official certificate documents, university credentials, and diploma transcripts are available for verification.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-105 shrink-0"
        >
          <span>Contact Ibrahim</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Certificate Modal Dialog */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#03045e]/75 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModalCert(null)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-[#90e0ef] shadow-2xl z-10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#caf0f8] via-[#e2f7fd] to-[#f8fdff] border-b border-[#90e0ef] relative shrink-0">
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 hover:bg-white border border-[#90e0ef] text-[#03045e] transition-all cursor-pointer shadow-sm hover:scale-105"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2 pr-12">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0077b6] text-white shadow-sm">
                  {activeModalCert.category}
                </span>
                <span className="text-xs font-mono text-[#3a506b] font-bold bg-white/70 px-2.5 py-1 rounded-full border border-[#90e0ef]">
                  Issued: {activeModalCert.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0077b6] bg-white/70 px-2.5 py-1 rounded-full border border-[#90e0ef]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0077b6]" />
                  <span>Verified Document</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#03045e] pr-10">
                {activeModalCert.title}
              </h3>
              <p className="text-sm font-semibold text-[#0077b6] mt-1">
                Issued by {activeModalCert.issuer}
              </p>
            </div>

            {/* Modal Certificate View Mode Switcher */}
            <div className="bg-[#f0f9ff] px-6 py-2.5 border-b border-[#90e0ef] flex items-center justify-between flex-wrap gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setModalViewTab('image')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    modalViewTab === 'image'
                      ? 'bg-[#0077b6] text-white shadow-sm'
                      : 'bg-white text-[#03045e] border border-[#90e0ef] hover:bg-[#caf0f8]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>معاينة الصورة</span>
                </button>

                {activeModalCert.link?.endsWith('.pdf') && (
                  <button
                    type="button"
                    onClick={() => setModalViewTab('pdf')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      modalViewTab === 'pdf'
                        ? 'bg-[#0077b6] text-white shadow-sm'
                        : 'bg-white text-[#03045e] border border-[#90e0ef] hover:bg-[#caf0f8]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>مستند PDF مدمج</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {modalViewTab === 'image' && (
                  <button
                    type="button"
                    onClick={() => setLightboxCert(activeModalCert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-[#0077b6] border border-[#90e0ef] hover:bg-[#caf0f8] transition-all cursor-pointer shadow-xs"
                    title="تكبير الشهادة ملء الشاشة"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">تكبير ملء الشاشة</span>
                  </button>
                )}

                <a
                  href={getAssetUrl(activeModalCert.downloadUrl || activeModalCert.link)}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-[#03045e] border border-[#90e0ef] hover:bg-[#caf0f8] transition-all cursor-pointer shadow-xs"
                  title="تحميل الشهادة"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">تحميل</span>
                </a>
              </div>
            </div>

            {/* Modal Body / Viewer */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Visual Container */}
              {modalViewTab === 'image' ? (
                activeModalCert.image && (
                  <div
                    onClick={() => setLightboxCert(activeModalCert)}
                    className="group relative w-full bg-[#03045e]/5 rounded-2xl border border-[#90e0ef] overflow-hidden flex items-center justify-center p-3 cursor-zoom-in min-h-[260px] sm:min-h-[360px]"
                  >
                    <img
                      src={getAssetUrl(activeModalCert.image)}
                      alt={activeModalCert.title}
                      className="max-h-[55vh] w-auto object-contain rounded-xl shadow-lg group-hover:scale-[1.01] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0077b6]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-[#0077b6] shadow-xl">
                        <Maximize2 className="w-4 h-4" />
                        <span>انقر للعرض بالحجم الكامل (Lightbox)</span>
                      </span>
                    </div>
                  </div>
                )
              ) : (
                <div className="w-full h-[55vh] min-h-[380px] rounded-2xl border border-[#90e0ef] overflow-hidden bg-white shadow-inner flex flex-col">
                  <iframe
                    src={getAssetUrl(activeModalCert.link)}
                    title={activeModalCert.title}
                    className="w-full h-full border-none"
                  />
                </div>
              )}

              {/* Description & Metadata */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-2">
                    Credential Overview
                  </h4>
                  <p className="text-sm text-[#1e3a5f] leading-relaxed">
                    {activeModalCert.description}
                  </p>
                </div>

                {/* Credential ID Card with Copy Button */}
                <div className="p-4 rounded-2xl bg-[#caf0f8] border border-[#90e0ef] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-[#5c768d] uppercase font-bold tracking-wider block">
                      Official Credential ID
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#03045e]">
                      {activeModalCert.credentialId}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyId(activeModalCert.credentialId)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-[#0077b6] border border-[#90e0ef] hover:bg-[#e2f7fd] transition-all cursor-pointer shadow-xs shrink-0"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">تم النسخ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ الكود</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Skills Grid */}
                <div>
                  <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-2.5">
                    Verified Competencies & Knowledge Domains
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {activeModalCert.skills.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 p-2 rounded-xl bg-[#f8fdff] border border-[#90e0ef] text-xs font-medium text-[#03045e]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#f8fdff] border-t border-[#90e0ef] flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setActiveModalCert(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#5c768d] hover:text-[#03045e] hover:bg-[#caf0f8] transition-colors cursor-pointer"
              >
                إغلاق
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={getAssetUrl(activeModalCert.link)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-105"
                >
                  <span>فتح ملف الشهادة الأصلي</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen High-Res Lightbox */}
      {lightboxCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxCert(null)}
        >
          {/* Lightbox Header Bar */}
          <div
            className="flex items-center justify-between text-white z-10 w-full max-w-6xl mx-auto pb-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-base sm:text-lg font-bold">{lightboxCert.title}</h4>
              <p className="text-xs text-white/70">
                {lightboxCert.issuer} · ID: {lightboxCert.credentialId}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getAssetUrl(lightboxCert.link)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white transition-all"
              >
                <span>فتح الملف الكامل</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={getAssetUrl(lightboxCert.downloadUrl || lightboxCert.link)}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>تحميل</span>
              </a>

              <button
                type="button"
                onClick={() => setLightboxCert(null)}
                className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Area */}
          <div
            className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getAssetUrl(lightboxCert.image)}
              alt={lightboxCert.title}
              className="max-h-[80vh] max-w-[94vw] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* Lightbox Footer Hint */}
          <div className="text-center text-xs text-white/50 pt-2 z-10">
            انقر في أي مكان في الخلفية أو اضغط Escape للإغلاق
          </div>
        </div>
      )}
    </div>
  );
}
