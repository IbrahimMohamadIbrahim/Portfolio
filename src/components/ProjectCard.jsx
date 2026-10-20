import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { getAssetUrl } from '../data/portfolioData';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-all duration-300 hover:shadow-xl hover:shadow-[#0077b6]/15 hover:-translate-y-1.5 overflow-hidden">
      {/* Top Banner: Real Screenshot or Graphic Accent */}
      {project.image ? (
        <div className="h-52 w-full relative overflow-hidden bg-[#03045e] border-b border-[#90e0ef]">
          <img
            src={getAssetUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03045e]/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#03045e]/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
              {project.category}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#0077b6] border border-[#90e0ef] shadow-sm">
                <Sparkles className="w-3 h-3 text-[#0077b6]" />
                {project.badge}
              </span>
            )}
          </div>

          {/* Title on Scrim */}
          <div className="absolute bottom-3 left-4 right-4 z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00b4d8] font-bold">Featured Project</span>
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#00b4d8] transition-colors truncate">
              {project.title}
            </h3>
          </div>
        </div>
      ) : (
        <div className="h-48 w-full bg-gradient-to-br from-[#caf0f8] via-[#f8fdff] to-[#90e0ef]/50 p-6 flex flex-col justify-between relative overflow-hidden border-b border-[#90e0ef]">
          {/* Subtle Decorative Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0077b6_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="flex items-center justify-between relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#0077b6] border border-[#90e0ef] shadow-sm">
              {project.category}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#caf0f8] text-[#03045e] border border-[#90e0ef]">
                <Sparkles className="w-3 h-3 text-[#0077b6]" />
                {project.badge}
              </span>
            )}
          </div>

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0077b6] font-bold">Project Case</span>
            <h3 className="text-xl font-bold text-[#03045e] tracking-tight group-hover:text-[#0077b6] transition-colors line-clamp-1">
              {project.title}
            </h3>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-sm text-[#03045e] font-bold mb-2">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#1e3a5f] leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#caf0f8] text-[#03045e] border border-[#90e0ef]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-xs font-semibold bg-[#f8fdff] text-[#1e3a5f] border border-[#90e0ef]">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#90e0ef] flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0077b6] hover:text-[#03045e] transition-colors group-hover:translate-x-0.5 duration-200 cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-colors border border-[#90e0ef]"
                  aria-label="GitHub Repository"
                  title="View Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-colors border border-[#90e0ef]"
                  aria-label="Live Demo"
                  title="Open Project"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
