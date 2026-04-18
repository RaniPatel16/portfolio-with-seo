import { useState } from 'react'
import { ExternalLink, Palette, Code2, Layout, Database } from 'lucide-react'
import { GithubIcon, FigmaIcon, YoutubeIcon } from './BrandIcons'

function GridCard({ item, index, type }) {
  const isFrontend = type === 'frontend'
  const isDesign = type === 'design'
  const isFullStack = type === 'fullstack'
  
  const accentColor = isDesign ? 'pink-500' : isFullStack ? 'indigo-500' : 'emerald-500'
  const borderColor = isDesign ? 'secondary' : isFullStack ? 'primary' : 'emerald-500'
  const iconColor = isDesign ? 'text-secondary' : isFullStack ? 'text-primary' : 'text-emerald-500'
  
  return (
    <div className={`group relative p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:bg-slate-900/80 transition-all duration-500 hover:border-${borderColor}/50 shadow-xl backdrop-blur-xl`}
         data-aos="fade-up" data-aos-delay={index * 50}>
      <div className="flex items-center justify-between mb-8">
        <div className={`w-14 h-14 rounded-2xl bg-${accentColor}/10 border border-${accentColor}/20 flex items-center justify-center`}>
          {isDesign ? <Palette className={`w-8 h-8 ${iconColor}`} /> : isFullStack ? <Database className={`w-8 h-8 ${iconColor}`} /> : <Layout className={`w-8 h-8 ${iconColor}`} />}
        </div>
        <span className={`px-3 py-1 rounded-full bg-${accentColor}/10 ${iconColor} border border-${accentColor}/20 text-[10px] font-black uppercase tracking-widest`}>
          {item.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed line-clamp-2">{item.desc}</p>
      
      <div className="space-y-4">
        <div className="flex gap-3">
          {/* Main Action: Figma / GitHub */}
          <a href={item.link} target="_blank" rel="noreferrer" 
             className="group/action flex-1 relative overflow-hidden p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <div className={`absolute inset-0 bg-gradient-to-r ${isDesign ? 'from-secondary to-pink-500' : isFullStack ? 'from-primary to-indigo-500' : 'from-emerald-500 to-teal-400'} opacity-30 group-hover/action:opacity-100 transition-opacity`}></div>
            <div className="relative h-full bg-slate-950 rounded-2xl flex items-center justify-center gap-3 px-4 py-4 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                {isDesign ? 'Explore Figma' : 'Source Code'}
              </span>
              <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${isDesign ? 'text-secondary' : isFullStack ? 'text-primary' : 'text-emerald-500'}`}>
                {isDesign ? <FigmaIcon className="w-4 h-4" /> : <GithubIcon className="w-4 h-4" />}
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/action:opacity-100 transition-opacity pointer-events-none"></div>
          </a>

          {/* Live Demo: Hidden for UI/UX Design as per previous request */}
          {item.deployment && !isDesign && (
            <a href={item.deployment} target="_blank" rel="noreferrer" 
               className="group/demo relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-110 active:scale-90">
              <ExternalLink className="w-5 h-5" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[8px] font-black uppercase tracking-tighter rounded-full opacity-0 group-hover/demo:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                Live Preview
              </div>
            </a>
          )}
        </div>

        {/* YouTube: Full Width Action */}
        {item.youtube && (
          <a href={item.youtube} target="_blank" rel="noreferrer" 
             className="group/youtube relative w-full overflow-hidden p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-400 opacity-20 group-hover/youtube:opacity-100 transition-opacity"></div>
            <div className="relative bg-slate-950 rounded-2xl flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover/youtube:bg-red-500 group-hover/youtube:text-white transition-colors">
                  <YoutubeIcon className="w-5 h-5 text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Watch Session</p>
                  <p className="text-[8px] font-medium text-slate-500 uppercase tracking-tighter">Project Walkthrough</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/youtube:translate-x-1 transition-transform">
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </div>
            </div>
            {/* Audio Wave Animation on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden flex gap-[2px] px-1 opacity-0 group-hover/youtube:opacity-50 transition-opacity">
              {[1,2,3,4,5,6,7,8,9,0].map((i) => (
                <div key={i} className="flex-1 bg-red-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </a>
        )}
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        {isDesign ? <Palette size={60} /> : isFullStack ? <Database size={60} /> : <Code2 size={60} />}
      </div>
    </div>
  )
}

export default function CreativeSector({ designs = [], frontend = [], fullstack = [] }) {
  const [activeTab, setActiveTab] = useState('design')
  const [showAll, setShowAll] = useState(false)

  const currentItems = activeTab === 'design' ? designs : activeTab === 'fullstack' ? fullstack : frontend
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
          
          {/* Triple Switcher */}
          <div className="flex flex-wrap items-center justify-center p-2 bg-slate-900/80 backdrop-blur-2xl border border-white/5 rounded-[2rem] shadow-xl gap-2">
            <button 
              onClick={() => { setActiveTab('design'); setShowAll(false); }}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'design' ? 'bg-secondary text-white shadow-xl scale-105' : 'text-slate-500 hover:text-white'}`}>
              UI/UX Design
            </button>
            <button 
              onClick={() => { setActiveTab('frontend'); setShowAll(false); }}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'frontend' ? 'bg-emerald-500 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-white'}`}>
              Frontend Work
            </button>
            <button 
              onClick={() => { setActiveTab('fullstack'); setShowAll(false); }}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === 'fullstack' ? 'bg-primary text-white shadow-xl scale-105' : 'text-slate-500 hover:text-white'}`}>
              Full Stack
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
              {showAll ? 'View Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

