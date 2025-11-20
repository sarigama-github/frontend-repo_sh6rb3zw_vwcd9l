import { motion } from 'framer-motion'
import { PhoneCall, Sparkles, MicVocal, BrainCircuit, ShieldCheck, Rocket } from 'lucide-react'

const features = [
  {
    icon: <PhoneCall className="text-white" size={18} />,
    title: 'Realtime voice calls',
    desc: 'Low-latency conversations with natural interruptions and turn-taking.'
  },
  {
    icon: <MicVocal className="text-white" size={18} />,
    title: 'Studio-grade voices',
    desc: 'Lifelike TTS with expressive prosody and multilingual support.'
  },
  {
    icon: <BrainCircuit className="text-white" size={18} />,
    title: 'Tool use & memory',
    desc: 'Bring your own tools, functions, and knowledge to guide behavior.'
  },
  {
    icon: <ShieldCheck className="text-white" size={18} />,
    title: 'Enterprise security',
    desc: 'SOC2-ready, data encryption, and single-tenant options.'
  },
  {
    icon: <Sparkles className="text-white" size={18} />,
    title: 'No-code flows',
    desc: 'Visual builder to orchestrate prompts, tools, and logic.'
  },
  {
    icon: <Rocket className="text-white" size={18} />,
    title: 'Scale instantly',
    desc: 'Global edge infrastructure with usage-based pricing.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-semibold text-white">
            Everything you need to ship voice AI
          </motion.h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            From first prototype to production — a platform built for speed, reliability, and control.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <div className="size-9 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-1.5">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
