"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Github, Linkedin, Mail, Sparkles, Wrench, BrainCircuit, Layers3 } from "lucide-react"

const projects = [
  {
    title: "Voice-Activated SRE (Agentic Infrastructure Supervisor)",
    description:
      "A real-time, voice-driven AI co-pilot designed to monitor, scale, and recycle Kubernetes pods using natural speech. Integrates LangGraph, LiveKit WebRTC, WebSockets, and a Next.js terminal dashboard.",
    tech: ["FastAPI", "LangGraph", "Kubernetes", "LiveKit WebRTC", "Next.js", "WebSockets", "VAD", "Whisper STT"],
    link: "https://github.com/Muhammad-AbdullahGhani/Voice_SRE",
  },
  {
    title: "Autonomous Self-Healing Infrastructure",
    description:
      "Agentic AI platform for real-time detection, diagnosis, and autonomous repair of microservice failures with Prometheus, Loki, and AKS workflows. 80% reduction in manual intervention.",
    tech: ["Python", "LangGraph", "Kubernetes", "Docker", "PostgreSQL", "Azure AKS", "Prometheus", "Loki"],
    link: "https://github.com/Muhammad-AbdullahGhani",
  },
  {
    title: "FinTech Adaptive Forecasting System",
    description: "Continuously retrained LSTM/Transformer forecasting pipelines with drift detection and zero-downtime Kubernetes deployments.",
    tech: ["Python", "LSTM", "Transformers", "MLOps", "Docker", "Kubernetes", "GitHub Actions CI/CD"],
    link: "https://github.com/Muhammad-AbdullahGhani/Fintech_Forecasting_System",
  },
  {
    title: "ILM-ORA: AI Career & University Recommendation System (FYP)",
    description:
      "Fine-tuned BERT for Aspect-Based Sentiment Analysis (12% accuracy gain) with scalable FastAPI microservices integrating HEC/alumni data for personalized guidance.",
    tech: ["FastAPI", "BERT", "MERN Stack", "Scikit-learn", "Embeddings", "HEC Datasets"],
    link: "https://github.com/Muhammad-AbdullahGhani/ILMORA-FYP",
  },
  {
    title: "Nuvoltero — AI Content Repurposing Pipeline",
    description:
      "Automated content repurposing pipeline extracting and transcribing audio from YouTube using OpenAI Whisper (100% processing). RAG pipeline with Gemini API generates platform-optimized promotional content, reducing creation time by ~70%.",
    tech: ["Python", "Gemini API", "RAG", "OpenAI Whisper", "FastAPI", "Chroma Vector DB"],
    link: "https://github.com/Muhammad-AbdullahGhani",
  },
  {
    title: "QuickChat AI",
    description:
      "RAG-powered customer support assistant with domain-aware retrieval and LLM response generation for business-specific answers.",
    tech: ["RAG", "LLMs", "FastAPI", "Python"],
    link: "https://github.com/Muhammad-AbdullahGhani/QuickChatAI",
  },
]

const experiences = [
  {
    title: "Backend AI Engineering Intern",
    company: "FlyRank AI (Remote)",
    period: "Jul 2026 – Present",
    description: "Building RAG pipelines, autonomous AI agents, and production API services using Python and LLMs; completing AI Fluency capstone toward verifiable credential.",
    highlights: ["RAG Pipelines", "Autonomous AI Agents", "Production APIs", "Python", "LLMs"],
  },
  {
    title: "Freelance NLP / ML Engineer",
    company: "Upwork — Alpha Data Science (Malaysia)",
    period: "Apr 2026",
    description: "Delivered 7 production-quality sentiment analysis notebooks covering full ML pipeline: EDA, preprocessing, LSTM-to-transformer progression, and evaluation (F1/accuracy). Rated 4.9/5.",
    highlights: ["Sentiment Analysis", "ML Pipeline", "LSTM", "Transformers", "F1/Accuracy Evaluation"],
  },
]

const skills = {
  "AI & LLMs": ["LangChain", "LangGraph", "RAG", "Gemini API", "Prompt Engineering", "LLM Fine-Tuning", "BERT", "DeBERTa", "Llama", "LSTM", "Embeddings", "Chroma", "FAISS"],
  "ML Frameworks": ["PyTorch", "Hugging Face Transformers", "Scikit-learn"],
  "MLOps & Infrastructure": ["Docker", "Kubernetes", "Azure AKS", "LiveKit WebRTC", "Prometheus", "Loki", "GitHub Actions CI/CD", "FastAPI", "Nginx"],
  "Languages": ["Python", "JavaScript (Node.js)", "C++", "SQL"],
  "Web & Databases": ["React.js", "Next.js", "Flask", "Tailwind CSS", "WebSockets", "PostgreSQL", "MongoDB"],
}

