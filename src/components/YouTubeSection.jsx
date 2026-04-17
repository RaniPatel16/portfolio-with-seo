import { ExternalLink, Play, Users, MessageSquare } from 'lucide-react'
import { YoutubeIcon } from './BrandIcons'

export default function YouTubeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20" id="youtube">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border border-white/5 relative group overflow-hidden shadow-2xl">
          {/* Animated Background Pulse */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 shadow-lg shadow-red-500/5">
                <YoutubeIcon className="w-6 h-6 text-[#FF0000] animate-pulse" />
                <span className="text-[#FF0000] font-black uppercase tracking-[0.3em] text-[10px]">Live Content & Tutorials</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                Watch My <br />
                <span className="text-gradient-red italic">Digital Journey</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                I share my coding experiences, live hackathon builds, and deep-dives into modern web technologies on my YouTube channel.
              </p>
              
              <div className="flex flex-wrap gap-10 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-white tracking-tighter">Live</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Play className="w-3 h-3 text-[#FF0000]" fill="currentColor" /> Streams
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-l border-white/5 pl-10">
                  <span className="text-3xl font-black text-white tracking-tighter">Tech</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Users className="w-3 h-3 text-secondary" /> Community
                  </span>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://www.youtube.com/@RaniPatel-l2o" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-[#FF0000] text-white font-black rounded-full hover:bg-[#CC0000] transition-all shadow-[0_15px_40px_rgba(255,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,0,0,0.5)] hover:scale-105 active:scale-95 magnetic-btn text-lg uppercase tracking-wider"
                >
                  Explore YouTube <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              {/* Mock Video Preview */}
              <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1772474429/Screenshot_2026-03-02_232329_uut3xj.png" 
                  alt="YouTube Thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-2xl border border-white/20">
                    <Play className="w-10 h-10 text-white fill-current ml-1" />
                  </div>
                </div>
                
                {/* Channel Badge Overlay */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 glass-card px-4 py-2 rounded-xl backdrop-blur-3xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white">
                    <YoutubeIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-white font-black tracking-widest uppercase">@RaniPatel</span>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 glass-card px-8 py-6 rounded-3xl border border-white/10 shadow-2xl animate-float backdrop-blur-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Latest Update</p>
                    <p className="text-white font-black text-xl tracking-tight mt-1">Join the Stream!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient-red {
          background: linear-gradient(135deg, #FF4D4D 0%, #FF0000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  )
}
