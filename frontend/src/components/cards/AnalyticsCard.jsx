function AnalyticsCard({
  title,
  value,
  subtitle,
  valueColor = "text-cyan-400",
  trend,
  trendColor = "text-green-400",
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        p-6
        min-h-[190px]
        transition-all
        duration-300
        hover:border-cyan-500/30
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Title */}

      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {title}
      </p>

      {/* Value */}

      <div className="mt-6 flex items-center justify-between">

        <h2 className={`text-5xl font-bold ${valueColor}`}>
          {value}
        </h2>

        {trend && (
          <span
            className={`rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold ${trendColor}`}
          >
            {trend}
          </span>
        )}

      </div>

      {/* Subtitle */}

      <p className="mt-6 text-base text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}

export default AnalyticsCard;