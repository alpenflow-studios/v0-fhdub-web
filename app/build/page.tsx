import { ArrowRight, Code, Coins, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AiBuildSection from "@/components/ai-build-section"

export default function BuildPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8 text-center">Build on fhdub</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Join the community of builders creating the future of fitness, health, and wellness on the fhdub platform.
      </p>

      {/* AI Build Section */}
      <section className="mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-white" />
          <h2 className="text-2xl font-semibold">Build with AI</h2>
        </div>
        <p className="text-zinc-400 mb-8">
          Use our AI-powered tools to create your own fitness apps, tokens, and digital assets without coding
          experience.
        </p>

        <AiBuildSection />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="border border-zinc-800 p-8 rounded-lg">
          <Code size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Developer Resources</h2>
          <p className="text-zinc-400 mb-4">
            Access documentation, SDKs, and APIs to start building on the fhdub platform.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Comprehensive API documentation</li>
            <li>• SDK for multiple programming languages</li>
            <li>• Sample applications and code snippets</li>
            <li>• Developer community support</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            View documentation <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-8 rounded-lg">
          <Coins size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Grants Program</h2>
          <p className="text-zinc-400 mb-4">Apply for funding to support your project on the fhdub platform.</p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Seed funding for early-stage projects</li>
            <li>• Development grants for existing applications</li>
            <li>• Research grants for innovative solutions</li>
            <li>• Community grants for educational initiatives</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Apply for a grant <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-8 rounded-lg">
          <Users size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Community</h2>
          <p className="text-zinc-400 mb-4">Connect with other builders and users in the fhdub ecosystem.</p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Discord community for real-time discussions</li>
            <li>• Forum for technical questions and support</li>
            <li>• Regular community calls and events</li>
            <li>• Hackathons and challenges</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Join the community <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="border border-zinc-800 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Set Up Your Development Environment</h3>
            <p className="text-zinc-400 mb-4">
              Install the necessary tools and dependencies to start building on fhdub.
            </p>
            <pre className="bg-zinc-900 p-4 rounded-md overflow-x-auto text-sm mb-4">
              <code>npm install @fhdub/sdk @fhdub/cli</code>
            </pre>
            <Link href="#" className="text-white inline-flex items-center hover:underline">
              View setup guide <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">2. Create Your First Application</h3>
            <p className="text-zinc-400 mb-4">
              Follow our step-by-step guide to create your first application on fhdub.
            </p>
            <pre className="bg-zinc-900 p-4 rounded-md overflow-x-auto text-sm mb-4">
              <code>npx @fhdub/cli create-app my-fitness-app</code>
            </pre>
            <Link href="#" className="text-white inline-flex items-center hover:underline">
              View tutorial <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Ready to Build?</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Start building the future of fitness, health, and wellness on the fhdub platform today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">Join Discord</Link>
          </Button>
        </div>
      </div>

      <div className="border border-zinc-800 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <h3 className="font-semibold">fhdub Hackathon</h3>
              <p className="text-zinc-400">Build innovative fitness and health applications in a weekend</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400">June 15-17, 2025</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">Register</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <h3 className="font-semibold">Developer Workshop</h3>
              <p className="text-zinc-400">Learn how to integrate AI into your fitness applications</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400">July 5, 2025</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">Register</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">fhdub Summit</h3>
              <p className="text-zinc-400">Annual conference for the fhdub ecosystem</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400">September 10-12, 2025</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
