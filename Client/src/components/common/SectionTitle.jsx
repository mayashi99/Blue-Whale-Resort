export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="mx-auto w-full max-w-5xl px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-14">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}