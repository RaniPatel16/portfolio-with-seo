import { useRef, useState } from 'react'
import { ScrollText, Eye, ExternalLink, X } from 'lucide-react'
import { YoutubeIcon, GithubIcon, PostmanIcon } from './BrandIcons'

function ProjectCard({ project, index, onClick }) {
  const [activeImg, setActiveImg] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  
  return (
    <div className="project-container group relative h-[450px] cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 transition-all duration-500 hover:border-primary/50 shadow-2xl" 
         data-aos="zoom-in" data-aos-delay={index * 100}>
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0 p-1">
        <div className="absolute inset-0 rounded-[2.4rem] overflow-hidden">
          {(project.galleryImgs || []).map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${activeImg === idx ? 'opacity-40 scale-105 blur-[1px]' : 'opacity-0 scale-110'}`} 
              alt={`${project.title} ${idx+1}`} 
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="holo-grid absolute inset-0 opacity-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Hover Segments for Gallery */}
      <div className="absolute inset-0 z-10 flex">
        {(project.galleryImgs || []).map((_, idx) => (
          <div 
            key={idx}
            onMouseEnter={() => setActiveImg(idx)}
            className="flex-1 h-full cursor-pointer"
          />
        ))}
      </div>

      {/* Gallery Progress Bars */}
      <div className="absolute top-6 left-6 right-6 z-20 flex gap-2 pointer-events-none">
        {(project.galleryImgs || []).map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${activeImg === idx ? 'bg-primary shadow-[0_0_10px_#6366f1]' : 'bg-white/10'}`}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 w-full h-full p-10 flex flex-col justify-end pointer-events-none">
        <div className="space-y-4 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/30 backdrop-blur-xl">
              {project.icon || <ScrollText className="w-8 h-8" />}
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
              {project.categoryLabel || 'Featured Project'}
            </span>
          </div>
          
          <div>
            <h3 className="text-3xl font-black text-white tracking-tight mb-2 drop-shadow-lg">{project.title}</h3>
            <p className="text-slate-300 font-medium line-clamp-2 text-sm leading-relaxed mb-6 drop-shadow-md">{project.desc}</p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 pointer-events-auto">
            <button 
              onClick={() => setShowOptions(true)}
              className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              <Eye className="w-4 h-4" />
              Project Options
            </button>
            <button 
              onClick={() => onClick && onClick(index)}
              className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              Breakdown
            </button>
          </div>
        </div>
      </div>

      {/* Options Overlay */}
      <div className={`absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center p-8 ${showOptions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        <button 
          onClick={() => setShowOptions(false)}
          className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:rotate-90"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-10">
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Explore <span className="text-primary">{project.title}</span></h4>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Select an option to continue</p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <a href={project.repo} target="_blank" rel="noreferrer" 
             className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/10 transition-all group/opt">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <GithubIcon className="w-6 h-6 text-primary group-hover/opt:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-base leading-none mb-1">GitHub Code</p>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-none">View Repository</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-slate-600 group-hover/opt:text-white transition-colors" />
          </a>
          {project.postman && (
            <a href={project.postman} target="_blank" rel="noreferrer" 
               className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/10 transition-all group/opt">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <PostmanIcon className="w-6 h-6 text-orange-500 group-hover/opt:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-base leading-none mb-1">Postman Docs</p>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest leading-none">API Reference</p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto text-slate-600 group-hover/opt:text-white transition-colors" />
            </a>
          )}
          <a href={project.live} target="_blank" rel="noreferrer" 
             className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/10 transition-all group/opt">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
              <ExternalLink className="w-6 h-6 text-teal-400 group-hover/opt:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-base leading-none mb-1">Deploy Link</p>
              <p className="text-teal-400 text-[10px] font-black uppercase tracking-widest leading-none">Live Project</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-slate-600 group-hover/opt:text-white transition-colors" />
          </a>
          <a href="https://www.youtube.com/@RaniPatel-l2o" target="_blank" rel="noreferrer" 
             className="flex items-center gap-5 p-5 bg-white/5 hover:bg-white/10 rounded-[1.5rem] border border-white/10 transition-all group/opt">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <YoutubeIcon className="w-6 h-6 text-red-500 group-hover/opt:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-base leading-none mb-1">YouTube Video</p>
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest leading-none">Watch Demo</p>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-slate-600 group-hover/opt:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}


export default function Projects({ projects, onProjectClick }) {
  const [showAll, setShowAll] = useState(false)
  const displayedItems = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[1em] mb-6">Portfolio Hub</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <div className="h-1.5 w-32 bg-primary rounded-full mb-12"></div>
          <p className="max-w-2xl text-slate-400 font-medium leading-relaxed mb-12">
            Showcasing my most advanced full-stack systems, built with scalability and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} onClick={onProjectClick} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-20 flex justify-center" data-aos="fade-up">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 rounded-full bg-slate-900 border-2 border-slate-700 hover:border-primary text-white font-black hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center magnetic-btn text-[12px] uppercase tracking-[0.3em]"
            >
              {showAll ? 'View Less' : 'Explore All Apps'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
