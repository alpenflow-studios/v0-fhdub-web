'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ConnectWallet } from '@coinbase/onchainkit/wallet'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            fhdub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/vision" className="text-sm hover:text-zinc-400 transition-colors">
              Vision
            </Link>
            <Link href="/stack" className="text-sm hover:text-zinc-400 transition-colors">
              Stack
            </Link>
            <Link href="/projects" className="text-sm hover:text-zinc-400 transition-colors">
              Projects
            </Link>
            <div className="relative group">
              <button className="text-sm hover:text-zinc-400 transition-colors flex items-center gap-1">
                Build
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/build" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                  Build on fhdub
                </Link>
                <Link href="/build-fhdub" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                  Build fhdub
                </Link>
              </div>
            </div>
            <Link href="/whitepaper" className="text-sm hover:text-zinc-400 transition-colors">
              Whitepaper
            </Link>
            <Link href="/fhdubdao" className="text-sm hover:text-zinc-400 transition-colors">
              fhdubDAO
            </Link>
          </nav>

          {/* Smart Wallet Connect - Desktop */}
          <div className="hidden md:flex">
            <ConnectWallet 
              className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors"
            >
              <span>Connect Wallet</span>
            </ConnectWallet>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link href="/vision" className="text-sm hover:text-zinc-400 transition-colors">
              Vision
            </Link>
            <Link href="/stack" className="text-sm hover:text-zinc-400 transition-colors">
              Stack
            </Link>
            <Link href="/projects" className="text-sm hover:text-zinc-400 transition-colors">
              Projects
            </Link>
            <div className="py-1 border-t border-b border-zinc-800">
              <p className="text-xs text-zinc-500 mb-2 mt-1">Build Options:</p>
              <Link href="/build" className="text-sm hover:text-zinc-400 transition-colors block mb-2 pl-2">
                → Build on fhdub
              </Link>
              <Link href="/build-fhdub" className="text-sm hover:text-zinc-400 transition-colors block mb-1 pl-2">
                → Build fhdub
              </Link>
            </div>
            <Link href="/whitepaper" className="text-sm hover:text-zinc-400 transition-colors">
              Whitepaper
            </Link>
            <Link href="/fhdubdao" className="text-sm hover:text-zinc-400 transition-colors">
              fhdubDAO
            </Link>
            
            {/* Smart Wallet Connect - Mobile */}
            <div className="pt-2">
              <ConnectWallet 
                className="w-full bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors text-center"
              >
                <span>Connect Wallet</span>
              </ConnectWallet>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
