import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60 backdrop-blur p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-white">Build your AI voice agent today</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Try it free, connect your tools, and deploy to production in days — not months.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">
              Start for free
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Talk to sales <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
