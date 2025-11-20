export default function Personalization() {
  const items = [
    'Sleep score dropped last night: AM shot adjusts B-complex and supportive nutrients.*',
    'Heavy workout logged: Recovery support increases, including magnesium as applicable.*',
    'Meal log short on vitamin C–rich foods: Vitamin C added to the next shot for dietary coverage.*',
    'Red-eye flight: Protocol shifts timing and supportive nutrients for travel fatigue.*'
  ]

  return (
    <section className="relative py-20" id="personalization">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(124,58,237,0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">Real-time personalization in action</h2>
        <ul className="mt-8 max-w-3xl mx-auto space-y-3 text-slate-200">
          {items.map((t, i) => (
            <li key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">{t}</li>
          ))}
        </ul>
        <p className="text-center text-slate-400 text-xs mt-4">*Your data drives the dose. No pill sorting. No settings to tweak.</p>
      </div>
    </section>
  )
}