const education = {
  degree: "B.S. Software Engineering",
  institution: "National University of Computer & Emerging Sciences (FAST-NUCES), Islamabad",
  fyp: "ILM-ORA — AI-powered career & university recommendation system using BERT, RAG, and sentiment analysis.",
}

const certifications = [
  { title: "Advanced Learning Algorithms", issuer: "Stanford / Coursera", date: "Jul 2024", id: "J5BC2BZS3BXQ" },
  { title: "Supervised Machine Learning: Regression & Classification", issuer: "DeepLearning.AI / Coursera", date: "Jul 2024", id: "MPY9SJKG8YRY" },
  { title: "Introduction to Artificial Intelligence", issuer: "LinkedIn Learning", date: "2022 – Present" },
]

const featureCards = [
  {
    title: "Production AI Systems",
    body: "Build and ship robust AI products from prototype to cloud production with observability and fail-safe orchestration.",
    icon: BrainCircuit,
  },
  {
    title: "Autonomous Workflows",
    body: "Design multi-agent architectures that execute, monitor, and optimize business workflows with minimal human intervention.",
    icon: Sparkles,
  },
  {
    title: "Scalable Full Stack",
    body: "Deliver end-to-end web products with modern UX, high-performance APIs, and reliable infrastructure foundations.",
    icon: Layers3,
  },
]

