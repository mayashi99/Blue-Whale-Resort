export default function Button({ children, variant = 'primary', ...props }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const variantClasses =
    variant === 'secondary'
      ? 'bg-white/5 text-slate-100 ring-1 ring-inset ring-white/10 hover:bg-white/10 focus-visible:outline-cyan-300'
      : 'bg-gradient-to-r from-amber-200 to-cyan-200 text-slate-950 shadow-lg shadow-cyan-500/10 hover:-translate-y-0.5 focus-visible:outline-cyan-300'

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  )
}