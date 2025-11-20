export default function FAQ() {
  const questions = [
    'Do my doses change every day?',
    "What if I don't use a wearable?",
    'Which data sources are supported?',
    'How do you protect my data?',
    'Is this safe?'
  ]

  return (
    <section className="relative py-20" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_0%,rgba(124,58,237,0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">Frequently Asked Questions</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {questions.map((q, i) => (
            <details key={i} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <summary className="cursor-pointer text-white">{q}</summary>
              <p className="text-slate-300 mt-2 text-sm">Answer coming soon. We can tailor responses to your policies and science notes.</p>
            </details>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-6">Terms & Conditions | Privacy Policy | Contact | Partners & Distributors</p>
      </div>
    </section>
  )
}