const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/MuhammadAbdulllahGhani-Resume.pdf"
  link.download = "Muhammad_Abdullah_Ghani_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function HybridPCShowcase() {
  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[520px] items-center justify-center">
      <motion.div
        className="absolute left-3 top-10 rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-100 backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        Agent Health: Stable
      </motion.div>

      <motion.div
        className="absolute right-2 top-16 rounded-xl border border-orange-300/30 bg-orange-400/10 px-3 py-2 text-xs text-orange-100 backdrop-blur-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
      >
        MTTR improved: 42%
      </motion.div>

      <motion.div
        className="absolute bottom-14 left-0 rounded-xl border border-violet-300/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-100 backdrop-blur-xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.1, repeat: Number.POSITIVE_INFINITY }}
      >
        RAG Pipeline: Active
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-2 rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100 backdrop-blur-xl"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY }}
      >
        Deploys: Zero Downtime
      </motion.div>

      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="h-48 w-80 rounded-2xl border border-white/20 bg-black/70 p-2 shadow-2xl">
          <div className="h-full w-full rounded-xl border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-3">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-2 font-mono text-[11px] text-cyan-100/90">
              <p>{"> monitor.agents()"}</p>
              <p>{"> anomaly: crash_loop @ api-gateway"}</p>
              <p>{"> fix: restart + config patch + healthcheck"}</p>
              <p className="text-emerald-300">{"> status: recovered in 38s"}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto h-8 w-3 rounded-b-md bg-slate-700/90" />
        <div className="mx-auto h-2 w-28 rounded-full bg-slate-600/90" />
        <div className="mx-auto mt-2 h-10 w-56 rounded-lg border border-white/10 bg-slate-800/70" />
      </motion.div>
    </div>
  )
}

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto bg-[#0a0a12] px-4 py-6 text-white md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-4 shadow-[0_0_120px_rgba(251,191,36,0.18)] backdrop-blur-2xl md:p-8">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
          <div className="absolute -left-14 top-24 h-52 w-52 rounded-full bg-amber-400/25 blur-3xl" />
          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-orange-400/25 blur-3xl" />
          <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
        </div>

        <header className="sticky top-0 z-40 mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a0a12]/70 px-3 py-3 backdrop-blur-xl">
          <div className="text-base font-semibold tracking-wide text-white/90">Abdullah Ghani</div>
          <nav className="hidden gap-6 text-xs text-white/75 md:flex">
            {[
              { label: "About", id: "home" },
              { label: "Experience", id: "experience" },
              { label: "Projects", id: "projects" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-white">
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-white/80 hover:bg-white/10"
              onClick={() => window.open("https://github.com/Muhammad-AbdullahGhani", "_blank")}
            >
              View GitHub
            </Button>
            <Button className="bg-amber-300 text-black hover:bg-amber-200" onClick={downloadResume}>
              Download Resume
            </Button>
          </div>
        </header>

        <section
          id="home"
          className="snap-start scroll-mt-28 relative flex min-h-[92svh] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d19]/80 px-4 py-10 md:px-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-1 text-xs text-white/80">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-orange-300" />
              Open to Software Engineering and GenAI opportunities
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Unlock <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Peak</span> Productivity
              <br />
              Collaborate With AI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 md:text-base">
              Automate workflows, enhance decision-making, and scale reliable AI systems with production-ready engineering.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button className="bg-amber-300 text-black hover:bg-amber-200" onClick={downloadResume}>
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-white/20 bg-white/[0.03] hover:bg-white/[0.08]"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="relative mt-10 flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.08),transparent)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-72 w-64 overflow-hidden rounded-[2rem] border border-white/20 bg-black"
            >
              <Image src="/abdullah-profile.png" alt="Muhammad Abdullah Ghani" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-[8%] top-6 rounded-xl border border-violet-300/30 bg-violet-500/20 px-4 py-3 backdrop-blur-xl"
            >
              <div className="text-3xl font-bold">12+</div>
              <div className="text-xs text-white/80">Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-[8%] top-24 rounded-xl border border-white/20 bg-white px-4 py-3 text-black"
            >
              <div className="text-3xl font-bold">4</div>
              <div className="text-xs text-black/70">Flagship AI systems</div>
            </motion.div>

            <div className="absolute bottom-2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs text-white/85 backdrop-blur-xl">
              Software Engineer · GenAI & Full Stack · Open to Work
            </div>
          </div>
        </section>

        <section className="mt-12 snap-start scroll-mt-28 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            AI Engineer specializing in Generative AI, LLM fine-tuning, RAG pipelines, prompt engineering, and MLOps. Delivered measurable impact across FinTech, SaaS, and autonomous infrastructure — 12% accuracy gains, 80% reduction in manual intervention, and zero-downtime Kubernetes deployments. Proficient in LangChain/LangGraph, vector databases, embeddings, and cloud-native AI deployment on Azure AKS.
          </p>
        </section>

        <section id="experience" className="mt-8 snap-start scroll-mt-28 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-orange-300/50 pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-orange-300">{exp.company}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/75">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <Badge key={highlight} className="border-amber-300/30 bg-amber-400/10 text-amber-100 text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-8 snap-start scroll-mt-28 rounded-2xl border border-white/10 bg-black/30 p-5 pt-12">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <p className="mt-2 text-sm text-white/65">
            Production expertise across AI, ML frameworks, MLOps, and full-stack engineering
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-orange-300">{category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 text-xs text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 snap-start scroll-mt-28 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-orange-300 mt-1">{education.institution}</p>
            <div className="mt-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">Final Year Project (FYP):</span> {education.fyp}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 snap-start scroll-mt-28 rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{cert.title}</h3>
                <p className="text-xs text-orange-300 mt-1">{cert.issuer}</p>
                <p className="text-xs text-white/60 mt-2">{cert.date}</p>
                {cert.id && <p className="text-xs text-white/50 mt-1">ID: {cert.id}</p>}
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mt-12 snap-start scroll-mt-28 flex min-h-[92svh] flex-col justify-center border-t border-white/10 pt-8"
        >
          <h2 className="text-3xl font-semibold">Selected Projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="border-violet-300/30 bg-violet-400/10 text-violet-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button onClick={() => window.open(project.link, "_blank")} className="mt-5 w-full bg-white/10 hover:bg-white/15">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 snap-start scroll-mt-28 flex min-h-[92svh] flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-transparent p-6"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Let&apos;s Build Something Great</h3>
              <p className="mt-2 text-white/70">Open to Full Stack, GenAI, and MLOps roles.</p>
              <Button onClick={downloadResume} className="mt-5 bg-amber-300 text-black hover:bg-amber-200">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="mailto:abdullaghani206@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                  <Mail className="h-4 w-4" />
                  abdullaghani206@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/abdullahghani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/Muhammad-AbdullahGhani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://github.com/Muhammad-AbdullahGhani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
                  <Wrench className="h-4 w-4" />
                  Available for AI Engineering Roles
                </a>
              </div>
            </div>
            <HybridPCShowcase />
          </div>
        </section>
      </div>
    </div>
  )
}
