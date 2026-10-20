import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { developer } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#caf0f8]/40 border-t border-[#90e0ef] text-[#1e3a5f] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#0077b6]/15 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#90e0ef]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0077b6] flex items-center justify-center text-white shadow-md shadow-[#0077b6]/20">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-[#03045e] tracking-tight">{developer.name}</span>
            </Link>
            <p className="text-sm text-[#1e3a5f] max-w-sm leading-relaxed">
              Data Science & Frontend Developer creating predictive machine learning models, data analysis pipelines, and responsive modern web interfaces.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#03045e] bg-white border border-[#00b4d8] px-3.5 py-1.5 rounded-full w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse"></span>
              <span>Available for engineering roles & collaborations</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#03045e] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="text-[#1e3a5f] hover:text-[#0077b6] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#1e3a5f] hover:text-[#0077b6] transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/certificates" className="text-[#1e3a5f] hover:text-[#0077b6] transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#1e3a5f] hover:text-[#0077b6] transition-colors">About The Project</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#1e3a5f] hover:text-[#0077b6] transition-colors">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#03045e] uppercase tracking-wider">Portfolio Stack</h4>
            <ul className="space-y-2 text-sm font-medium text-[#1e3a5f]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6]"></span>
                <span>React 19.2</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6]"></span>
                <span>Tailwind CSS v4.3</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                <span>Vite 8.3 & React Router 7</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8]"></span>
                <span>Lucide Vector Icons</span>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#03045e] uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={developer.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#90e0ef] flex items-center justify-center text-[#03045e] hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#f8fdff] transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#90e0ef] flex items-center justify-center text-[#03045e] hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#f8fdff] transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={developer.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#90e0ef] flex items-center justify-center text-[#03045e] hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#f8fdff] transition-all shadow-sm"
                aria-label="X (Twitter)"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${developer.email}`}
                className="w-10 h-10 rounded-xl bg-white border border-[#90e0ef] flex items-center justify-center text-[#03045e] hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#f8fdff] transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[#5c768d]">
              Direct: <span className="text-[#0077b6] font-mono font-bold">{developer.email}</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c768d]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {developer.name}. Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#0077b6] fill-[#0077b6] inline" />
            <span>using React & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block font-mono text-[11px] text-[#0077b6]">Palette: #03045e · #0077b6 · #00b4d8 · #90e0ef · #caf0f8</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#90e0ef] border border-[#90e0ef] text-[#03045e] hover:text-[#0077b6] transition-colors shadow-sm cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
