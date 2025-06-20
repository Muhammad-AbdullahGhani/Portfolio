"use client"
import dynamic from "next/dynamic"

// Dynamically load the full portfolio UI only in the browser
const PortfolioClient = dynamic(() => import("./portfolio-client"), { ssr: false })

export default function PortfolioLoader() {
  return <PortfolioClient />
}
