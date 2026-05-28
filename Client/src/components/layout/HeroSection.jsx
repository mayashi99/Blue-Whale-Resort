export default function HeroSection({ title, subtitle }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 shadow-2xl shadow-cyan-950/20 sm:p-10 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{subtitle}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  )
}