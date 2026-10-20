import { useState, useMemo } from 'react';
import { Search, FolderGit2, ArrowRight, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';

const categories = ['All', 'Cloud & AI', 'Frontend'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filtered projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Engineered Works"
        title="Featured Projects"
        highlight="& Case Studies"
        subtitle="A collection of real-world intelligent systems, predictive machine learning pipelines, and responsive web platforms."
      />

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#90e0ef] shadow-sm">
        {/* Categories */}
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
            placeholder="Search by title, keyword, or tech..."
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
          Showing <span className="text-[#03045e] font-bold">{filteredProjects.length}</span> of {projects.length} projects
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

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveModalProject}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-[#90e0ef] space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#caf0f8] flex items-center justify-center mx-auto text-[#0077b6]">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#03045e]">No projects found</h3>
          <p className="text-sm text-[#3a506b] max-w-sm mx-auto">
            We couldn't find any projects matching "{searchQuery}". Try searching for keywords like "Python", "Machine Learning", or "CSS".
          </p>
          <button
            onClick={clearFilters}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#0077b6] hover:bg-[#03045e] text-white transition-colors cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Custom Project CTA Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#90e0ef] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#03045e]">
            Have an intelligent project or idea in mind?
          </h3>
          <p className="text-sm text-[#3a506b] max-w-xl">
            I build end-to-end solutions tailored to your predictive analytics, machine learning, and web development requirements.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#0077b6] hover:bg-[#03045e] text-white shadow-md shadow-[#0077b6]/20 transition-all hover:scale-105"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Modal Dialog for Project Deep Dive */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
