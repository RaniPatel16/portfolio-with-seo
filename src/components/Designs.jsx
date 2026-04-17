import { ExternalLink, Palette, PenTool } from 'lucide-react'

function DesignCard({ design, index }) {
  return (
    <div className="group relative p-8 rounded-[2.5rem] bg-slate-950/40 border border-white/5 hover:bg-slate-900/60 transition-all duration-500 hover:border-secondary/50 shadow-2xl backdrop-blur-xl"
         data-aos="fade-up" data-aos-delay={index * 50}>
      <div className="flex items-center justify-between mb-8">
        <div className="w-16 h-16 rounded-[1.5rem] bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-secondary">
          <Palette className="w-10 h-10 group-hover:scale-110 transition-transform text-secondary" />
        </div>
        <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
          {design.category}
        </span>
      </div>
      
      <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">{design.title}</h3>
      <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed line-clamp-2">{design.desc}</p>
      
      <a href={design.link} target="_blank" rel="noreferrer" 
         className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white text-slate-300 hover:text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all group/link border border-white/5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
        View in Figma
        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
      
      <div className="absolute bottom-6 right-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity">
        <PenTool size={100} />
      </div>
    </div>
  )
}

export default function Designs({ designs = [] }) {
  return (
    <section id="creative-sector" className="py-32 relative overflow-hidden bg-transparent">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24" data-aos="fade-up">
          <h2 className="text-sm font-mono text-secondary uppercase tracking-[1em] mb-6">Visual Journey</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            Creative <span className="text-gradient-secondary">Sector</span>
          </h3>
          <div className="h-2 w-32 bg-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} design={design} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
