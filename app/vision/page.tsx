export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Our Vision</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-zinc-400 mb-8">
          FHDub aims to revolutionize the fitness, health, and wellness industry by creating a decentralized ecosystem
          that empowers users, builders, studios, gyms, teachers, and trainers alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Decentralized Fitness</h2>
            <p className="text-zinc-400">
              We envision a future where fitness, health, and wellness applications are built on a decentralized
              infrastructure, giving users control over their data and allowing them to benefit from the value they
              create.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Community Ownership</h2>
            <p className="text-zinc-400">
              FHDub is owned by fhdubDAO, ensuring that decisions about the platform's future are made by the community
              of users and builders who have a stake in its success.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Interoperable Ecosystem</h2>
            <p className="text-zinc-400">
              We're building a layer that supports multiple apps, coins, and tokens, creating an interoperable ecosystem
              where different fitness, health, and wellness applications can work together seamlessly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Innovative Technology</h2>
            <p className="text-zinc-400">
              By leveraging base.org's layer 2, Coinbase's X402 framework, Vercel's AI SDK, and Coinbase's agent-kit,
              we're building a platform that combines the best of blockchain, AI, and modern web technologies.
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-zinc-900 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-zinc-400">
            To create a decentralized platform that empowers individuals to take control of their fitness, health, and
            wellness journey, while enabling builders to create innovative applications that benefit the entire
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  )
}
