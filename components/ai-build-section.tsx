"use client"

import { useState } from "react"
import {
  Dumbbell,
  Coins,
  FileVideo,
  CalendarCheck,
  Watch,
  Wand2,
  Heart,
  Brain,
  Utensils,
  Users,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const buildSuggestions = [
  {
    id: "wearable",
    icon: <Watch className="h-5 w-5" />,
    text: "Build a wearable app",
  },
  {
    id: "coin",
    icon: <Coins className="h-5 w-5" />,
    text: "Launch a trainer coin",
  },
  {
    id: "nft",
    icon: <FileVideo className="h-5 w-5" />,
    text: "Mint an NFT video library",
  },
  {
    id: "subscription",
    icon: <Dumbbell className="h-5 w-5" />,
    text: "A sub request app",
  },
  {
    id: "challenge",
    icon: <CalendarCheck className="h-5 w-5" />,
    text: "A 30 day fitness challenge",
  },
  {
    id: "health",
    icon: <Heart className="h-5 w-5" />,
    text: "Health tracking dashboard",
  },
  {
    id: "meditation",
    icon: <Brain className="h-5 w-5" />,
    text: "Meditation rewards program",
  },
  {
    id: "nutrition",
    icon: <Utensils className="h-5 w-5" />,
    text: "Nutrition planning app",
  },
  {
    id: "community",
    icon: <Users className="h-5 w-5" />,
    text: "Fitness community platform",
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-5 w-5" />,
    text: "Mobile coaching app",
  },
]

export default function AiBuildSection() {
  const [inputValue, setInputValue] = useState("")
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)

  const handleSuggestionClick = (id: string) => {
    const suggestion = buildSuggestions.find((s) => s.id === id)
    if (suggestion) {
      setInputValue(suggestion.text)
      setSelectedSuggestion(id)
    }
  }

  return (
    <div className="w-full">
      <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What do you want to build on fhdub?"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <Button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-zinc-100 p-2 h-auto"
            size="icon"
          >
            <Wand2 className="h-5 w-5 text-black" />
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {buildSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors ${
                selectedSuggestion === suggestion.id
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {suggestion.icon}
              {suggestion.text}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild className="bg-white hover:bg-zinc-100 border border-zinc-300 text-black">
            <Link href="#">Start Building with AI</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
