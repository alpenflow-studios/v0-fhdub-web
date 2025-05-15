import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">fhdub</h3>
            <p className="text-zinc-400 text-sm">
              Fitness, health and wellness reimagined. You use it, you build it, you own it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vision" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Stack
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/build" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Build
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/fhdubdao" className="text-zinc-400 text-sm hover:text-white transition-colors">
                  fhdubDAO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Join the fhdubDAO and be part of the future of fitness, health, and wellness.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors">
              Join fhdubDAO
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} fhdub. All rights reserved.</p>
          <p className="mt-2">Owned by fhdubDAO.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
