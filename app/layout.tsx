import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Abdullah Ghani | Software Engineer (GenAI & MLOps)',
  description:
    'Software Engineer specializing in Generative AI, RAG, LLM fine-tuning, and MLOps. Building production-grade AI systems with FastAPI, Docker, Kubernetes, and CI/CD.',
  keywords: [
    'Muhammad Abdullah Ghani',
    'Abdullah Ghani',
    'Software Engineer',
    'Generative AI',
    'GenAI',
    'RAG',
    'LLM fine-tuning',
    'MLOps',
    'FastAPI',
    'Docker',
    'Kubernetes',
    'GitHub Actions',
    'Microservices',
    'PyTorch',
    'Transformers',
  ],
  authors: [{ name: 'Muhammad Abdullah Ghani' }],
  creator: 'Muhammad Abdullah Ghani',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
