import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const nameRef = useRef(null)
  const subRef = useRef(null)
  const lineRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    document.body.classList.add('preloader-active')
    
    // 1. Snappier Counter
    const countObj = { val: 0 }
    gsap.to(countObj, {
      val: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(countObj.val))
    })

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.()
      }
    })

    // 2. Initial Setup
    const letters = nameRef.current.querySelectorAll('.char')
    gsap.set(letters, { y: 100, skewY: 10 })
    gsap.set(subRef.current, { opacity: 0, y: 10 })
    gsap.set(lineRef.current, { scaleX: 0 })

    // 3. Accelerated Sequence
    tl.to(lineRef.current, { scaleX: 1, duration: 1, ease: "expo.inOut" })
    
    tl.to(letters, {
      y: 0,
      skewY: 0,
      stagger: 0.03,
      duration: 1,
      ease: "expo.out"
    }, "-=0.6")

    tl.to(subRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.7")

    // 4. Compact Luxury Drift
    tl.to(nameRef.current, {
      letterSpacing: "0.25em",
      duration: 2.5,
      ease: "none"
    }, "-=0.5")

    // 5. Faster Liquid Exit
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.2
    })

    return () => {
      document.body.classList.remove('preloader-active')
      document.body.style.overflow = 'auto'
    }
  }, [onComplete])

  return (
    <div ref={containerRef} id="preloader" style={{
      position: 'fixed', inset: 0, zIndex: 100000, 
      backgroundColor: '#020617', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Ambience */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Masked Name Container - Fixed Clipping with Padding */}
        <div style={{ overflow: 'visible', padding: '10px 40px' }}>
          <h1 ref={nameRef} style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            color: '#fff',
            textTransform: 'uppercase',
            margin: 0,
            display: 'flex',
            letterSpacing: '0.15em',
            textAlign: 'center',
            justifyContent: 'center'
          }}>
            {"RANI PATEL".split("").map((char, i) => (
              <span key={i} className="char" style={{ 
                display: 'inline-block', 
                minWidth: char === " " ? "0.3em" : "auto" 
              }}>
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Separator Line */}
        <div ref={lineRef} style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          marginTop: '5px'
        }}></div>

        {/* Professional Subheading */}
        <div ref={subRef} style={{ marginTop: '20px' }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.4)', 
            fontSize: 'max(10px, 0.8vw)', 
            letterSpacing: '0.6em', 
            textTransform: 'uppercase', 
            fontWeight: 500,
            margin: 0
          }}>
            Creative Full Stack Developer
          </p>
        </div>

        {/* Discrete Fractional Counter */}
        <div style={{ 
          position: 'absolute', 
          bottom: '-120px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: 0.3
        }}>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#6366f1', fontWeight: 900 }}>{percent.toString().padStart(3,'0')}</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 20px' }}>
            <div style={{ width: `${percent}%`, height: '100%', background: '#6366f1' }}></div>
          </div>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#fff' }}>100</span>
        </div>
      </div>

      {/* Side Decorative Coordinate */}
      <div style={{ position: 'absolute', top: '50%', left: '5vw', transform: 'translateY(-50%) rotate(-90deg)', opacity: 0.1 }}>
        <p style={{ color: '#fff', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>40.7128° N, 74.0060° W</p>
      </div>
    </div>
  )
}
