import { useState } from 'react'
import { ExternalLink, Palette, Code2, Layout } from 'lucide-react'
import { GithubIcon, FigmaIcon } from './BrandIcons'

function GridCard({ item, index, type }) {
  const isFrontend = type === 'frontend'
  const isDesign = type === 'design'
  const accentColor = isDesign ? 'pink-500' : 'emerald-500'
  const borderColor = isDesign ? 'secondary' : 'emerald-500'
  
  return (
    <div className={`group relative p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:bg-slate-900/80 transition-all duration-500 hover:border-${borderColor}/50 shadow-xl backdrop-blur-xl`}
         data-aos="fade-up" data-aos-delay={index * 50}>
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl bg-${accentColor}/10 border border-${accentColor}/20 flex items-center justify-center`}>
          {isDesign ? <Palette className="w-8 h-8 text-secondary" /> : <Layout className="w-8 h-8 text-emerald-500" />}
        </div>
        <span className={`px-3 py-1 rounded-full bg-${accentColor}/10 text-${isDesign ? 'secondary' : 'emerald-500'} border border-${accentColor}/20 text-[10px] font-black uppercase tracking-widest`}>
          {item.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed line-clamp-2">{item.desc}</p>
      
      <div className="flex flex-wrap gap-3">
        {/* Primary View Action */}
        <a href={item.link} target="_blank" rel="noreferrer" 
           className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 bg-white/5 hover:bg-white text-slate-300 hover:text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all group/link border border-white/10 shadow-lg">
          {isDesign ? 'Explore Figma' : 'View Code'}
          {isDesign ? <FigmaIcon className="w-4 h-4" /> : <GithubIcon className="w-4 h-4" />}
        </a>
        
        {/* Deployment Link (If available) */}
        {item.deployment && (
          <a href={item.deployment} target="_blank" rel="noreferrer" 
             className={`flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 bg-${borderColor}/10 hover:bg-${borderColor} text-${borderColor} hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-${borderColor}/20`}>
            Live Demo
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        {isDesign ? <Palette size={60} /> : <Code2 size={60} />}
      </div>
    </div>
  )
}

export default function CreativeSector({ designs = [], frontend = [] }) {
  const [activeTab, setActiveTab] = useState('design')
  const [showAll, setShowAll] = useState(false)

  const currentItems = activeTab === 'design' ? designs : frontend
  const displayedItems = showAll ? currentItems : currentItems.slice(0, 3)

  return (
    <section id="creative-sector" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-mono text-secondary uppercase tracking-[1em] mb-4 text-center">Visual Expertise</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            Creative <span className="text-gradient">Sector</span>
          </h3>
          <div className="h-1.5 w-32 bg-secondary rounded-full mb-12"></div>
          
          {/* Dual Switcher */}
          <div className="flex items-center justify-center p-2 bg-slate-900/80 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-xl">
            <button 
              onClick={() => { setActiveTab('design'); setShowAll(false); }}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'design' ? 'bg-secondary text-white shadow-xl scale-105' : 'text-slate-500 hover:text-white'}`}>
              UI/UX Design
            </button>
            <button 
              onClick={() => { setActiveTab('frontend'); setShowAll(false); }}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'frontend' ? 'bg-emerald-500 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-white'}`}>
              Frontend Work
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, index) => (
              <GridCard key={index} item={item} index={index} type={activeTab} />
            ))}
          </div>
        </div>

        {currentItems.length > 3 && (
          <div className="mt-20 flex justify-center" data-aos="fade-up">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 rounded-full bg-slate-900 border-2 border-slate-700 hover:border-secondary text-white font-black hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center magnetic-btn text-[12px] uppercase tracking-[0.3em]"
            >
              {showAll ? 'View Less' : 'View More Concepts'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
