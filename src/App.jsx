import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { Layout, Building2, Brain, Presentation, Code2 } from 'lucide-react'

import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import CreativeSector from './components/CreativeSector'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WinnerModal from './components/WinnerModal'
import WinnerToast from './components/WinnerToast'
import CommandPalette from './components/CommandPalette'
import ProjectModal from './components/ProjectModal'
import { GithubIcon } from './components/BrandIcons'

gsap.registerPlugin(ScrollTrigger)

const projectData = [
  { title: "Rupiya App", desc: "A smart personal finance application designed to help users track income, expenses, and savings efficiently. The app provides real-time insights through dashboards, helping users manage budgets, analyze spending patterns, and make better financial decisions. Built with a user-friendly interface and secure data handling, Rupiyaa simplifies everyday money management.", img: "https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1772474429/Screenshot_2026-03-02_232329_uut3xj.png", tags: ['FinTech', 'OCR'], live: "#", repo: "https://github.com/RaniPatel16/rupiya-app", galleryImgs: ["https://res.cloudinary.com/dpktusyjs/image/upload/q_auto/f_auto/v1772474429/Screenshot_2026-03-02_232329_uut3xj.png", "/tech_generic_1_1775060487362.png", "/tech_generic_2_1775060512166.png", "/tech_generic_3_1775060544286.png", "/tech_generic_4_1775060561865.png"], auraColor: "rgba(245, 158, 11, 0.3)", scanColor: "#f59e0b", borderColor: "primary", tagColors: [{ bg: "amber-500", text: "amber-500" }, { bg: "violet-500", text: "violet-500" }], hoverColor: "primary", icon: <Layout className="w-8 h-8" />, categoryLabel: "FinTech App" },
  { title: "Expense Management", desc: "A full-stack expense tracking system that allows users to record, categorize, and monitor their daily expenses. It includes features like budget setting, expense reports, and visual analytics (charts/graphs) to improve financial awareness. The system helps users control unnecessary spending and maintain financial discipline.", img: "/expense_management_cover.png", tags: ['Finance', 'Dashboard'], live: "#", repo: "https://github.com/RaniPatel16/expance-managment", galleryImgs: ["/expense_management_cover.png", "/expense_management_1_1775060321664.png", "/tech_generic_3_1775060544286.png", "/tech_generic_5_1775060584725.png", "/tech_generic_2_1775060512166.png"], auraColor: "rgba(139, 92, 246, 0.3)", scanColor: "#8b5cf6", borderColor: "secondary", tagColors: [{ bg: "orange-500", text: "orange-500" }, { bg: "amber-500", text: "amber-500" }], hoverColor: "secondary", icon: <Building2 className="w-8 h-8" />, categoryLabel: "Enterprise Solution" },
  { title: "GitHub Analyzer", desc: "A powerful tool that analyzes GitHub profiles and repositories to provide meaningful insights such as contribution activity, top languages, repository stats, and coding patterns. It helps developers evaluate performance, showcase their work, and improve their coding consistency through data-driven feedback.", img: "/github_analyzer_cover.png", tags: ['GitHub', 'API'], live: "#", repo: "https://github.com/RaniPatel16/git-anhalyzer", galleryImgs: ["/github_analyzer_cover.png", "/github_portfolio_analyzer_1_1775060421953.png", "/tech_generic_2_1775060512166.png", "/tech_generic_1_1775060487362.png", "/tech_generic_6_1775060604458.png"], auraColor: "rgba(245, 158, 11, 0.3)", scanColor: "#f59e0b", borderColor: "amber-500", tagColors: [{ bg: "amber-500", text: "amber-500" }, { bg: "stone-500", text: "stone-500" }], hoverColor: "amber-400", icon: <GithubIcon className="w-8 h-8" />, categoryLabel: "Developer Tool" },
  { title: "Ed-Learning", desc: "An interactive e-learning platform that enables users to access courses, watch video lectures, and track learning progress. It includes features like authentication, course management, and progress tracking, providing a seamless digital learning experience. Designed to make education accessible and engaging for students.", img: "/adaptive_learning_cover.png", tags: ['EdTech', 'AI'], live: "#", repo: "https://github.com/RaniPatel16/ed-learning", galleryImgs: ["/adaptive_learning_cover.png", "/adaptive_learning_1_1775060342759.png", "/tech_generic_3_1775060544286.png", "/tech_generic_4_1775060561865.png", "/tech_generic_1_1775060487362.png"], auraColor: "rgba(139, 92, 246, 0.3)", scanColor: "#8b5cf6", borderColor: "violet-500", tagColors: [{ bg: "violet-500", text: "violet-500" }, { bg: "amber-500", text: "amber-500" }], hoverColor: "violet-500", icon: <Presentation className="w-8 h-8" />, categoryLabel: "EdTech AI" },
  { title: "AI Chatbott", desc: "Intelligent conversational agent with deep learning capabilities.", img: "/ai_contract_cover.png", tags: ['AI', 'NLP'], live: "#", repo: "https://github.com/RaniPatel16/ai-chatbott", galleryImgs: ["/ai_contract_cover.png", "/ai_contract_1_1775060384879.png", "/tech_generic_1_1775060487362.png", "/tech_generic_2_1775060512166.png", "/tech_generic_3_1775060544286.png"], auraColor: "rgba(245, 158, 11, 0.3)", scanColor: "#f59e0b", borderColor: "orange-500", tagColors: [{ bg: "orange-500", text: "orange-500" }, { bg: "violet-500", text: "violet-500" }], hoverColor: "amber-500", icon: <Brain className="w-8 h-8" />, categoryLabel: "AI Assistant" },
]

