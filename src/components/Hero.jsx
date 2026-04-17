import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, Code2, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetCodeIcon, YoutubeIcon } from './BrandIcons'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    // Simple typed effect
    const strings = ['Web Developer', 'UI/UX Designer', 'Computer Engineer', 'Problem Solver']
    let strIdx = 0, charIdx = 0, deleting = false
    const el = typedRef.current
    if (!el) return
    let timeoutId

    const type = () => {
      const current = strings[strIdx]
      if (!deleting) {
        charIdx++
        el.textContent = current.slice(0, charIdx)
        if (charIdx >= current.length) {
          deleting = true
          timeoutId = setTimeout(type, 2000)
          return
        }
        timeoutId = setTimeout(type, 50)
      } else {
        charIdx--
        el.textContent = current.slice(0, charIdx)
        if (charIdx <= 0) {
          deleting = false
          strIdx = (strIdx + 1) % strings.length
          timeoutId = setTimeout(type, 300)
          return
        }
        timeoutId = setTimeout(type, 30)
      }
    }
    type()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-x-hidden">
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
        <div className="order-2 md:order-1 text-center md:text-left w-full flex flex-col items-center md:items-start">

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] font-display" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm <br />
            <span className="text-gradient inline-block mt-2 font-black italic tracking-tight pr-8" style={{ filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))' }}>
              Rani Patel
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-400 mb-8 font-medium">
            I am a <span ref={typedRef} className="text-white font-bold decoration-primary decoration-4">Web Developer</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="300">
            I design and build <span className="text-white">responsive</span>, <span className="text-white">user-friendly</span>, and <span className="text-white">performant</span> web applications. Turning complex problems into elegant, beautiful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center" data-aos="fade-up" data-aos-delay="400">
            <a href="/resume.html" target="_blank" rel="noreferrer" 
               onClick={() => {
                 const link = document.createElement('a');
                 link.href = '/resume.html';
                 link.download = 'Rani_Patel_Resume.html';
                 link.click();
               }}
               className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-full hover:shadow-[0_10px_40px_rgba(99,102,241,0.6)] transition-all flex items-center justify-center gap-3 magnetic-btn text-lg tracking-wide uppercase">
              View & Download <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-3" data-aos="fade-up" data-aos-delay="500">
            <a href="https://github.com/RaniPatel16" target="_blank" rel="noreferrer" title="GitHub"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-white/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm group">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rani-patel-5aa5a3397" target="_blank" rel="noreferrer" title="LinkedIn"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/10 text-slate-300 hover:text-[#0a66c2] transition-all duration-300 hover:scale-110 backdrop-blur-sm group">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/QGxRFjxdGR/" target="_blank" rel="noreferrer" title="LeetCode"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-[#FFA116]/60 hover:bg-[#FFA116]/10 text-slate-300 hover:text-[#FFA116] transition-all duration-300 hover:scale-110 backdrop-blur-sm group">
              <LeetCodeIcon className="w-6 h-6 fill-current" />
            </a>
            <a href="https://x.com/RaniPatel161206" target="_blank" rel="noreferrer" title="Twitter / X"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-white/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm group">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@RaniPatel-l2o" target="_blank" rel="noreferrer" title="YouTube"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-[#FF0000]/60 hover:bg-[#FF0000]/10 text-slate-300 hover:text-[#FF0000] transition-all duration-300 hover:scale-110 backdrop-blur-sm group">
              <YoutubeIcon className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center mb-4 md:mb-0 w-full" data-aos="zoom-in" data-aos-duration="1200">
          <div className="relative w-full max-w-[320px] aspect-[4/5] md:max-w-[440px] md:aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img src="https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1776056836/Screenshot_2026-04-10_202949_njx4kq.png" alt="Rani Patel" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-primary w-5 h-5" />
      </div>
    </section>
  )
}
