import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layers,
  CheckCircle2,
  Shield,
  Workflow,
  Briefcase,
  ExternalLink,
  ArrowRight,
  Award
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { aboutProjectDetails, developer, timeline, certificates } from '../data/portfolioData';

export default function AboutProject() {
  const [activeTab, setActiveTab] = useState('project');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <SectionHeader
        badge="Architecture & Story"
        title="About The"
        highlight="Project & Engineering"
        subtitle="An inside look at the technical architecture, custom Coolors blue palette (#03045e - #caf0f8), and principles driving this portfolio application."
      />

      {/* Main Tab Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#90e0ef] shadow-sm">
          <button
            onClick={() => setActiveTab('project')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'project'
                ? 'bg-[#0077b6] text-white shadow-md shadow-[#0077b6]/20'
                : 'text-[#03045e] hover:text-[#0077b6]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>About The Portfolio Project</span>
          </button>
          <button
            onClick={() => setActiveTab('developer')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'developer'
                ? 'bg-[#0077b6] text-white shadow-md shadow-[#0077b6]/20'
                : 'text-[#03045e] hover:text-[#0077b6]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>About The Developer</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ABOUT THIS PROJECT */}
      {activeTab === 'project' && (
        <div className="space-y-16 animate-in fade-in duration-300">
          {/* Executive Summary Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#90e0ef] relative overflow-hidden shadow-sm">
            <div className="max-w-3xl space-y-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#caf0f8] text-[#0077b6] border border-[#00b4d8] uppercase tracking-wider inline-block">
                Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#03045e]">
                {aboutProjectDetails.headline}
              </h3>
              <p className="text-[#1e3a5f] leading-relaxed text-base sm:text-lg">
                {aboutProjectDetails.intro}
              </p>
            </div>

            {/* Performance Indicators */}
            <div className="mt-8 pt-8 border-t border-[#90e0ef] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aboutProjectDetails.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#caf0f8] border border-[#90e0ef] text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#0077b6]">{m.value}%</div>
                  <div className="text-xs text-[#03045e] font-bold mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Goals */}
          <div>
            <h3 className="text-2xl font-bold text-[#03045e] mb-6 flex items-center gap-2.5">
              <Shield className="w-6 h-6 text-[#0077b6]" />
              <span>Core Architectural Goals</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutProjectDetails.goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-colors shadow-sm"
                >
                  <h4 className="text-lg font-bold text-[#03045e] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0" />
                    <span>{goal.title}</span>
                  </h4>
                  <p className="text-sm text-[#3a506b] leading-relaxed pl-7">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h3 className="text-2xl font-bold text-[#03045e] mb-6 flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-[#0077b6]" />
              <span>Modern Technology Stack Deep-Dive</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutProjectDetails.techStackHighlights.map((tech) => (
                <div
                  key={tech.name}
                  className="p-6 rounded-2xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-[#03045e]">{tech.name}</h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#caf0f8] text-[#0077b6] border border-[#00b4d8]">
                      {tech.badge}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#0077b6] uppercase tracking-wider block mb-2">
                    {tech.role}
                  </span>
                  <p className="text-sm text-[#3a506b] leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Structure Highlights */}
          <div className="p-8 rounded-3xl bg-white border border-[#90e0ef] shadow-sm">
            <h3 className="text-2xl font-bold text-[#03045e] mb-6 flex items-center gap-2.5">
              <Workflow className="w-6 h-6 text-[#0077b6]" />
              <span>Component & System Architecture</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutProjectDetails.architectureOverview.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-bold text-[#03045e] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0077b6]"></span>
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-sm text-[#3a506b] leading-relaxed pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ABOUT THE DEVELOPER */}
      {activeTab === 'developer' && (
        <div className="space-y-16 animate-in fade-in duration-300">
          {/* Bio & Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-white border border-[#90e0ef] space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#caf0f8] text-[#0077b6] border border-[#00b4d8] uppercase tracking-wider inline-block">
                  Biography & Background
                </span>
                <h3 className="text-3xl font-extrabold text-[#03045e]">
                  Meet {developer.name}
                </h3>
                <p className="text-[#0077b6] font-bold text-base">
                  {developer.role}
                </p>
              </div>

              <div className="space-y-4 text-[#1e3a5f] text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a developer focused on Data Science, Machine Learning, and Frontend Development. I clean and analyze data, build and evaluate predictive models, and create responsive web interfaces using modern technologies.
                </p>
                <p>
                  My engineering focus centers on bridging the gap between intelligent algorithms and user-facing software—taking raw sensor telemetry and data pipelines and transforming them into accessible, interactive dashboards and interfaces.
                </p>
                <p>
                  From engineering end-to-end industrial predictive maintenance systems that detect machine failure early to designing fast, responsive digital agency pages and gaming showcases, I love turning code into tangible real-world solutions.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white transition-all shadow-md shadow-[#0077b6]/20"
                >
                  <span>Connect with Ibrahim</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] border border-[#90e0ef] transition-colors"
                >
                  <Award className="w-4 h-4 text-[#0077b6]" />
                  <span>View All Certifications</span>
                </Link>
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#90e0ef] space-y-6 shadow-sm">
              <h4 className="text-lg font-bold text-[#03045e] border-b border-[#90e0ef] pb-3">
                Quick Facts
              </h4>
              <ul className="space-y-4 text-sm text-[#1e3a5f]">
                <li className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-[#5c768d] font-bold tracking-wider">Location</span>
                  <span className="text-[#03045e] font-semibold">{developer.location}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-[#5c768d] font-bold tracking-wider">Specialization</span>
                  <span className="text-[#03045e] font-semibold">Data Science, Front-End</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-[#5c768d] font-bold tracking-wider">Current Focus</span>
                  <span className="text-[#0077b6] font-bold">Data Analysis & Predictive Modeling</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-[#5c768d] font-bold tracking-wider">Core Stack</span>
                  <span className="text-[#03045e] font-semibold">Python, SQL, Machine Learning, Streamlit, HTML5, CSS3</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-[#03045e] mb-8 flex items-center gap-2.5">
              <Briefcase className="w-6 h-6 text-[#0077b6]" />
              <span>Certifications & Learning Journey</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#00b4d8] space-y-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0077b6] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-colors shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#03045e]">{item.role}</h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#caf0f8] text-[#0077b6] border border-[#00b4d8] font-bold">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-[#0077b6] mb-3">{item.company}</p>
                    <p className="text-sm text-[#3a506b] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Certifications Highlight Preview */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#03045e] flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#0077b6]" />
                <span>Verified Certifications</span>
              </h3>
              <Link
                to="/certificates"
                className="text-sm font-bold text-[#0077b6] hover:text-[#03045e] flex items-center gap-1"
              >
                <span>View Full Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-all flex flex-col justify-between shadow-sm overflow-hidden"
                >
                  {cert.image && (
                    <div className="h-36 w-full bg-[#03045e] overflow-hidden border-b border-[#90e0ef]">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#caf0f8] text-[#0077b6] border border-[#00b4d8] font-bold">
                          {cert.date}
                        </span>
                        <span className="text-xs text-[#5c768d] font-mono">
                          {cert.credentialId}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#03045e] leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#3a506b] font-semibold mt-1">
                        Issued by {cert.issuer}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#90e0ef]">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077b6] hover:text-[#03045e] transition-colors"
                      >
                        <span>View Document</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
