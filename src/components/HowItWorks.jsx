export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'AI intake',
      desc: 'Sets baseline and selects 5–8 liquid cartridges tailored to your goals and safety guardrails.'
    },
    {
      num: '02',
      title: 'Data-driven updates + monthly refresh',
      desc: 'Connect wearables; plan adapts monthly and doses are fine-tuned daily; we ship refreshed 5–8 each month.'
    },
    {
      num: '03',
      title: 'Real-time mix & dispense',
      desc: 'Device mixes a single serving in real time from the liquid cartridges; dose-change log available anytime.'
    }
  ]

  return (
    <section className="relative py-20" id="how">
      <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgba(251,146,60,0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="text-slate-300 text-sm">{s.num} – {s.title}</div>
              <p className="text-slate-200 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-300 mt-8">Personalized, adaptive, and effortless — <a className="text-white underline decoration-white/30 hover:decoration-white" href="https://www.youtube.com/watch?list=TLGGlDOXOEVEVioyMDExMjAyNQ&v=noi150qNYTI" target="_blank" rel="noreferrer">Watch on YouTube</a></p>
      </div>
    </section>
  )
}
