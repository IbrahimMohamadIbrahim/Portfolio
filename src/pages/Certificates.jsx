import { useState, useMemo } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { certificates } from '../data/portfolioData';

const categories = ['All', 'Data & ML', 'Frontend & UI'];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCert, setActiveModalCert] = useState(null);

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
              className="group rounded-3xl bg-white border border-[#90e0ef] hover:border-[#0077b6] shadow-sm hover:shadow-xl hover:shadow-[#0077b6]/15 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Certificate Visual Banner Preview */}
              {cert.image && (
                <div className="h-48 w-full relative overflow-hidden bg-[#03045e] border-b border-[#90e0ef]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/80 via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#03045e]/85 backdrop-blur-md text-white border border-white/20">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-md">
                      {cert.date}
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
                    onClick={() => setActiveModalCert(cert)}
                    className="text-xs sm:text-sm font-bold text-[#0077b6] hover:text-[#03045e] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-sm transition-all hover:scale-105"
                  >
                    <span>View / Verify</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#03045e]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModalCert(null)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#90e0ef] shadow-2xl z-10 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#caf0f8] to-[#f8fdff] border-b border-[#90e0ef] relative">
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 hover:bg-white border border-[#90e0ef] text-[#03045e] transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0077b6] text-white">
                  {activeModalCert.category}
                </span>
                <span className="text-xs font-mono text-[#3a506b] font-bold">
                  Issued: {activeModalCert.date}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#03045e]">
                {activeModalCert.title}
              </h3>
              <p className="text-sm font-semibold text-[#0077b6] mt-1">
                Issued by {activeModalCert.issuer}
              </p>
            </div>

            {/* Modal Certificate Image Preview */}
            {activeModalCert.image && (
              <div className="w-full bg-[#03045e] border-b border-[#90e0ef] overflow-hidden max-h-80 flex items-center justify-center p-2">
                <img
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  className="max-h-76 w-auto object-contain rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[50vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-2">
                  Credential Description
                </h4>
                <p className="text-sm text-[#1e3a5f] leading-relaxed">
                  {activeModalCert.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#caf0f8] border border-[#90e0ef] space-y-1">
                <span className="text-xs text-[#5c768d] uppercase font-bold tracking-wider block">Official Credential ID</span>
                <span className="text-base font-mono font-bold text-[#03045e]">{activeModalCert.credentialId}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-2.5">
                  Verified Competencies & Knowledge Domains
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalCert.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs font-medium text-[#03045e]">
                      <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#f8fdff] border-t border-[#90e0ef] flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalCert(null)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#5c768d] hover:text-[#03045e] transition-colors cursor-pointer"
              >
                Close
              </button>

              <a
                href={activeModalCert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-105"
              >
                <span>Open Full Certificate Document</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
