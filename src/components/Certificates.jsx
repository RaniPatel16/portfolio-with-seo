import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const certificates = [
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798803/Screenshot_2026-04-09_210511_gvo8bh.png',
    title: 'RepoReboot',
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798250/Screenshot_2026-04-09_210604_twvorn.png',
    title: 'FinAgent Hackathon',
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798225/Screenshot_2026-04-09_210551_zrcmrk.png',
    title: 'Rethink Hackathon',
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798156/Screenshot_2026-04-09_223247_ypywny.png',
    title: 'CodeMatrix Genesis',
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798129/Screenshot_2026-04-09_223321_q9eue2.png',
    title: 'Code Matrix Rd 1',
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798103/Screenshot_2026-04-09_223346_qtjjum.png',
    title: "Hack.X'26 Final",
  },
  {
    img: 'https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1775798024/Screenshot_2026-04-09_223412_m0cxfw.png',
    title: 'Hack For Us',
  },
]

// Full-screen lightbox for viewing certificate at full size
function CertLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all border border-white/10 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.15)] border border-white/10 bg-slate-950">
          <img
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={onPrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'bg-indigo-400 scale-150 shadow-[0_0_8px_rgba(99,102,241,0.6)]'
                    : 'bg-white/25'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Counter + Open full */}
        <div className="flex items-center gap-6 mt-4">
          <span className="text-white/40 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
          <a
            href={images[currentIndex].img}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Full Size
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-tight">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            Recognition of my dedication and technical expertise across multiple domains.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCerts.map((cert, i) => (
            <a
              key={i}
              href={cert.img}
              target="_blank"
              rel="noreferrer"
              className="group relative cursor-pointer block rounded-2xl overflow-hidden bg-slate-900/80 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-auto object-contain bg-slate-950 transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500/90 text-white backdrop-blur-md shadow-lg border border-indigo-400/50">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-bold">See Certificate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700" />
            </a>
          ))}
        </div>

        {certificates.length > 3 && (
          <div className="mt-16 flex justify-center" data-aos="fade-up">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-full bg-slate-900 border-2 border-slate-700 hover:border-primary text-white font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center magnetic-btn text-[14px] uppercase tracking-widest"
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
