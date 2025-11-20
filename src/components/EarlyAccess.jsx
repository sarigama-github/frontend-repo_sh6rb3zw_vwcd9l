export default function EarlyAccess() {
  return (
    <section className="relative py-20" id="early-access">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(168,85,247,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60 backdrop-blur p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-white">Early access</h3>
          <ul className="mt-4 text-slate-300 max-w-2xl mx-auto space-y-1">
            <li>Founders access - $1 refundable Fast Pass</li>
            <li>Priority invite to the closed beta</li>
            <li>Early pricing expected from $50 per month including device, capsules, and AI app</li>
            <li>Limited seats</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">
              Reserve Beta - $1
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
