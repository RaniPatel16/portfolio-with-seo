import { useState, useEffect } from 'react'
import { Award, X, ChevronRight } from 'lucide-react'

export default function WinnerToast({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after preloader is done
    const timer = setTimeout(() => setIsVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed top-24 right-8 z-[1000] max-w-[280px] w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
      <div 
        onClick={() => {
          if (window.confetti) {
            window.confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#f59e0b', '#fbbf24', '#ffffff']
            });
          }
          onOpenModal();
        }}
        className="cursor-pointer glass-card p-4 rounded-[1.5rem] border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex items-center gap-4 relative overflow-hidden group hover:scale-[1.05] transition-all duration-500"
      >
        {/* Pulsing Gold Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent animate-pulse-slow"></div>
        
        {/* Winner Icon (Gold Medal Theme) */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] flex-shrink-0">
          <div className="w-full h-full rounded-[0.7rem] bg-dark flex items-center justify-center">
            <Award className="w-6 h-6 text-amber-400 group-hover:scale-125 transition-transform duration-500" />
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-grow z-10">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-500 mb-0.5">Special Award</p>
          <h4 className="text-white font-bold text-xs leading-tight mb-1 uppercase tracking-tight">Repo Reboot Finalist</h4>
          <div className="flex items-center gap-1 text-[8px] font-black text-slate-400 uppercase tracking-widest">
            Click to view <ChevronRight className="w-2.5 h-2.5 text-amber-500 animate-bounce-x" />
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
          className="absolute top-2 right-2 p-1 text-slate-600 hover:text-white transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}
