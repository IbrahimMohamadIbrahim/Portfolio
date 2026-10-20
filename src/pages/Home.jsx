import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Mail,
  Cpu,
  Layers,
  Palette,
  BarChart3,
  TrendingUp,
  GitBranch,
  Database,
  FileCode,
  Smartphone,
  CheckCircle2,
  Box,
  Wrench,
  Shield,
  Gauge
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/Icons';
import { developer, services, projects, skillsData, getAssetUrl } from '../data/portfolioData';
import userPhoto from '../assets/images/profile.png';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('dataScience');
  const [imgSrc, setImgSrc] = useState(developer.photo || userPhoto);

  const featuredProjects = projects.filter((p) => p.featured);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#0077b6]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#0077b6]" />;
      case 'Layout': return <Layers className="w-6 h-6 text-[#0077b6]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#0077b6]" />;
      default: return <Code2 className="w-6 h-6 text-[#0077b6]" />;
    }
  };

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon className="w-4 h-4 text-[#0077b6]" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-[#0077b6]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#0077b6]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#0077b6]" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-[#0077b6]" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-[#0077b6]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-[#0077b6]" />;
      case 'Box': return <Box className="w-4 h-4 text-[#0077b6]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#0077b6]" />;
      case 'Shield': return <Shield className="w-4 h-4 text-[#0077b6]" />;
      case 'Gauge': return <Gauge className="w-4 h-4 text-[#0077b6]" />;
      case 'Palette': return <Palette className="w-4 h-4 text-[#0077b6]" />;
      case 'Layout': return <Layers className="w-4 h-4 text-[#0077b6]" />;
      default: return <Code2 className="w-4 h-4 text-[#0077b6]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION WITH USER PHOTO */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-10">
        {/* Ambient Glowing Coolors Palette (#caf0f8 & #90e0ef) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-[#caf0f8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#90e0ef]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: HERO TEXT & ACTIONS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#caf0f8] border border-[#90e0ef] text-xs sm:text-sm font-bold text-[#0077b6] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0077b6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0077b6]"></span>
              </span>
              <span>SPECIALIZATION: Data Science, Front-End</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#03045e] tracking-tight leading-[1.15]">
              Turning Data into{' '}
              <span className="text-[#0077b6] bg-clip-text text-transparent bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#0077b6]">
                Insights
              </span>{' '}
              & Ideas into{' '}
              <span className="text-[#0077b6] bg-clip-text text-transparent bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#03045e]">
                Web Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#1e3a5f] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              A developer focused on Data Science, Machine Learning, and Frontend Development. I clean and analyze data, build and evaluate predictive models, and create responsive web interfaces using modern technologies.
            </p>

            {/* Call-to-action buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-lg shadow-[#0077b6]/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>

              <Link
                to="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-bold bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e] border border-[#90e0ef] transition-all hover:scale-105"
              >
                <Code2 className="w-4 h-4 text-[#0077b6]" />
                <span>Certificates</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-bold bg-white hover:bg-[#caf0f8] border border-[#90e0ef] text-[#03045e] transition-all hover:scale-105 shadow-sm"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-[#03045e]">
              <a
                href={developer.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white border border-[#90e0ef] hover:border-[#0077b6] hover:text-[#0077b6] hover:bg-[#caf0f8] transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white border border-[#90e0ef] hover:border-[#0077b6] hover:text-[#0077b6] hover:bg-[#caf0f8] transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={developer.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white border border-[#90e0ef] hover:border-[#0077b6] hover:text-[#0077b6] hover:bg-[#caf0f8] transition-all shadow-sm"
                aria-label="X Profile"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${developer.email}`}
                className="p-3 rounded-full bg-white border border-[#90e0ef] hover:border-[#0077b6] hover:text-[#0077b6] hover:bg-[#caf0f8] transition-all shadow-sm"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: DEVELOPER PHOTO SHOWCASE (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-88 lg:w-96 aspect-square">
              {/* Pulsing Oceanic Backlight */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0077b6] to-[#00b4d8] opacity-35 blur-2xl animate-pulse" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-[#03045e] via-[#0077b6] to-[#00b4d8] shadow-2xl shadow-[#0077b6]/20">
                <div className="w-full h-full rounded-full bg-white p-2 border-2 border-[#caf0f8] overflow-hidden flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt={developer.name}
                    onError={() => {
                      if (imgSrc !== userPhoto) {
                        setImgSrc(userPhoto);
                      } else {
                        setImgSrc(getAssetUrl('images/profile.png'));
                      }
                    }}
                    className="w-full h-full object-cover object-top rounded-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge 1: SPECIALIZATION */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-white/95 border border-[#00b4d8] shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce [animation-duration:4s]">
                <div className="w-7 h-7 rounded-lg bg-[#caf0f8] flex items-center justify-center text-[#0077b6]">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0077b6] tracking-wider block">SPECIALIZATION</span>
                  <span className="text-xs font-bold text-[#03045e]">Data Science, Front-End</span>
                </div>
              </div>

              {/* Floating Badge 2: CURRENT FOCUS */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-2xl bg-white/95 border border-[#00b4d8] shadow-xl backdrop-blur-md flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#caf0f8] flex items-center justify-center text-[#0077b6]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0077b6] tracking-wider block">CURRENT FOCUS</span>
                  <span className="text-xs font-bold text-[#03045e]">Data Analysis & Predictive Modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Highlight Banner */}
        <div className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#90e0ef] shadow-sm">
          {developer.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-3">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0077b6]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-bold text-[#03045e] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE & SERVICES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Specializations"
          title="Engineered for"
          highlight="Intelligence & Quality"
          subtitle="Connecting data cleaning, predictive machine learning models, and modern responsive frontends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="p-6 rounded-3xl bg-white border border-[#90e0ef] hover:border-[#0077b6] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0077b6]/15 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#caf0f8] border border-[#90e0ef] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#0077b6] transition-all">
                  {getServiceIcon(svc.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#03045e] mb-2 group-hover:text-[#0077b6] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-[#3a506b] leading-relaxed mb-6">
                  {svc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#90e0ef]">
                <div className="flex flex-wrap gap-1.5">
                  {svc.skills.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#caf0f8] text-[#03045e] border border-[#90e0ef] font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            badge="Portfolio Highlights"
            title="Featured"
            highlight="Projects"
            subtitle="Explore real systems developed with Python, Machine Learning, Streamlit, HTML5, CSS3, and modern web architectures."
            align="left"
            className="mb-0"
          />

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#caf0f8] hover:bg-[#90e0ef] border border-[#00b4d8] text-[#0077b6] hover:text-[#03045e] transition-colors w-fit shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#0077b6]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* TECH STACK & SKILLS MATRIX */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Competence"
          title="Proficiency"
          highlight="& Technologies"
          subtitle="Practical frameworks, languages, and tools utilized across end-to-end projects."
        />

        <div className="p-8 rounded-3xl bg-white border border-[#90e0ef] shadow-sm">
          {/* Skill Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { id: 'dataScience', label: 'Data Science & ML' },
              { id: 'frontend', label: 'Frontend & Web' },
              { id: 'toolsAndWorkflow', label: 'Tools & Workflow' },
              { id: 'designAndArchitecture', label: 'Architecture & Design' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeSkillCategory === tab.id
                    ? 'bg-[#0077b6] text-white shadow-md shadow-[#0077b6]/20'
                    : 'bg-[#caf0f8] hover:bg-[#90e0ef] text-[#03045e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skill Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData[activeSkillCategory]?.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#f8fdff] border border-[#90e0ef] hover:border-[#00b4d8] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getSkillIcon(skill.icon)}
                    <span className="text-sm font-bold text-[#03045e]">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-[#0077b6] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#caf0f8] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#90e0ef] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#caf0f8] via-white to-[#caf0f8] border border-[#00b4d8] overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#90e0ef] text-[#03045e] uppercase tracking-wider inline-block">
              Let's Connect
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#03045e] tracking-tight">
              Ready to collaborate on your next project?
            </h3>
            <p className="text-[#1e3a5f] text-sm sm:text-base leading-relaxed">
              Whether you need data analysis, predictive machine learning models, or responsive modern web solutions, let's build something remarkable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold bg-[#0077b6] text-white hover:bg-[#03045e] shadow-lg shadow-[#0077b6]/20 transition-all hover:scale-105"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL DIALOG */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
