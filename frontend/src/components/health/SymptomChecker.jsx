const symptoms = [
  "Cough",
  "Headache",
  "Eye Irritation",
  "Shortness of Breath",
  "Fatigue",
  "Chest Tightness",
  "Sore Throat",
  "Dizziness",
];

function SymptomChecker() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {symptoms.map((symptom) => (

        <label
          key={symptom}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-4
            cursor-pointer
            hover:border-green-500/30
            transition
          "
        >

          <input
            type="checkbox"
            className="
              h-5
              w-5
              accent-green-500
            "
          />

          <span className="text-slate-300">
            {symptom}
          </span>

        </label>

      ))}

    </div>
  );
}

export default SymptomChecker;