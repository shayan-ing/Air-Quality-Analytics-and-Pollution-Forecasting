function PredictionCard({
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
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
        min-h-[190px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/30
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>

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

      <p className="mt-6 text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}

export default PredictionCard;