const designData = [
  { title: "CodingGita", desc: "Educational platform UI with a focus on seamless navigation.", link: "https://www.figma.com/design/T6T5sAmdN3QrGw1h4UVKax/codingGita-WEB-1?node-id=0-1", deployment: "https://www.figma.com/proto/T6T5sAmdN3QrGw1h4UVKax/codingGita-WEB-1", category: "EdTech" },
  { title: "CV Resume", desc: "Professional and clean resume layouts for creative developers.", link: "https://www.figma.com/design/9XnnHINYuQi5CfOGUBeDhv/CV-Resume--Community-", deployment: "#", category: "Utility" },
  { title: "BingeBox Clone", desc: "Netflix-inspired streaming platform interface.", link: "https://www.figma.com/design/0b0o8GU0Gswvyxzpwwot8K/BingeBox--Community-", deployment: "#", category: "Entertainment" },
  { title: "Netflix Clone", desc: "Modern darker-themed streaming interface.", link: "#", deployment: "#", category: "Entertainment" }
]

const frontendData = [
  { title: "LMS Clone", desc: "A comprehensive Learning Management System interface for managing courses and students.", link: "https://github.com/RaniPatel16/LMS-clone", deployment: "https://preeminent-donut-bfbc7e.netlify.app/", category: "EdTech" },
  { title: "BigBasket Clone", desc: "Highly detailed grocery e-commerce frontend replica.", link: "https://github.com/RaniPatel16/fullwebsite/tree/main/website2/bigbasket", deployment: "https://bigbasketrani.netlify.app/", category: "E-Commerce" },
  { title: "Porter Clone", desc: "Efficient logistics and delivery platform interface build.", link: "https://github.com/RaniPatel16/fullwebsite", deployment: "https://porterrani.netlify.app/", category: "Logistics" },
  { title: "AI Chatbott", desc: "Interactive and responsive frontend for an AI-powered conversational agent.", link: "https://github.com/RaniPatel16/ai-chatbott", deployment: "#", category: "AI & Tech" },
  { title: "Service Portal", desc: "Interactive service management interface for local businesses.", link: "https://github.com/RaniPatel16/fullwebsite/tree/main/website5", deployment: "#", category: "Web App" }
]

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [winnerModalOpen, setWinnerModalOpen] = useState(false)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [projectModalData, setProjectModalData] = useState(null)
  const bgCanvasRef = useRef(null)
  const dataStreamsRef = useRef(null)

  // Initialize and refresh AOS after preloader completes
  useEffect(() => {
    if (preloaderDone) {
      const timer = setTimeout(() => {
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' })
        AOS.refresh()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [preloaderDone])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setCmdPaletteOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setCmdPaletteOpen(false)
        setWinnerModalOpen(false)
        setProjectModalData(null)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Scroll progress + ghost text parallax + journey progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100

      const progressEl = document.getElementById('scroll-progress')
      if (progressEl) progressEl.style.width = scrolled + '%'

      const ghostText = document.getElementById('ghost-text')
      if (ghostText) ghostText.style.transform = `rotate(-5deg) translateX(${scrollTop * 0.3}px)`

      // Journey progress
      const journeyProgress = document.getElementById('journey-progress')
      const experienceSection = document.getElementById('experience')
      if (journeyProgress && experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        const sectionHeight = experienceSection.offsetHeight
        const scrollPos = -rect.top
        const progress = Math.max(0, Math.min(100, (scrollPos / (sectionHeight - 400)) * 100))
        journeyProgress.style.height = progress + '%'
      }

      // Milestone activation
      document.querySelectorAll('.milestone-node').forEach(node => {
        const nodeRect = node.getBoundingClientRect()
        if (nodeRect.top < window.innerHeight * 0.7) {
          node.classList.add('active')
        } else {
          node.classList.remove('active')
        }
      })

      // Navbar shadow
      const navbar = document.getElementById('navbar')
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbar.classList.remove('bg-transparent')
        } else {
          navbar.classList.remove('shadow-[0_10px_30px_rgba(0,0,0,0.5)]', 'bg-dark/80')
          navbar.classList.add('bg-transparent')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Clean URL Scroll Tracker (Intersection Observer)
  useEffect(() => {
    if (!preloaderDone) return

    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact']
    const observerOptions = {
      root: null,
      threshold: 0.5,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const cleanPath = sectionId === 'hero' ? '/' : `/${sectionId}`
          
          // Only update if current path is different to avoid history bloat
          if (window.location.pathname !== cleanPath) {
            window.history.replaceState(null, '', cleanPath)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [preloaderDone])

  // Handle Initial Load Deep Linking (e.g., /about -> scroll to about)
  useEffect(() => {
    if (preloaderDone) {
      const path = window.location.pathname.replace('/', '')
      if (path && document.getElementById(path)) {
        setTimeout(() => {
          document.getElementById(path).scrollIntoView({ behavior: 'smooth' })
        }, 1000)
      }
    }
  }, [preloaderDone])

  // SUPREME ERA: The Hyper-Reflective Prism
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.0015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 200, 600);

    // 1. The Liquid Ocean
    const oceanGeom = new THREE.PlaneGeometry(2500, 2500, 100, 100);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    const ocean = new THREE.Mesh(oceanGeom, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    scene.add(ocean);

    // 2. Floating Shards (Procedural Crystals)
    const shards = [];
    const shardGeom = new THREE.IcosahedronGeometry(10, 0);
    for (let i = 0; i < 40; i++) {
        const shardMat = new THREE.MeshPhongMaterial({
            color: Math.random() > 0.5 ? 0x6366f1 : 0xec4899,
            transparent: true,
            opacity: 0.4,
            flatShading: true
        });
        const shard = new THREE.Mesh(shardGeom, shardMat);
        shard.position.set(
            (Math.random() - 0.5) * 1500,
            Math.random() * 400 + 100,
            (Math.random() - 0.5) * 1500
        );
        shard.rotation.set(Math.random(), Math.random(), Math.random());
        shard.userData = { 
            speed: Math.random() * 0.02,
            floatSpeed: Math.random() * 0.01,
            phase: Math.random() * Math.PI * 2
        };
        scene.add(shard);
        shards.push(shard);
    }

    // 3. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const l1 = new THREE.PointLight(0x6366f1, 30);
    l1.position.set(0, 500, 500);
    scene.add(l1);

    const l2 = new THREE.PointLight(0xec4899, 20);
    l2.position.set(-500, 300, 0);
    scene.add(l2);

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    let shockwave = { active: false, x: 0, y: 0, time: 0 };
    let scrollY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2);
    });

    window.addEventListener('mousedown', (e) => {
        // Simple 3D conversion for shockwave
        shockwave.active = true;
        shockwave.x = (e.clientX / window.innerWidth - 0.5) * 2000;
        shockwave.y = (e.clientY / window.innerHeight - 0.5) * 2000;
        shockwave.time = 0;
    });

    window.addEventListener('scroll', () => scrollY = window.scrollY);

    function animate() {
        requestAnimationFrame(animate);

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        const time = Date.now() * 0.001;

        // Ocean Animation
        const pos = oceanGeom.attributes.position.array;
        if (shockwave.active) shockwave.time += 0.1;
        if (shockwave.time > 20) shockwave.active = false;

        for (let i = 0; i < pos.length; i += 3) {
            const x = pos[i];
            const y = pos[i+1];
            
            let z = Math.sin(x * 0.005 + time) * 30 + Math.cos(y * 0.005 + time) * 30;
            
            // Mouse Ripple
            const dx = x - targetX;
            const dy = y - (-targetY + 400);
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) z += (200 - dist) * 0.3;

            // Shockwave Logic
            if (shockwave.active) {
                const sdist = Math.sqrt(Math.pow(x - shockwave.x, 2) + Math.pow(y - shockwave.y, 2));
                const waveHeight = Math.sin(sdist * 0.05 - shockwave.time * 2) * (50 / (1 + sdist * 0.005));
                if (Math.abs(sdist - shockwave.time * 40) < 100) z += waveHeight;
            }
            pos[i+2] = z;
        }
        oceanGeom.attributes.position.needsUpdate = true;

        // Shard Animation
        shards.forEach(shard => {
            shard.rotation.x += shard.userData.speed;
            shard.rotation.y += shard.userData.speed;
            shard.position.y += Math.sin(time + shard.userData.phase) * 0.5;
            // Orbit movement
            shard.position.x += (targetX * 0.1 - shard.position.x) * 0.01;
        });

        // Cinematic Camera
        camera.position.z = 600 + scrollY * 0.5;
        camera.position.x = targetX * 0.2;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
        window.removeEventListener('resize', onResize);
        renderer.dispose();
    };
  }, []);

  // Data Streams (Matrix Rain)
  useEffect(() => {
    const streamCanvas = dataStreamsRef.current
    if (!streamCanvas) return
    const sctx = streamCanvas.getContext('2d')
    let sw = streamCanvas.width = window.innerWidth
    let sh = streamCanvas.height = window.innerHeight
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*"
    const fSize = 14
    const cols = sw / fSize
    const drps = []
    for (let i = 0; i < cols; i++) drps[i] = 1

    const interval = setInterval(() => {
      sctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      sctx.fillRect(0, 0, sw, sh)
      sctx.fillStyle = '#6366f1'
      sctx.font = fSize + 'px monospace'
      for (let i = 0; i < drps.length; i++) {
        const t = chars.charAt(Math.floor(Math.random() * chars.length))
        sctx.fillText(t, i * fSize, drps[i] * fSize)
        if (drps[i] * fSize > sh && Math.random() > 0.975) drps[i] = 0
        drps[i]++
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Particles.js (loaded via CDN in index.html)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#6366f1", "#ec4899", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, distance: 150, color: "#64748b", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "window",
            events: { onhover: { enable: true, mode: ["grab", "bubble"] }, onclick: { enable: true, mode: "repulse" } },
            modes: { grab: { distance: 180, line_linked: { opacity: 0.8 } }, bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 }, repulse: { distance: 200, duration: 0.4 } }
          },
          retina_detect: true
        })
      }
    }
    document.body.appendChild(script)
    return () => { if (document.body.contains(script)) document.body.removeChild(script) }
  }, [])




  const winnerModalShownRef = useRef(false)

  const triggerVictoryCelebration = () => {
    if (window.confetti) {
      // 300ms sync with modal reveal
      setTimeout(() => {
        const count = 350;
        // zIndex: 9999999 ensures it's on top of EVERY modal
        const defaults = { origin: { x: 0.5, y: 0.5 }, zIndex: 9999999 };
        const fire = (particleRatio, opts) => {
          window.confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
        };

        // Ultra-High Tech Burst from the Center
        fire(0.25, { spread: 40, startVelocity: 95, scalar: 2 });
        fire(0.2, { spread: 80, startVelocity: 65, scalar: 1.5 });
        fire(0.35, { spread: 140, decay: 0.91, scalar: 1.8 });
        fire(0.1, { spread: 180, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 180, startVelocity: 85, scalar: 1.5 });

        // Continuous Side Showers
        const end = Date.now() + 5000;
        const frame = () => {
          window.confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0, y: 0.5 }, zIndex: 9999999, colors: ['#6366f1', '#ec4899', '#f59e0b', '#ffffff'] });
          window.confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1, y: 0.5 }, zIndex: 9999999, colors: ['#6366f1', '#ec4899', '#f59e0b', '#ffffff'] });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
      }, 300);
    }
  }

  const showWinnerModalOnce = () => {
    if (!winnerModalShownRef.current) {
      winnerModalShownRef.current = true
      setWinnerModalOpen(true)
      triggerVictoryCelebration()
    }
  }

  const handlePreloaderDone = () => {
    setPreloaderDone(true)
  }


  const openProjectModal = (index) => {
    setProjectModalData(projectData[index])
  }

  return (
    <div className="font-sans antialiased text-slate-300 selection:bg-secondary selection:text-white overflow-x-hidden bg-transparent">
      {/* Three.js Background */}
      <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
      <canvas id="data-streams-canvas" ref={dataStreamsRef}></canvas>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderDone} />

      {/* Ghost Text */}
      <div className="ghost-text-container">
        <div className="ghost-text" id="ghost-text">RANI PATEL</div>
      </div>

      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      {/* Background Decoration */}
      <div className="fixed inset-0 z-[-5] bg-dark overflow-hidden">
        <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>
        <div className="blob w-96 h-96 bg-primary/20 rounded-full -top-20 -left-20 mix-blend-screen opacity-50"></div>
        <div className="blob w-96 h-96 bg-secondary/20 rounded-full -bottom-20 -right-20 mix-blend-screen opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Reveal Wrapper */}
      <div className={`transition-all duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0 scale-[0.98]'}`}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects projects={projectData} onProjectClick={openProjectModal} />
          <CreativeSector designs={designData} frontend={frontendData} />
          <Certificates />
          <Contact />
          <Footer />
        </main>
      </div>

      {/* Modals */}
      <WinnerModal isOpen={winnerModalOpen} onClose={() => setWinnerModalOpen(false)} />
      {preloaderDone && <WinnerToast onOpenModal={() => { setWinnerModalOpen(true); triggerVictoryCelebration(); }} />}
      <CommandPalette isOpen={cmdPaletteOpen} onClose={() => setCmdPaletteOpen(false)} />
      <ProjectModal data={projectModalData} onClose={() => setProjectModalData(null)} />

      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" id="liquid-map" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default App
