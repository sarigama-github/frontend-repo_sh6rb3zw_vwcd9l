export default function Integrations() {
  return (
    <section className="relative py-16" id="integrations">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(168,85,247,0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wide">Integrates with:</div>
              <div className="text-white text-lg">Apple Health, Oura, WHOOP</div>
            </div>
            <div className="text-slate-300 text-sm space-y-1">
              <div>GMP + 3rd-party tested</div>
              <div>NIH upper-limit guardrails</div>
              <div>End-to-end encryption</div>
            </div>
            <div className="flex gap-3 justify-start md:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition-colors">Reserve beta - $1</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">Join waitlist</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
