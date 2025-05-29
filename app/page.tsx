import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">fhdub</h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
            fitness, health and wellness reimagined.
            <br />
            you use it, you build it, you own it.
            <br />
            the proof is in your participation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/build">Start Building</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/whitepaper">Read Whitepaper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
            Built for the Future of Fitness Health + Wellness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Layer 3 Solution</h3>
              <p className="text-zinc-400">
                Built on base.org's layer 2, providing scalability and low transaction costs for fitness, health, and
                wellness applications.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Multi-App Ecosystem</h3>
              <p className="text-zinc-400">
                Support for multiple apps, coins, and tokens specifically designed for the fitness, health, and wellness
                industry.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Owned</h3>
              <p className="text-zinc-400">
                Governed by fhdubDAO, ensuring that the platform evolves according to the needs of its users and
                builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Powered by Advanced Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Coinbase X402 Framework</h3>
              <p className="text-zinc-400 mb-4">
                Leveraging Coinbase's new X402 framework for secure and efficient payment processing.
              </p>
              <Link href="/stack" className="text-white inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="border border-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vercel AI SDK & Coinbase Agent-Kit</h3>
              <p className="text-zinc-400 mb-4">
                Incorporating cutting-edge AI capabilities with Vercel's AI SDK and Coinbase's agent-kit for intelligent
                fitness and health solutions.
              </p>
              <Link href="/stack" className="text-white inline-flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Join the Revolution</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Be part of the future of fitness, health, and wellness. Build with us, use our apps, and own a piece of the
            ecosystem.
          </p>
          <Button asChild size="lg" className="font-medium">
            <Link href="/fhdubdao">Join fhdubDAO</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
