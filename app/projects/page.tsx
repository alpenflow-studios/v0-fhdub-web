import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Projects</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Explore the innovative projects being built on the fhdub platform, ranging from fitness tracking apps to
        wellness marketplaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-zinc-800 p-6 rounded-lg">
          <div className="h-48 bg-zinc-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-zinc-500">SmashClass</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">SmashClass</h2>
          <p className="text-zinc-400 mb-4">
            An alternative to ClassPass that rewards you with SMASH tokens for attending classes and maintaining your
            fitness routine.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-6 rounded-lg">
          <div className="h-48 bg-zinc-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-zinc-500">Oodio</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Oodio</h2>
          <p className="text-zinc-400 mb-4">
            A booking platform CRM for users and students with seamless payments in USDC, coins, and tokens. Completely
            free on both the front and back end.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-6 rounded-lg">
          <div className="h-48 bg-zinc-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-zinc-500">TruthCoach</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">TruthCoach</h2>
          <p className="text-zinc-400 mb-4">
            A decentralized marketplace for wellness products and services, with transparent pricing and reviews.
          </p>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="border border-zinc-800 p-8 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="h-64 bg-zinc-800 rounded-md flex items-center justify-center">
                <span className="text-zinc-500">Featured Project Image</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">HealthDAO</h3>
              <p className="text-zinc-400 mb-4">
                A decentralized autonomous organization focused on funding and supporting innovative health and wellness
                projects on the fhdub platform.
              </p>
              <ul className="space-y-2 text-zinc-400 mb-6">
                <li>• Community-driven funding decisions</li>
                <li>• Transparent allocation of resources</li>
                <li>• Support for early-stage health tech startups</li>
                <li>• Integration with the broader fhdub ecosystem</li>
              </ul>
              <Button asChild>
                <Link href="#">Explore HealthDAO</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have a Project Idea?</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          If you have an idea for a fitness, health, or wellness application that could benefit from the fhdub platform,
          we'd love to hear from you.
        </p>
        <Button asChild size="lg">
          <Link href="/build">Start Building</Link>
        </Button>
      </div>
    </div>
  )
}
