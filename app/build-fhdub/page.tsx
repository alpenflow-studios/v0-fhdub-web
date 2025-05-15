import { ArrowRight, Code, Github, Users, Star, BookOpen, Cpu, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BuildFhdubPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">Build fhdub</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Join us as a founding developer and help shape the core of the fhdub ecosystem.
      </p>

      {/* Call for Founding Developers */}
      <section className="mb-16 border border-zinc-800 p-8 rounded-lg">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="h-6 w-6 text-white" />
          <h2 className="text-2xl font-semibold">Become a Founding Developer</h2>
        </div>
        <p className="text-zinc-400 mb-8 text-center max-w-3xl mx-auto">
          We're seeking passionate developers to contribute to the core codebase of fhdub. As a founding developer,
          you'll help build the foundation of a platform that will revolutionize the fitness, health, and wellness
          industry.
        </p>

        <div className="flex justify-center mb-8">
          <Button asChild className="bg-white hover:bg-zinc-100 text-black">
            <Link
              href="https://github.com/fhdub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View Our GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Developer Segments */}
      <h2 className="text-2xl font-semibold mb-8 text-center">Join Our Team, Regardless of Your Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* New to Development */}
        <div className="border border-zinc-800 p-8 rounded-lg">
          <BookOpen size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">New to Development</h2>
          <p className="text-zinc-400 mb-4">
            Everyone starts somewhere. Your fresh perspective and eagerness to learn are valuable assets to our
            community.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Contribute to documentation and testing</li>
            <li>• Participate in user research and feedback</li>
            <li>• Learn through our mentorship program</li>
            <li>• Help with community building and outreach</li>
          </ul>
          <p className="text-zinc-400 mb-6">
            We provide resources and mentorship to help you grow your skills while making meaningful contributions.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Start your journey <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {/* Growing Developer */}
        <div className="border border-zinc-800 p-8 rounded-lg">
          <Code size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Growing Developer</h2>
          <p className="text-zinc-400 mb-4">
            Your developing skills and understanding of code fundamentals make you perfect for tackling important
            challenges.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Work on feature implementations</li>
            <li>• Contribute to frontend components</li>
            <li>• Help with integration testing</li>
            <li>• Collaborate on API development</li>
          </ul>
          <p className="text-zinc-400 mb-6">
            You'll work alongside experienced developers who can help elevate your skills to the next level.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Grow with us <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {/* Experienced Developer */}
        <div className="border border-zinc-800 p-8 rounded-lg">
          <Cpu size={32} className="mb-4" />
          <h2 className="text-xl font-semibold mb-4">Experienced Developer</h2>
          <p className="text-zinc-400 mb-4">
            Your expertise is invaluable. Help architect and build the core systems that will power the future of fhdub.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Lead core protocol development</li>
            <li>• Design system architecture</li>
            <li>• Implement smart contracts and tokenomics</li>
            <li>• Mentor other developers in the community</li>
          </ul>
          <p className="text-zinc-400 mb-6">
            We value your experience and offer the opportunity to shape a revolutionary platform from the ground up.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Lead the way <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Core Technologies */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Core Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Blockchain & Smart Contracts</h3>
            <p className="text-zinc-400 mb-4">
              Help build the Layer 3 solution on Base.org's Layer 2, implementing smart contracts for the multi-token
              economy and governance systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Solidity</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Ethereum</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Base</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Layer 2/3</span>
            </div>
          </div>

          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Backend & Infrastructure</h3>
            <p className="text-zinc-400 mb-4">
              Develop the backend services, APIs, and infrastructure that will power the fhdub ecosystem and enable
              seamless integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Node.js</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Next.js</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Vercel</span>
            </div>
          </div>

          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI & Data</h3>
            <p className="text-zinc-400 mb-4">
              Work on integrating AI capabilities using Vercel AI SDK and Coinbase's Agent-Kit to create intelligent
              features for the platform.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Vercel AI SDK</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Agent-Kit</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Data Processing</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Machine Learning</span>
            </div>
          </div>

          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Frontend & UX</h3>
            <p className="text-zinc-400 mb-4">
              Create intuitive and accessible user interfaces that make the power of fhdub available to everyone in the
              fitness, health, and wellness community.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Tailwind CSS</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">UI/UX</span>
              <span className="px-2 py-1 bg-zinc-800 rounded text-xs">Accessibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-16 border border-zinc-800 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Github className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Open Source</h3>
            <p className="text-zinc-400 text-sm">
              We believe in transparency and collaboration. Our core codebase is open source, allowing anyone to
              contribute.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Community-Driven</h3>
            <p className="text-zinc-400 text-sm">
              Decisions are made through the fhdubDAO governance process, ensuring all voices are heard and valued.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Agile & Iterative</h3>
            <p className="text-zinc-400 text-sm">
              We work in small, focused teams with regular releases and continuous feedback to ensure we're building
              what matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Build the Future?</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Join us in creating a decentralized platform that will transform the fitness, health, and wellness industry.
          Your contribution matters, regardless of your experience level.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white hover:bg-zinc-100 text-black">
            <Link href="#">Apply to Join</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/build">Build on fhdub Instead</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
