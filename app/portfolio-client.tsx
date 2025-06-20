"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Brain,
  Server,
  Award,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// PDF generation utility
const generateResumePDF = () => {
  if (typeof window === "undefined") return

  try {
    const resumeWindow = window.open("", "_blank")
    if (!resumeWindow) {
      alert("Please allow popups to download the PDF resume")
      return
    }

    const resumeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Muhammad Abdullah Ghani - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
          .name { font-size: 28px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
          .title { font-size: 18px; color: #6b7280; margin-bottom: 10px; }
          .contact { font-size: 14px; color: #4b5563; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 20px; font-weight: bold; color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px; }
          .project { margin-bottom: 20px; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; }
          .tech-item { display: inline-block; background: #dbeafe; color: #1e40af; padding: 2px 6px; margin: 2px; border-radius: 3px; font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">MUHAMMAD ABDULLAH GHANI</div>
          <div class="title">Software Engineer</div>
          <div class="contact">abdullaghani206@gmail.com | +92 3168848001 | Islamabad</div>
        </div>
        <div class="section">
          <div class="section-title">TECHNICAL SKILLS</div>
          <p>MERN Stack, AI/ML, DevOps, Python, JavaScript, React, Node.js, MongoDB, Docker, Kubernetes</p>
        </div>
        <div class="section">
          <div class="section-title">PROJECTS</div>
          <div class="project">
            <h3>AI-Powered Multimodal Sentiment Analysis System</h3>
            <p>Developed an AI system using ResNet18-based CNN with React frontend and Flask backend.</p>
            <div><span class="tech-item">Python</span><span class="tech-item">PyTorch</span><span class="tech-item">React</span></div>
          </div>
          <div class="project">
            <h3>Weather Dashboard with ChatBot Integration</h3>
            <p>5-day weather forecast dashboard with AI chatbot integration.</p>
            <div><span class="tech-item">JavaScript</span><span class="tech-item">HTML</span><span class="tech-item">CSS</span></div>
          </div>
        </div>
      </body>
      </html>
    `

    resumeWindow.document.write(resumeHTML)
    resumeWindow.document.close()

    setTimeout(() => {
      resumeWindow.print()
      setTimeout(() => resumeWindow.close(), 1000)
    }, 500)
  } catch (error) {
    console.error("PDF generation error:", error)
    alert("Unable to generate PDF. Please try again.")
  }
}

// A more recognizable 3D Computer Setup
function Extreme3DComputer() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        perspective: "2000px",
      }}
    >
      {/* Main 3D Scene Container */}
      <motion.div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          width: "600px",
          height: "400px",
          transform: "scale(0.8)",
        }}
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute w-full h-full"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg)" }}
        >
          {/* PC Tower */}
          <div
            className="absolute w-20 h-48"
            style={{ transformStyle: "preserve-3d", transform: "translateX(50px) translateY(0px) rotateY(20deg)" }}
          >
            {/* Front */}
            <div
              className="absolute w-20 h-48 bg-slate-800"
              style={{ transform: "translateZ(25px)", borderRadius: "0.5rem" }}
            >
              <div
                className="absolute w-4 h-4 bg-cyan-400 rounded-full top-4 left-4"
                style={{ boxShadow: "0 0 10px #06b6d4" }}
              ></div>
            </div>
            {/* Left side */}
            <div
              className="absolute w-10 h-48 bg-slate-700"
              style={{ transform: "rotateY(-90deg) translateZ(10px)" }}
            />
            {/* Top */}
            <div className="absolute w-20 h-10 bg-slate-700" style={{ transform: "rotateX(90deg) translateZ(5px)" }} />
          </div>

          {/* Monitor */}
          <div
            className="absolute"
            style={{ transformStyle: "preserve-3d", transform: "translateX(200px) translateY(20px) translateZ(0px)" }}
          >
            {/* Screen */}
            <div className="w-64 h-36 bg-slate-900 rounded-md border border-slate-600 p-1">
              <div className="w-full h-full bg-black/80 rounded-sm flex items-center justify-center">
                <span className="font-mono text-cyan-400 text-sm"> &lt;Code /&gt; </span>
              </div>
            </div>
            {/* Stand */}
            <div
              className="absolute w-2 h-8 bg-slate-700 left-1/2 -translate-x-1/2"
              style={{ transform: "translateY(144px) translateZ(-5px)" }}
            ></div>
            <div
              className="absolute w-20 h-1 bg-slate-700 left-1/2 -translate-x-1/2 rounded-full"
              style={{ transform: "translateY(180px) rotateX(90deg)" }}
            ></div>
          </div>

          {/* Keyboard */}
          <div
            className="absolute w-56 h-20 bg-slate-800 rounded-md"
            style={{ transform: "translateX(205px) translateY(125px) translateZ(50px) rotateX(70deg)" }}
          ></div>

          {/* Mouse */}
          <div
            className="absolute w-8 h-12 bg-slate-800 rounded-full"
            style={{ transform: "translateX(470px) translateY(125px) translateZ(50px) rotateX(70deg)" }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Enhanced Modern Hero Background
function ModernHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced Animated Grid with Depth */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.1))",
          }}
        />
      </div>

      {/* Enhanced Floating Orbs with Better Depth */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at 30% 30%, ${
              i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"
            } 0%, ${i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#a855f7" : "#f97316"}66 70%, transparent 100%)`,
            filter: "blur(40px)",
            boxShadow: `0 0 100px ${i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"}33`,
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.2, 0.5, 0.1, 0.2],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono font-bold"
            style={{
              left: `${(i * 4) % 100}%`,
              top: "-10%",
              fontSize: `${12 + Math.random() * 8}px`,
              textShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
            }}
            animate={{
              y: ["0vh", "110vh"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          >
            {["01", "10", "11", "00", "AI", "ML", "{}", "</>", "fn", "=>", "&&", "||"][Math.floor(Math.random() * 12)]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Enhanced Glassmorphism Card Component
function GlassCard({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: any }) {
  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden
        border border-slate-700 shadow-lg
        backdrop-blur-lg
        bg-slate-800/40
        text-slate-200
        transition-all duration-500
        ${className}
      `}
      style={{
        boxShadow: `0 4px 24px 0 rgba(0, 0, 0, 0.2)`
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        boxShadow: `0 12px 32px 0 rgba(0, 0, 0, 0.25)`
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Animation components
function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)

    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } catch (error) {
      console.error("Scroll error:", error)
    }
  }

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      try {
        const sections = ["home", "about", "projects", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      } catch (error) {
        console.error("Scroll handler error:", error)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <motion.div
            className="w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-8"
            style={{
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.p
            className="text-white text-xl"
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading Portfolio...
          </motion.p>
        </div>
      </div>
    )
  }

  const skills = {
    Frontend: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "Python", "Flask"],
    Database: ["MongoDB", "SQL"],
    "AI/ML": ["PyTorch", "Machine Learning", "Computer Vision"],
    DevOps: ["Docker", "Kubernetes", "GitHub Actions"],
    Languages: ["Java", "Python", "C/C++", "JavaScript"],
  }

  const projects = [
    {
      title: "AI-Powered Multimodal Sentiment Analysis",
      description:
        "Developed an AI system to predict emotions from images and text using ResNet18-based CNN with React frontend and Flask backend.",
      tech: ["Python", "PyTorch", "React", "Flask", "Tailwind CSS"],
      icon: <Brain className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/AI-Project",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard with ChatBot",
      description:
        "A 5-day weather forecast dashboard integrated with an AI chatbot using OpenWeather API and Gemini API.",
      tech: ["JavaScript", "HTML", "CSS", "OpenWeather API", "Gemini API"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/Website-Dashboard",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Chess Game with Alpha-Beta Pruning",
      description:
        "Python-based chess game implementing Min-Max algorithm with Alpha-Beta pruning for optimal AI moves.",
      tech: ["Python", "AI Algorithms", "Game Development"],
      icon: <Brain className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/Chess-Game",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Local Skill-Sharing Platform",
      description:
        "Full-stack MERN application with admin panel, user management, role-based access, and analytics dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/Local-Skill-Sharing-Platform",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Custom CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 4000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Abdullah Ghani
            </motion.h1>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
                  style={{
                    textShadow: activeSection === item.id ? "0 0 10px rgba(6, 182, 212, 0.5)" : "none",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      style={{
                        boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
                      }}
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with Extreme 3D Computer */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Effects */}
        <ModernHeroBackground />

        {/* Extreme 3D Computer Setup */}
        <Extreme3DComputer />

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative inline-block">
                <motion.h1
                  className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 50px rgba(6, 182, 212, 0.3)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  Muhammad Abdullah Ghani
                </motion.h1>

                {/* Enhanced Glowing effect behind text */}
                <div
                  className="absolute inset-0 blur-3xl -z-10"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(88, 80, 236, 0.2))",
                  }}
                />
              </div>
            </motion.div>

            <motion.p
              className="text-xl md:text-3xl mb-12 text-white/90 font-light max-w-4xl mx-auto"
              style={{
                textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              MERN Stack Developer • AI Enthusiast • DevOps Practitioner
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  text: "Full-Stack Development",
                },
                { icon: <Brain className="w-6 h-6" />, text: "AI/ML" },
                { icon: <Server className="w-6 h-6" />, text: "DevOps" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20"
                  style={{
                    background: `bg-slate-700/50`,
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2)`,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {badge.icon}
                  <span className="text-white font-medium" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}>
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-4 rounded-full border border-white/20"
                  style={{
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2), 0 0 50px rgba(6, 182, 212, 0.3)",
                  }}
                  onClick={generateResumePDF}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 rounded-full border border-white/20"
                  style={{
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2), 0 0 50px rgba(88, 80, 236, 0.3)",
                  }}
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8" style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))" }} />
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              >
                About Me
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Aspiring MERN Stack Developer, AI Enthusiast, and DevOps Practitioner exploring and building full-stack
                web applications, intelligent systems, and managing CI/CD pipelines for efficient deployment.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <FadeInUp key={category} delay={index * 0.1}>
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl bg-slate-700/50"
                      style={{
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {category === "Frontend" && <Code className="w-6 h-6 text-cyan-400" />}
                      {category === "Backend" && <Server className="w-6 h-6 text-green-400" />}
                      {category === "Database" && <Database className="w-6 h-6 text-blue-400" />}
                      {category === "AI/ML" && <Brain className="w-6 h-6 text-purple-400" />}
                      {category === "DevOps" && <Server className="w-6 h-6 text-orange-400" />}
                      {category === "Languages" && <Code className="w-6 h-6 text-pink-400" />}
                    </div>
                    <h3
                      className="text-xl font-semibold text-white"
                      style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
                    >
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700 transition-colors"
                        style={{
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              >
                Featured Projects
              </h2>
              <p className="text-xl text-white/70">
                A showcase of my technical expertise and problem-solving abilities
              </p>
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeInUp key={project.title} delay={index * 0.2}>
                <GlassCard className="p-6 h-full group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl bg-slate-700/50`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/70 text-base leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700 transition-colors"
                        style={{
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow transition-all duration-300"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </motion.div>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Certificates */}
      <AnimatedSection className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              >
                Education & Certifications
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInUp delay={0.2}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-xl bg-slate-700/50"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
                  >
                    Education
                  </h3>
                </div>
                <div className="text-white/70">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    National University of Computer and Emerging Sciences
                  </h4>
                  <p className="mb-2 text-cyan-300">Software Engineering • Aug 2022 – present</p>
                  <p className="text-sm leading-relaxed">
                    Courses: Programming Fundamentals, Object Oriented, Data Structures, Design And Analysis, Database,
                    Requirement Engineering, Testing, Operating System
                  </p>
                </div>
              </GlassCard>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-xl bg-slate-700/50"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
                  >
                    Certifications
                  </h3>
                </div>
                <div className="text-white/70 space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">Supervised Machine Learning:</h4>
                    <p className="text-sm">Regression and Classification</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Advanced Learning Algorithms</h4>
                  </div>
                </div>
              </GlassCard>
            </FadeInUp>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeInUp>
            <h2
              className="text-5xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
            >
              Let's Connect
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Ready to collaborate on exciting projects or discuss opportunities
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  text: "abdullaghani206@gmail.com",
                  href: "mailto:abdullaghani206@gmail.com",
                },
                { icon: <Phone className="w-6 h-6" />, text: "+92 3168848001", href: "tel:+923168848001" },
                { icon: <MapPin className="w-6 h-6" />, text: "Islamabad, Pakistan", href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-lg"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    cursor: item.href ? "pointer" : "default",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => item.href && window.open(item.href)}
                >
                  {item.icon}
                  {item.text}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3 rounded-full"
                  style={{
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2), 0 0 50px rgba(59, 130, 246, 0.3)",
                  }}
                  onClick={() => window.open("https://www.linkedin.com/in/muhammad-abdullahghani206/", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-slate-700 hover:bg-slate-800 text-lg px-8 py-3 rounded-full"
                  style={{
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2), 0 0 50px rgba(75, 85, 99, 0.3)",
                  }}
                  onClick={() => window.open("https://github.com/Muhammad-AbdullahGhani?tab=repositories", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-white/50">
          <p>&copy; 2024 Muhammad Abdullah Ghani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
