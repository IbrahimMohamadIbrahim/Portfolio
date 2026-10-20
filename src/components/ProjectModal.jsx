import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#03045e]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#90e0ef] shadow-2xl z-10 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Visual Banner */}
        <div className="p-8 bg-gradient-to-br from-[#caf0f8] via-[#f8fdff] to-[#90e0ef]/50 border-b border-[#90e0ef] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 hover:bg-white border border-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-all cursor-pointer shadow-sm"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0077b6] text-white">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#caf0f8] text-[#03045e] border border-[#90e0ef]">
                {project.badge}
              </span>
            )}
            <span className="text-xs text-[#3a506b] font-mono font-bold">
              Released {project.year}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#03045e] tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-[#1e3a5f] text-sm sm:text-base leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Project Screenshot Display (if available) */}
        {project.image && (
          <div className="w-full bg-[#03045e] border-b border-[#90e0ef] overflow-hidden max-h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Metric Impact */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#caf0f8] border border-[#00b4d8]">
              <TrendingUp className="w-5 h-5 text-[#0077b6] shrink-0" />
              <div className="text-sm">
                <span className="text-[#0077b6] font-bold uppercase tracking-wider text-xs block">Key Impact</span>
                <span className="text-[#03045e] font-bold">{project.metrics}</span>
              </div>
            </div>
          )}

          {/* Deep-Dive Overview */}
          <div>
            <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-[#1e3a5f] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-3">Key Features & Architecture</h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#03045e]">
                    <CheckCircle2 className="w-4 h-4 text-[#0077b6] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-[#0077b6] uppercase tracking-wider mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#caf0f8] text-[#03045e] border border-[#90e0ef]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#f8fdff] border-t border-[#90e0ef] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#5c768d] hover:text-[#03045e] transition-colors cursor-pointer"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-colors border border-[#90e0ef]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-[1.02]"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
