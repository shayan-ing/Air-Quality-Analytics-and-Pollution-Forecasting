function SummaryCard({
  title,
  value,
  subtitle,
  valueColor = "text-cyan-400",
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-500/30 transition">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${valueColor}`}>
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}

export default SummaryCard;