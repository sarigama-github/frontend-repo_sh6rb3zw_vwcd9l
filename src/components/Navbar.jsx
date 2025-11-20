import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              <Sparkles className="text-white" size={18} />
            </div>
            <span className="text-white font-semibold tracking-tight">Dreep AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
            <a href="#" className="text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 px-4 py-2 rounded-lg transition-colors">Get started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center text-white/90">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-300 hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="text-slate-300 hover:text-white text-sm">Sign in</a>
              <a href="#" className="text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 px-4 py-2 rounded-lg transition-colors">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
