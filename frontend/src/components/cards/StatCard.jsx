import Card from "../ui/Card";

function StatCard({
  title,
  value,
  status,
  icon: Icon,
  valueColor = "text-cyan-400",
  statusColor = "text-green-400",
}) {
  return (
   <Card className="min-h-[180px] flex flex-col justify-between hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>
        </div>

        {Icon && (
          <Icon
            size={34}
            className="text-cyan-400"
          />
        )}

      </div>

      <div>

        <h2 className={`text-6xl font-extrabold ${valueColor}`}>
          {value}
        </h2>

        <p className={`mt-3 font-semibold ${statusColor}`}>
          {status}
        </p>

      </div>

    </Card>
  );
}

export default StatCard;