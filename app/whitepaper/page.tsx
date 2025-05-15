import { ArrowDown, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhitepaperPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <FileText size={48} className="mb-6" />
        <h1 className="text-4xl font-bold tracking-tighter mb-4">fhdub whitepaper</h1>
        <p className="text-xl text-zinc-400 mb-4">
          A Layer 3 Blockchain Solution for the Fitness, Health, and Wellness Industry
        </p>
        <p className="text-lg text-zinc-500 mb-8">v1.0 - May 2025</p>
        <p className="text-lg text-zinc-400 italic mb-8 max-w-2xl">
          Empowering the fitness, health, and wellness ecosystem through decentralized governance, financial stability,
          and inclusive participation
        </p>
        <Button asChild size="lg" className="flex items-center gap-2">
          <Link href="#">
            <ArrowDown size={16} />
            Download Whitepaper
          </Link>
        </Button>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Contents</h2>
        <ol className="space-y-2 mb-12">
          <li>
            <Link href="#introduction" className="hover:text-zinc-300 transition-colors">
              Introduction
            </Link>
          </li>
          <li>
            <Link href="#state-of-industry" className="hover:text-zinc-300 transition-colors">
              The State of the Fitness, Health, and Wellness Industry
            </Link>
          </li>
          <li>
            <Link href="#tokenization" className="hover:text-zinc-300 transition-colors">
              Tokenization Opportunity for the FHW Ecosystem
            </Link>
          </li>
          <li>
            <Link href="#architecture" className="hover:text-zinc-300 transition-colors">
              The fhdub Architecture
            </Link>
          </li>
          <li>
            <Link href="#token-economy" className="hover:text-zinc-300 transition-colors">
              Multi-Token Economy
            </Link>
          </li>
          <li>
            <Link href="#stakeholders" className="hover:text-zinc-300 transition-colors">
              Stakeholder Ecosystem
            </Link>
          </li>
          <li>
            <Link href="#governance" className="hover:text-zinc-300 transition-colors">
              The fhdubDAO Structure and Governance
            </Link>
          </li>
          <li>
            <Link href="#dapps" className="hover:text-zinc-300 transition-colors">
              Decentralized Applications (dApps) Ecosystem
            </Link>
          </li>
          <li>
            <Link href="#economics" className="hover:text-zinc-300 transition-colors">
              Token Economics
            </Link>
          </li>
          <li>
            <Link href="#roadmap" className="hover:text-zinc-300 transition-colors">
              Implementation Roadmap
            </Link>
          </li>
          <li>
            <Link href="#security" className="hover:text-zinc-300 transition-colors">
              Security and Privacy Considerations
            </Link>
          </li>
          <li>
            <Link href="#compliance" className="hover:text-zinc-300 transition-colors">
              Regulatory Compliance
            </Link>
          </li>
          <li>
            <Link href="#conclusion" className="hover:text-zinc-300 transition-colors">
              Conclusion
            </Link>
          </li>
          <li>
            <Link href="#disclaimer" className="hover:text-zinc-300 transition-colors">
              Legal Disclaimer
            </Link>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4" id="introduction">
          1. Introduction
        </h2>
        <p className="text-zinc-400 mb-4">
          fhdub is a specialized Layer 3 blockchain solution built on the foundation of Coinbase's Base Layer 2
          technology, designed specifically to address the unique challenges and opportunities within the fitness,
          health, and wellness (FHW) industry. This paper outlines a comprehensive approach to tokenizing and
          decentralizing various aspects of the FHW ecosystem, creating a more efficient, transparent, and equitable
          environment for all stakeholders.
        </p>
        <p className="text-zinc-400 mb-4">
          The FHW industry encompasses a diverse range of participants including individual users, fitness facilities,
          service providers, content creators, health professionals, and product manufacturers. Currently, these
          participants operate within disconnected systems, leading to inefficiencies, data silos, lack of
          interoperability, and imbalanced value distribution. fhdub aims to unify these elements through a
          purpose-built blockchain infrastructure that enables seamless interaction, data sovereignty, fair value
          exchange, and innovative applications.
        </p>
        <p className="text-zinc-400 mb-4">
          At its core, fhdub introduces a dual-token economy with distinct tokens serving specific purposes:
        </p>
        <ul className="space-y-2 mb-4 text-zinc-400">
          <li>
            <strong>FHdp</strong> - A participation token that incentivizes positive behaviors, facilitates value
            exchange within the ecosystem, and can be exchanged for USDC or governance tokens
          </li>
          <li>
            <strong>FHdg</strong> - A governance token that enables democratic participation in the fhdubDAO
          </li>
        </ul>
        <p className="text-zinc-400 mb-8">
          fhdub is powered by the Aragon stack and incorporated in the state of Wyoming, USA, providing a robust legal
          and technical foundation for decentralized governance. The platform leverages Coinbase's x402 HTTP framework
          for payment processing across all applications, coins, tokens, and NFTs within the ecosystem, ensuring
          seamless financial transactions. Additionally, fhdub integrates Vercel AI SDK and Coinbase's Agent Kit to
          enable intelligent, automated interactions and applications.
        </p>
        <p className="text-zinc-400 mb-12">
          This white paper details the technical architecture, economic model, governance structure, and potential
          applications of the fhdub ecosystem, providing a roadmap for revolutionizing how value is created, measured,
          and exchanged within the fitness, health, and wellness space.
        </p>

        <h2 className="text-2xl font-semibold mb-4" id="state-of-industry">
          2. The State of the Fitness, Health, and Wellness Industry
        </h2>
        <h3 className="text-xl font-semibold mb-3">Current Market Size and Growth Trajectory</h3>
        <p className="text-zinc-400 mb-4">
          The global fitness, health, and wellness industry represents a massive economic sector valued at over $4.5
          trillion annually, with consistent growth projections exceeding 5-7% year over year. This ecosystem
          encompasses traditional gyms and fitness centers ($96.7 billion), digital fitness platforms ($27.4 billion),
          nutrition services ($702 billion), wellness tourism ($639 billion), preventative health services, mental
          wellness applications, and numerous related subsectors.
        </p>
        <p className="text-zinc-400 mb-8">
          The post-pandemic landscape has reshaped the industry significantly. While the sector experienced a
          devastating -32% contraction during 2020, it has rebounded with 20.5% growth in 2022 and continued recovery
          through 2023-2024. Industry analysts now project the global fitness industry to exceed pre-pandemic levels by
          Q3 2025, reaching approximately $107 billion.
        </p>

        <h3 className="text-xl font-semibold mb-3">Post-Pandemic Transformation and Challenges</h3>
        <p className="text-zinc-400 mb-4">
          The pandemic has permanently altered the fitness, health, and wellness landscape, creating both significant
          challenges and new opportunities:
        </p>

        <h4 className="text-lg font-semibold mb-2">Operational Challenges:</h4>
        <ol className="space-y-6 mb-8 text-zinc-400">
          <li>
            <strong>Rising Operational Costs</strong>: Since 2020, gym owners have faced unprecedented cost pressures:
            <ul className="mt-2 space-y-1">
              <li>• Commercial rent increases averaging 7-12% annually</li>
              <li>• Utility costs up 22% compared to 2019 levels</li>
              <li>• Equipment and maintenance costs rising 15-18% due to supply chain disruptions</li>
              <li>• Insurance premium increases of 10-30% for fitness businesses</li>
            </ul>
          </li>
          <li>
            <strong>Technology Platform Dependency</strong>: Independent fitness businesses face substantial financial
            burdens from essential software platforms:
            <ul className="mt-2 space-y-1">
              <li>• MindBody subscription costs range from $129-$499+ monthly, plus processing fees of 2.75-3.5%</li>
              <li>• Momence charges 3.5% + $0.30 per transaction alongside monthly fees of $59-$149</li>
              <li>• Average gym now requires 4-7 different software solutions for complete operations</li>
              <li>• Combined technology costs represent 8-15% of revenue for the average fitness business</li>
            </ul>
          </li>
        </ol>

        <div className="text-center my-12">
          <Button asChild size="lg" className="flex items-center gap-2">
            <Link href="#">
              <ArrowDown size={16} />
              Download Full Whitepaper
            </Link>
          </Button>
          <p className="text-sm text-zinc-500 mt-4">
            Download the complete whitepaper to read all sections including Token Economy, Architecture, Governance, and
            more.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4" id="key-innovations">
          Key Innovations
        </h2>
        <p className="text-zinc-400 mb-4">The fhdub platform introduces several groundbreaking innovations:</p>
        <ol className="space-y-4 mb-8 text-zinc-400">
          <li>
            <strong>Value Recognition</strong>: fhdub creates mechanisms to recognize, reward and exchange forms of
            value that traditional economic systems cannot properly capture - health improvements, behavioral changes,
            knowledge sharing, and community building.
          </li>
          <li>
            <strong>Multi-Token Economy</strong>: The specialized token system addresses distinct needs within the
            ecosystem - FHdp rewards participation and facilitates exchange while FHdg enables democratic ecosystem
            management.
          </li>
          <li>
            <strong>Financial Empowerment</strong>: Through the fhdubDAO's loan, grant, and relief programs, fhdub
            provides critical financial resources to an industry traditionally underserved by financial institutions.
          </li>
          <li>
            <strong>Data Sovereignty</strong>: By returning control of health and fitness data to individuals while
            enabling permissioned sharing, fhdub creates new opportunities for both privacy protection and value
            creation.
          </li>
          <li>
            <strong>Inclusive Governance</strong>: The sophisticated governance structure ensures all stakeholders -
            from individual users to small businesses to service providers - have appropriate representation in
            ecosystem decisions.
          </li>
          <li>
            <strong>Innovation Accessibility</strong>: By providing self-service tools for application development,
            fhdub democratizes innovation, allowing anyone in the ecosystem to create their own apps, tokens, and
            digital assets without technical expertise.
          </li>
          <li>
            <strong>Technological Integration</strong>: Through integration with Base Layer 2, Coinbase's x402 payment
            framework, Vercel AI SDK, and Coinbase Agent Kit, fhdub leverages cutting-edge technology to create a
            seamless, efficient experience.
          </li>
          <li>
            <strong>Legal Foundation</strong>: Structured as a Wyoming DAO LLC on the Aragon stack, fhdub provides legal
            clarity and protection while maintaining decentralized governance principles.
          </li>
        </ol>

        <div className="text-center my-12">
          <Button asChild size="lg" className="flex items-center gap-2">
            <Link href="#">
              <ArrowDown size={16} />
              Download Full Whitepaper
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
