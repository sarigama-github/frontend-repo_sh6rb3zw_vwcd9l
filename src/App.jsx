import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Comparison from './components/Comparison'
import Integrations from './components/Integrations'
import Differentiators from './components/Differentiators'
import HowItWorks from './components/HowItWorks'
import Personalization from './components/Personalization'
import Quality from './components/Quality'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Starry subtle bg and gradients */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(251,146,60,0.10),transparent_40%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Comparison />
        <Differentiators />
        <HowItWorks />
        <Personalization />
        <Quality />
        <CTA />
        <FAQ />
      </main>

      <footer className="relative border-top border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} dreep (VH2O Ltd.). All rights reserved. We never sell personal data.</p>
          <div className="flex items-center gap-5">
            <a href="https://dreep.ai/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="https://dreep.ai/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="https://dreep.ai/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
