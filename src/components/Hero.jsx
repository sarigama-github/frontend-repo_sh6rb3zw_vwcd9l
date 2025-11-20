import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-24 overflow-hidden">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.35)_0%,rgba(59,130,246,0.18)_35%,rgba(251,146,60,0.12)_60%,transparent_80%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[1100px] bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/20 to-amber-400/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span className="size-1.5 rounded-full bg-gradient-to-tr from-violet-400 to-amber-300" />
                dreep — adaptive nutrition
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                dreep – Feel Stronger, Sharper, and Years Ahead
              </h1>
              <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl">
                dreep turns your sleep, training, and diet data into a precise daily vitamin shot, so your body always gets exactly what it needs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">
                  Reserve beta access - $1 refundable
                </a>
                <a href="#integrations" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
                  Join waitlist
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300/90 max-w-lg">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Apple Health</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Oura</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">WHOOP</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">End-to-end encryption</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">GMP + 3rd-party tested</div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">NIH guardrails</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur relative overflow-hidden">
            {/* Spline animation */}
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
