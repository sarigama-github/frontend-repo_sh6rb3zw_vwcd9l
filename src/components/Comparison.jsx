import { CheckCircle2, XCircle } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="relative py-20" id="comparison">
      <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgba(124,58,237,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Generic supplements are static. Your body is not.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-4">
              <XCircle className="text-rose-300" size={18} />
              <span className="uppercase tracking-wide">Static & Generic</span>
            </div>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-rose-300/70" /><div><b>Fixed Daily Doses:</b> Same amount every day, regardless of your body's changing needs</div></li>
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-rose-300/70" /><div><b>One-Size-Fits-All:</b> Generic formulas that ignore your unique health goals</div></li>
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-rose-300/70" /><div><b>Manual Guesswork:</b> No tracking, no adjustments, no optimization</div></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-amber-400/10 backdrop-blur p-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-4">
              <CheckCircle2 className="text-emerald-300" size={18} />
              <span className="uppercase tracking-wide">dreep — Dynamic Dosing</span>
            </div>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-emerald-300/70" /><div><b>AI-powered adjustments</b> based on your real-time biomarker data</div></li>
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-emerald-300/70" /><div><b>Goal-Specific Protocols:</b> Personalized formulations tailored to your health objectives</div></li>
              <li className="flex gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-emerald-300/70" /><div><b>Automated Intelligence:</b> Continuous optimization with full audit trail and transparency</div></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-slate-300 mt-8">Your body changes. Your supplements should too. <a href="https://www.youtube.com/watch?list=TLGGQPovA01KnSgyMDExMjAyNQ&v=jtE9jHVZ-rA" className="text-white underline decoration-white/30 hover:decoration-white">Watch on YouTube</a></p>
      </div>
    </section>
  )
}
