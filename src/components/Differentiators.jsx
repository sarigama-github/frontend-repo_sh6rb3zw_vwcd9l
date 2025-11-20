export default function Differentiators() {
  const items = [
    {
      title: 'Real-time dose changes',
      desc: 'With a daily dose-change log and reasons',
    },
    {
      title: 'Data integrations',
      desc: 'Apple Health, Oura, WHOOP, Garmin, Fitbit, Cronometer. CGM-ready',
    },
    {
      title: 'Goal targeting',
      desc: 'Supports HRV, resting HR, sleep efficiency, training recovery, travel fatigue',
    },
    {
      title: 'Quality + safety',
      desc: 'GMP manufacturing, 3rd-party testing, batch IDs, NIH upper-limit guardrails',
    },
    {
      title: 'Privacy by design',
      desc: 'End-to-end encrypted, user-controlled data',
    },
  ]

  return (
    <section className="relative py-20" id="why">
      <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">What makes dreep different</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-slate-300 text-sm mt-1.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
