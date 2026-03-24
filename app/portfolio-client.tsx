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

// Resume download utility
const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/MuhammadAbdulllahGhani-Resume.pdf"
  link.download = "Muhammad_Abdullah_Ghani_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// PDF generation utility (fallback)
const generateResumePDF = () => {
  downloadResume()
}

// Original PDF generation utility
const generateResumePDFOriginal = () => {
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
          ul { margin: 8px 0 0 18px; padding: 0; }
          li { margin: 4px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">MUHAMMAD ABDULLAH GHANI</div>
          <div class="title">Software Engineer — Generative AI & MLOps</div>
          <div class="contact">abdullaghani206@gmail.com | +92 316 884 8001 | linkedin.com/in/abdullahghani | github.com/Muhammad-AbdullahGhani</div>
        </div>
        <div class="section">
          <div class="section-title">PROFESSIONAL SUMMARY</div>
          <p>
            Results-driven Software Engineer specializing in Generative AI, LLM fine-tuning, RAG, and MLOps. Built scalable microservices and production ML pipelines with Docker, Kubernetes, and GitHub Actions.
          </p>
        </div>
        <div class="section">
          <div class="section-title">TECHNICAL SKILLS</div>
          <p><b>Languages:</b> Python, C++, JavaScript (Node.js), SQL</p>
          <p><b>AI/ML & GenAI:</b> PyTorch, Transformers (BERT/DeBERTA/Llama), RAG, LLMs, LSTM, ResNet, Scikit-learn</p>
          <p><b>DevOps & Cloud:</b> Docker, Kubernetes, GitHub Actions, FastAPI, Nginx, Microservices</p>
          <p><b>Web & Data:</b> React.js, Tailwind CSS, Flask, MongoDB, PostgreSQL</p>
        </div>
        <div class="section">
          <div class="section-title">PROJECTS</div>
          <div class="project">
            <h3>Autonomous Self-Healing Infrastructure (Agentic AI & DevOps)</h3>
            <p>Architected an end-to-end Agentic AI system using LangGraph to autonomously monitor, diagnose, and repair microservice infrastructure failures in real-time.</p>
            <ul>
              <li>Integrated Prometheus and Loki to build a unified "nervous system" for anomaly and failure detection across cloud environments.</li>
              <li>Developed FastAPI microservice testbed containerized with Docker and orchestrated via Kubernetes on Azure AKS for automated recovery workflows.</li>
              <li>Implemented PostgreSQL-backed audit trails for AI reasoning and corrective actions to support privacy compliance and human-in-the-loop oversight.</li>
            </ul>
            <div><span class="tech-item">Python</span><span class="tech-item">LangGraph</span><span class="tech-item">Kubernetes</span><span class="tech-item">Docker</span><span class="tech-item">PostgreSQL</span><span class="tech-item">Azure</span></div>
          </div>
          <div class="project">
            <h3>FinTech Adaptive Forecasting System</h3>
            <p>Microservices platform that continuously retrains LSTM & Transformer models on real-time market data.</p>
            <ul>
              <li>Built MLOps pipeline with drift detection (MAE/RMSE) and interactive candlestick visualizations.</li>
              <li>Deployed via Docker + Kubernetes with GitHub Actions CI/CD for zero-downtime reliability.</li>
            </ul>
            <div><span class="tech-item">Python</span><span class="tech-item">MLOps</span><span class="tech-item">Docker</span><span class="tech-item">Kubernetes</span><span class="tech-item">CI/CD</span></div>
          </div>
          <div class="project">
            <h3>ILM-ORA — AI-Powered Career & University Recommendation (FYP)</h3>
            <p>FastAPI microservices delivering university rankings and career guidance from HEC & alumni data.</p>
            <ul>
              <li>Fine-tuned BERT for Aspect-Based Sentiment Analysis, improving accuracy by 12% over baseline.</li>
              <li>Built regression model predicting salary ranges and visualizing career trajectories.</li>
            </ul>
            <div><span class="tech-item">FastAPI</span><span class="tech-item">BERT</span><span class="tech-item">NLP</span><span class="tech-item">Scikit-learn</span><span class="tech-item">MERN</span></div>
          </div>
          <div class="project">
            <h3>QuickChat AI — GenAI Customer Support Chatbot (SaaS)</h3>
            <p>RAG system generating business-specific answers from uploaded knowledge bases, built for scalable deployment.</p>
            <ul>
              <li>Fine-tuned domain LLM for tone consistency and reliability.</li>
              <li>Built pipelines for dynamic retrieval and production-grade serving.</li>
            </ul>
            <div><span class="tech-item">RAG</span><span class="tech-item">LLMs</span><span class="tech-item">FastAPI</span><span class="tech-item">Python</span></div>
          </div>
          <div class="project">
            <h3>AI-Powered Multimodal Sentiment Analysis</h3>
            <p>Multimodal model classifying 7 emotions from images + text using ResNet18, with a responsive web UI.</p>
            <div><span class="tech-item">PyTorch</span><span class="tech-item">ResNet18</span><span class="tech-item">React</span><span class="tech-item">Flask</span><span class="tech-item">Tailwind</span></div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">EDUCATION</div>
          <p><b>National University of Computer and Emerging Sciences</b> — B.S. Software Engineering (Aug 2022 – Present)</p>
        </div>
        <div class="section">
          <div class="section-title">CERTIFICATIONS</div>
          <ul>
            <li>Supervised Machine Learning: Regression and Classification (Coursera)</li>
            <li>Advanced Learning Algorithms (Coursera)</li>
          </ul>
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

function Agentic3DNeuralCore() {
  const nodes = [
    { x: "18%", y: "22%" },
    { x: "78%", y: "20%" },
    { x: "82%", y: "70%" },
    { x: "24%", y: "76%" },
    { x: "52%", y: "50%" },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[380px] h-[380px] md:w-[500px] md:h-[500px]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-blue-400/20"
              style={{
                transform: `translateZ(${ring * 20}px) scale(${1 - ring * 0.12})`,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.15)",
              }}
              animate={{ rotateX: [0, 360], rotateY: [360, 0] }}
              transition={{
                duration: 16 + ring * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {nodes.map((node, i) => (
            <motion.div
              key={`${node.x}-${node.y}`}
              className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-300"
              style={{
                left: node.x,
                top: node.y,
                boxShadow: "0 0 16px rgba(34, 211, 238, 0.8)",
              }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2 + i * 0.3, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}

          {nodes.slice(0, -1).map((_, i) => (
            <motion.div
              key={`edge-${i}`}
              className="absolute h-px bg-gradient-to-r from-blue-400/20 via-cyan-300/70 to-blue-400/20 origin-left"
              style={{
                left: "52%",
                top: "50%",
                width: i % 2 === 0 ? "170px" : "150px",
                transform:
                  i === 0
                    ? "rotate(-145deg)"
                    : i === 1
                      ? "rotate(-35deg)"
                      : i === 2
                        ? "rotate(30deg)"
                        : "rotate(140deg)",
              }}
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 2.2 + i * 0.2, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20"
        animate={{ scale: [0.85, 1.08, 0.85], opacity: [0.2, 0.65, 0.2] }}
        transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}

// Refined Modern Hero Background
function ModernHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Subtle Floating Accents */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${200 + i * 60}px`,
            height: `${200 + i * 60}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at 30% 30%, ${
              i % 2 === 0 ? "#3b82f6" : "#8b5cf6"
            } 0%, transparent 100%)`,
            filter: "blur(60px)",
            opacity: 0.08,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Glassmorphism Card with Premium Effects
function GlassCard({
  children,
  className = "",
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: any }) {
  return (
    <motion.div
      className={`
        relative rounded-xl overflow-hidden
        border border-slate-700 
        backdrop-blur-xl
        bg-gradient-to-br from-slate-800/40 to-slate-900/40
        text-slate-100
        transition-all duration-300
        shadow-2xl
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        y: -6,
        boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
      }}
      {...props}
    >
      {/* Premium shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
          animation: "shimmer 2s infinite",
        }}
      />

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

function AnimatedSection({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      id={id}
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

  // Stats for wow factor
  const stats = [
    { label: "ML Projects", value: "4+", icon: <Brain className="w-4 h-4" /> },
    { label: "Production Systems", value: "3+", icon: <Server className="w-4 h-4" /> },
    { label: "Tech Stack", value: "15+", icon: <Code className="w-4 h-4" /> },
  ]

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
    "AI/GenAI": ["RAG", "LLM Fine-Tuning", "Transformers (BERT/DeBERTA/Llama)", "PyTorch", "Scikit-learn"],
    "MLOps/DevOps": ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Microservices"],
    "Backend & APIs": ["FastAPI", "Flask", "Node.js", "Nginx"],
    "Web & Data": ["React.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "SQL"],
    Languages: ["Python", "C++", "JavaScript (Node.js)", "SQL"],
  }

  const projects = [
    {
      title: "Autonomous Self-Healing Infrastructure (Agentic AI & DevOps)",
      description:
        "Architected an end-to-end Agentic AI system with LangGraph to monitor, diagnose, and auto-repair microservice failures. Integrated Prometheus + Loki telemetry, AKS recovery workflows, and a PostgreSQL audit trail for compliant human-in-the-loop operations.",
      tech: ["Python", "LangGraph", "FastAPI", "Kubernetes", "Docker", "PostgreSQL", "Azure", "Prometheus", "Loki"],
      icon: <Server className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani",
      gradient: "from-indigo-500 to-cyan-500",
    },
    {
      title: "FinTech Adaptive Forecasting System",
      description:
        "Microservices platform that continuously retrains LSTM & Transformer models on real-time market data with drift detection (MAE/RMSE) and production-grade CI/CD.",
      tech: ["Python", "LSTM", "Transformers", "Docker", "Kubernetes", "GitHub Actions", "MLOps"],
      icon: <Brain className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/Fintech_Forecasting_System",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "ILM-ORA (FYP): Career & University Recommendation System",
      description:
        "Led data + NLP work on FastAPI microservices for rankings and career guidance; fine-tuned BERT for aspect-based sentiment, improving accuracy by 12% vs baseline.",
      tech: ["FastAPI", "BERT", "NLP", "Scikit-learn", "MERN"],
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/ILMORA-FYP",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "QuickChat AI: GenAI Customer Support Chatbot (SaaS)",
      description:
        "RAG-based support chatbot that answers from uploaded knowledge bases; includes retrieval pipelines and domain LLM fine-tuning for consistent tone and reliability.",
      tech: ["RAG", "LLMs", "FastAPI", "Python", "Vector Search"],
      icon: <Brain className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/QuickChatAI",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "AI-Powered Multimodal Sentiment Analysis System",
      description:
        "Multimodal model classifying 7 emotions from image + text using ResNet18, with a responsive React UI and Flask backend for inference.",
      tech: ["PyTorch", "ResNet18", "Flask", "React.js", "Tailwind CSS"],
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Muhammad-AbdullahGhani/QuickChatAI",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20">
      {/* Premium CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
        }
        .group:hover {
          position: relative;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 4000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              AG
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
                    activeSection === item.id ? "text-blue-400" : "text-slate-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
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
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with Premium Effects */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background Effects */}
        <ModernHeroBackground />
        <Agentic3DNeuralCore />

        {/* Premium animated gradient orbs for depth */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/25 rounded-full blur-3xl -top-32 -left-32"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ filter: "blur(80px)" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ filter: "blur(80px)" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl top-1/3 right-1/4"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
            style={{ filter: "blur(100px)" }}
          />
        </motion.div>

        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Badge */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-md"
                whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  🚀 AI & MLOps Engineer
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Muhammad Abdullah Ghani
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent font-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Generative AI • RAG & LLM Fine-Tuning • Production MLOps
            </motion.p>

            <motion.p
              className="text-sm md:text-base mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Building production-grade AI systems with Docker, Kubernetes, and enterprise DevOps. Specialized in microservices architecture and scalable ML pipelines.
            </motion.p>

            {/* Premium Stats Section */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12 py-8 px-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center group"
                  whileHover={{ scale: 1.15, y: -8 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                >
                  <motion.div
                    className="text-blue-400 mb-2 p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-all"
                    whileHover={{ rotate: 10 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-blue-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {[
                { icon: <Code className="w-5 h-5" />, text: "RAG & LLMs" },
                { icon: <Brain className="w-5 h-5" />, text: "ML Fine-Tuning" },
                { icon: <Server className="w-5 h-5" />, text: "DevOps & K8s" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl border border-blue-500/40 bg-gradient-to-r from-blue-500/15 to-purple-500/10 text-slate-200 hover:border-blue-400/60 hover:from-blue-500/25 hover:to-purple-500/15 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                >
                  <motion.div
                    className="text-slate-300 group-hover:text-blue-300 transition-colors"
                    whileHover={{ rotate: 15 }}
                  >
                    {badge.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold px-10 py-4 rounded-lg border border-blue-500/60 shadow-lg hover:shadow-blue-500/60 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
                  onClick={downloadResume}
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700/60 to-slate-800/60 hover:from-slate-700 hover:to-slate-800 text-slate-100 font-bold px-10 py-4 rounded-lg border border-slate-600/60 shadow-lg hover:shadow-slate-600/60 transition-all duration-300 backdrop-blur-sm"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects ↓
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 z-20"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-24 px-6 bg-gradient-to-b from-blue-900/20 to-slate-900/50 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  💡 Skills & Expertise
                </span>
              </motion.div>
              <h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                About Me
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Results-driven Software Engineer specializing in Generative AI, LLM fine-tuning, RAG, and MLOps. I build
                production-grade microservices and ML pipelines using Docker, Kubernetes, and GitHub Actions.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <FadeInUp key={category} delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="group">
                  <GlassCard className="p-6 h-full border border-slate-700/50 hover:border-blue-500/60 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="p-3 rounded-lg bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-500/40 group-hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {category === "Frontend" && <Code className="w-5 h-5 text-blue-400" />}
                        {category === "Backend" && <Server className="w-5 h-5 text-green-400" />}
                        {category === "Database" && <Database className="w-5 h-5 text-cyan-400" />}
                        {category === "AI/GenAI" && <Brain className="w-5 h-5 text-purple-400" />}
                        {category === "MLOps/DevOps" && <Server className="w-5 h-5 text-orange-400" />}
                        {category === "Backend & APIs" && <Server className="w-5 h-5 text-green-400" />}
                        {category === "Web & Data" && <Database className="w-5 h-5 text-cyan-400" />}
                        {category === "Languages" && <Code className="w-5 h-5 text-pink-400" />}
                      </motion.div>
                      <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.08 }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-500/40 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/60 transition-all text-xs cursor-default backdrop-blur-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-900/30 to-blue-900/20 relative overflow-hidden">
        {/* Animated gradient background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <FadeInUp>
              <motion.div
                className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  ✨ Featured Projects
                </span>
              </motion.div>
              <motion.h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Production-Grade AI Systems
              </motion.h2>
              <p className="text-lg text-slate-300">
                Real-world solutions built with cutting-edge technology
              </p>
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FadeInUp key={project.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <GlassCard className="p-6 h-full flex flex-col border border-slate-700/50 hover:border-blue-500/50">
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-xl transition-all duration-500 pointer-events-none" />

                    <div className="relative flex items-center gap-3 mb-4">
                      <motion.div
                        className="p-3 rounded-lg bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-500/40 group-hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow relative z-10">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-500/40 text-xs hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/60 transition-all cursor-default backdrop-blur-sm">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto relative z-10">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/40 border border-blue-500/50"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Certificates */}
      <AnimatedSection className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-blue-900/20">
        <div className="container mx-auto max-w-6xl">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2
                className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                Education & Certifications
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeInUp delay={0.2}>
              <motion.div whileHover={{ y: -4 }}>
                <GlassCard className="p-6 border border-slate-700 hover:border-blue-500/40 group transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Award className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Education</h3>
                  </div>
                  <div className="text-slate-300">
                    <h4 className="font-semibold text-white mb-2">
                      National University of Computer and Emerging Sciences
                    </h4>
                    <p className="mb-3 text-blue-300 text-sm">Software Engineering • Aug 2022 – present</p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      Courses: Programming Fundamentals, Object Oriented, Data Structures, Design And Analysis, Database,
                      Requirement Engineering, Testing, Operating System
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <motion.div whileHover={{ y: -4 }}>
                <GlassCard className="p-6 border border-slate-700 hover:border-purple-500/40 group transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Award className="w-5 h-5 text-purple-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">Certifications</h3>
                  </div>
                  <div className="text-slate-300 space-y-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm">Supervised Machine Learning:</h4>
                      <p className="text-sm text-slate-400">Regression and Classification</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Advanced Learning Algorithms</h4>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </FadeInUp>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <FadeInUp>
            <motion.div
              className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                📞 Get in Touch
              </span>
            </motion.div>

            <h2
              className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent"
            >
              Let's Connect
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              Ready to collaborate on exciting projects or discuss opportunities
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-12 py-10 px-8 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-500/15 to-purple-500/10 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  text: "abdullaghani206@gmail.com",
                  href: "mailto:abdullaghani206@gmail.com",
                },
                { icon: <Phone className="w-5 h-5" />, text: "+92 3168848001", href: "tel:+923168848001" },
                { icon: <MapPin className="w-5 h-5" />, text: "Islamabad, Pakistan", href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.1, x: 8 }}
                  onClick={() => item.href && window.open(item.href)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/40 group-hover:border-blue-400/60 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold px-10 py-4 rounded-lg border border-blue-500/60 shadow-xl hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                  onClick={() => window.open("https://www.linkedin.com/in/abdullahghani", "_blank")}
                >
                  <span className="relative z-10 flex items-center">
                    <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700/70 to-slate-800/70 hover:from-slate-700 hover:to-slate-800 text-white font-bold px-10 py-4 rounded-lg border border-slate-600/60 shadow-xl hover:shadow-slate-600/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                  onClick={() => window.open("https://github.com/Muhammad-AbdullahGhani?tab=repositories", "_blank")}
                >
                  <span className="relative z-10 flex items-center">
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
                </Button>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="container mx-auto text-center">
          <motion.p
            className="text-slate-400 hover:text-slate-300 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Muhammad Abdullah Ghani. Crafted with passion and precision.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
