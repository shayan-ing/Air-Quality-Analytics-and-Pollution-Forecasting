function HealthCard({
  title,
  value,
  subtitle,
  valueColor = "text-green-400",
  badge,
  badgeColor = "text-green-400",
}) {
  return (
<div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 min-h-[170px] transition-all duration-300 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>

      <div className="mt-5 flex items-start justify-between gap-4">

        <h2 className={`text-4xl font-bold ${valueColor}`}>
          {value}
        </h2>

        {badge && (
          <span
  className={`
    shrink-0
    rounded-full
    bg-slate-800
    px-3
    py-1
    text-sm
    font-semibold
    ${badgeColor}
  `}
>
  {badge}
</span>
        )}

      </div>

      <p className="mt-4 text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}

export default HealthCard;