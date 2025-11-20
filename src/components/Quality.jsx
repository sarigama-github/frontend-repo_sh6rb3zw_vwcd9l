export default function Quality() {
  return (
    <section className="relative py-20" id="quality">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(59,130,246,0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">Science, quality, and safety</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <ul className="space-y-3 text-slate-200">
              <li><b>Formulation controls:</b> evidence-based ranges, pharmacist review</li>
              <li><b>Testing:</b> 3rd-party purity and heavy metals panel per batch</li>
              <li><b>Traceability:</b> batch ID lookup in app</li>
              <li><b>Guardrails:</b> adheres to established safe upper limits for nutrients</li>
            </ul>
            <p className="text-xs text-slate-400 mt-4">Compliance note: not intended to diagnose, treat, cure, or prevent disease</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4"><div className="font-semibold">GMP</div><div className="text-slate-300 text-sm">3rd Party Tested</div></div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4"><div className="font-semibold">Batch Lookup</div><div className="text-slate-300 text-sm">Batch: DR240815-001</div></div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4"><div className="font-semibold">Tested</div><div className="text-slate-300 text-sm">Aug 15, 2024</div></div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4"><div className="font-semibold">Status</div><div className="text-emerald-300 text-sm">✓ Verified</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
