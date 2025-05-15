import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FhdubDAOPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <Users size={48} className="mb-6" />
        <h1 className="text-4xl font-bold tracking-tighter mb-4">fhdubDAO</h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
          The decentralized autonomous organization that governs the FHDub platform, ensuring community ownership and
          participation in decision-making.
        </p>
        <Button asChild size="lg">
          <Link href="#">Join fhdubDAO</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is fhdubDAO?</h2>
          <p className="text-zinc-400">
            fhdubDAO is a decentralized autonomous organization that owns and governs the FHDub platform. It allows
            token holders to participate in decision-making processes, propose changes, and vote on the future direction
            of the platform.
          </p>
          <p className="text-zinc-400 mt-4">
            By distributing governance to the community, fhdubDAO ensures that the platform evolves according to the
            needs and desires of its users and builders, rather than being controlled by a centralized entity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-zinc-400">
            fhdubDAO operates through a proposal and voting system. Token holders can submit proposals for changes to
            the platform, allocation of resources, or new initiatives. These proposals are then voted on by the
            community, with voting power proportional to token holdings.
          </p>
          <p className="text-zinc-400 mt-4">
            Proposals that receive sufficient support are implemented by the DAO's multisig wallet or through smart
            contracts, ensuring transparent and accountable governance.
          </p>
        </div>
      </div>

      <div className="border border-zinc-800 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6">Governance Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <span className="font-semibold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Proposal Submission</h3>
            <p className="text-zinc-400 text-sm">Community members submit proposals for changes or initiatives.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <span className="font-semibold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Discussion Period</h3>
            <p className="text-zinc-400 text-sm">The community discusses and refines proposals before voting.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <span className="font-semibold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Voting</h3>
            <p className="text-zinc-400 text-sm">
              Token holders vote on proposals, with voting power proportional to holdings.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
              <span className="font-semibold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Implementation</h3>
            <p className="text-zinc-400 text-sm">
              Approved proposals are implemented by the DAO or through smart contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="border border-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Participation</h3>
          <p className="text-zinc-400 mb-4">
            Anyone can participate in fhdubDAO by acquiring FHDUB tokens, which grant voting rights and the ability to
            submit proposals.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Vote on proposals</li>
            <li>• Submit new proposals</li>
            <li>• Delegate voting power</li>
            <li>• Participate in discussions</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            How to participate <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Treasury</h3>
          <p className="text-zinc-400 mb-4">
            fhdubDAO manages a treasury of funds that are used to support the development and growth of the FHDub
            ecosystem.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Fund development initiatives</li>
            <li>• Support ecosystem projects</li>
            <li>• Provide grants to builders</li>
            <li>• Invest in strategic partnerships</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Treasury dashboard <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="border border-zinc-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Working Groups</h3>
          <p className="text-zinc-400 mb-4">
            fhdubDAO is organized into working groups that focus on specific aspects of the platform's development and
            governance.
          </p>
          <ul className="space-y-2 text-zinc-400 mb-6">
            <li>• Technical Development</li>
            <li>• Community Growth</li>
            <li>• Ecosystem Partnerships</li>
            <li>• Governance Improvement</li>
          </ul>
          <Link href="#" className="text-white inline-flex items-center hover:underline">
            Join a working group <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="border border-zinc-800 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6">Current Proposals</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <h3 className="font-semibold">FIP-001: Ecosystem Fund Allocation</h3>
              <p className="text-zinc-400">
                Proposal to allocate 10% of the treasury to support early-stage fitness applications
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 bg-green-900/50 text-green-400 rounded text-xs">Active</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <h3 className="font-semibold">FIP-002: Governance Parameter Updates</h3>
              <p className="text-zinc-400">Proposal to update the voting threshold and quorum requirements</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 bg-yellow-900/50 text-yellow-400 rounded text-xs">Discussion</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">View Details</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">FIP-003: Integration with Health Data Providers</h3>
              <p className="text-zinc-400">
                Proposal to integrate with major health data providers to expand the ecosystem
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 bg-blue-900/50 text-blue-400 rounded text-xs">Drafting</span>
              <Button asChild variant="outline" size="sm">
                <Link href="#">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join fhdubDAO</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Become a part of the community that's shaping the future of fitness, health, and wellness. Join fhdubDAO today
          and have your say in the development of the FHDub platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#">Join Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
