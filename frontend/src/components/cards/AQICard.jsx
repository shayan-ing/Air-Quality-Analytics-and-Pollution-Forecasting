import Card from "../ui/Card";

function AQICard() {
  return (
    <Card className="h-52">

      <p className="text-slate-400 text-sm uppercase tracking-wider">
        Air Quality Index
      </p>

      <div className="mt-5">

        <h2 className="text-6xl font-bold text-cyan-400">
          132
        </h2>

        <p className="mt-4 text-green-400 font-semibold text-lg">
          Good
        </p>

      </div>

    </Card>
  );
}

export default AQICard;