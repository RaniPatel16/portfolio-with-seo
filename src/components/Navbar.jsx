import { useState, useRef, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMobile = () => {
    setMobileOpen(prev => !prev)
  }

  const closeMenu = () => setMobileOpen(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
      // Update URL without #
      const cleanPath = targetId === 'hero' ? '/' : `/${targetId}`
      window.history.pushState(null, '', cleanPath)
    }
    closeMenu()
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#creative-sector', label: 'Design' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed w-full z-[999999] transition-all duration-300 bg-transparent backdrop-blur-md" id="navbar">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex flex-row items-center gap-3 group no-underline">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 rounded-xl overflow-hidden drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <img src="/rp_logo.png" alt="RP Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold text-[9px] uppercase tracking-[0.35em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap">Software Dev</span>
          </div>
        </a>

        <div className="hidden md:flex space-x-8 items-center font-semibold text-sm">
          {navLinks.map(link => (
            <a key={link.href} 
               href={link.href} 
               onClick={(e) => scrollToSection(e, link.href)}
               className="nav-link text-slate-400 hover:text-white transition-all magnetic-btn">
              {link.label}
            </a>
          ))}
          <a href="/resume.html" 
             onClick={(e) => {
               e.preventDefault();
               window.open('/resume.html', '_blank');
               const link = document.createElement('a');
               link.href = '/resume.html';
               link.download = 'Rani_Patel_Resume.html';
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
             }}
             className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 text-sm font-bold tracking-wide magnetic-btn">
            Download Resume
          </a>
        </div>

        <button className="md:hidden p-2 text-white border border-slate-700/50 rounded-lg bg-slate-800/50 backdrop-blur-sm focus:outline-none transition-all hover:bg-slate-700/50" onClick={toggleMobile}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`${mobileOpen ? 'block' : 'hidden'} md:hidden glass-card border-t border-slate-800/50 bg-dark/95 backdrop-blur-2xl absolute w-full shadow-2xl transition-all duration-500`}
           style={{ opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(-20px)' }}>
        <div className="flex flex-col p-8 space-y-6 text-center">
          {navLinks.map(link => (
            <a key={link.href} 
               href={link.href} 
               onClick={(e) => scrollToSection(e, link.href)} 
               className="text-xl font-semibold text-slate-300 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://www.youtube.com/@RaniPatel-l2o" target="_blank" rel="noreferrer" 
             className="text-xl font-semibold text-slate-300 hover:text-[#FF0000] transition-colors">
            YouTube
          </a>
          <div className="pt-4 border-t border-slate-800/50">
            <a href="/resume.html" 
               onClick={(e) => {
                 e.preventDefault();
                 window.open('/resume.html', '_blank');
                 const link = document.createElement('a');
                 link.href = '/resume.html';
                 link.download = 'Rani_Patel_Resume.html';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
               }}
               className="w-full inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/20">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
