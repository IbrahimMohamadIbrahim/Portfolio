import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';
import { developer } from '../data/portfolioData';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8fdff]/95 backdrop-blur-md border-b border-[#90e0ef] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0077b6] flex items-center justify-center text-white shadow-md shadow-[#0077b6]/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-[#03045e] tracking-tight group-hover:text-[#0077b6] transition-colors">
                {developer.name}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#1e3a5f] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] animate-pulse"></span>
                <span>Open for Work</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#caf0f8] border border-[#90e0ef] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0077b6] text-white shadow-md shadow-[#0077b6]/25'
                      : 'text-[#03045e] hover:text-[#0077b6] hover:bg-[#90e0ef]/60'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white border border-[#90e0ef] text-[#03045e] hover:text-[#0077b6] hover:bg-[#caf0f8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0077b6] cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-white border border-[#90e0ef] backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#0077b6] text-white font-bold'
                        : 'text-[#03045e] hover:text-[#0077b6] hover:bg-[#caf0f8]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <div className="pt-2 mt-2 border-t border-[#90e0ef]">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[#0077b6] text-white hover:bg-[#03045e] transition-colors shadow-md shadow-[#0077b6]/20"
                >
                  <span>Let's Discuss a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
