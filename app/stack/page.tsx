import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StackPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Technology Stack</h1>
      <p className="text-xl text-zinc-400 mb-12">
        FHDub is built on cutting-edge technology to provide a secure, scalable, and user-friendly platform for fitness,
        health, and wellness applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Base.org Layer 3</h2>
          <p className="text-zinc-400 mb-4">
            FHDub is built on base.org's layer 2 solution, providing scalability, security, and low transaction costs
            for fitness, health, and wellness applications.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• High throughput and low latency</li>
            <li>• Reduced gas fees</li>
            <li>• Ethereum security guarantees</li>
            <li>• Seamless integration with Ethereum mainnet</li>
          </ul>
          <Link
            href="https://base.org"
            className="text-white inline-flex items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Base <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Coinbase X402 Framework</h2>
          <p className="text-zinc-400 mb-4">
            FHDub leverages Coinbase's new X402 framework for secure and efficient payment processing, enabling seamless
            transactions within the ecosystem.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Secure payment infrastructure</li>
            <li>• Support for multiple currencies</li>
            <li>• Low transaction fees</li>
            <li>• Compliance with regulatory requirements</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Explore X402 integration <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Vercel AI SDK</h2>
          <p className="text-zinc-400 mb-4">
            FHDub incorporates Vercel's AI SDK to provide intelligent features and personalized experiences for fitness,
            health, and wellness applications.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• AI-powered workout recommendations</li>
            <li>• Personalized nutrition plans</li>
            <li>• Health data analysis</li>
            <li>• Natural language processing for user interactions</li>
          </ul>
          <Link
            href="https://sdk.vercel.ai"
            className="text-white inline-flex items-center hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover Vercel AI SDK <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Coinbase Agent-Kit</h2>
          <p className="text-zinc-400 mb-4">
            FHDub utilizes Coinbase's agent-kit to create intelligent agents that can help users navigate the fitness,
            health, and wellness ecosystem.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Automated fitness coaching</li>
            <li>• Health monitoring agents</li>
            <li>• Wellness recommendation systems</li>
            <li>• Personalized goal tracking</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Learn about agent-kit <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="mt-12 p-8 bg-zinc-900 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
        <p className="text-zinc-400 mb-6">
          FHDub's architecture is designed to be modular, scalable, and interoperable, allowing for seamless integration
          of various fitness, health, and wellness applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-zinc-800 rounded-lg">
            <h3 className="font-semibold mb-2">Core Protocol</h3>
            <p className="text-zinc-400 text-sm">Base layer infrastructure</p>
          </div>
          <div className="p-4 border border-zinc-800 rounded-lg">
            <h3 className="font-semibold mb-2">Application Layer</h3>
            <p className="text-zinc-400 text-sm">Fitness, health, and wellness apps</p>
          </div>
          <div className="p-4 border border-zinc-800 rounded-lg">
            <h3 className="font-semibold mb-2">Integration Layer</h3>
            <p className="text-zinc-400 text-sm">APIs and SDKs for developers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
