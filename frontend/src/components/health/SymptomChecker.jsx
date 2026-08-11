import { useState } from "react";

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
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleChange = (symptom) => {
    setSelectedSymptoms((current) =>
      current.includes(symptom)
        ? current.filter((item) => item !== symptom)
        : [...current, symptom]
    );
  };

  return (
    <div>
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
              checked={selectedSymptoms.includes(symptom)}
              onChange={() => handleChange(symptom)}
              className="h-5 w-5 accent-green-500"
            />

            <span className="text-slate-300">
              {symptom}
            </span>
          </label>
        ))}
      </div>

      {selectedSymptoms.length > 0 && (
        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
          <p className="font-semibold text-yellow-400">
            ⚠️ Health Advisory
          </p>

          <p className="mt-2 text-slate-300">
            You selected {selectedSymptoms.length} symptom
            {selectedSymptoms.length > 1 ? "s" : ""}.
            Consider reducing prolonged outdoor exposure.
            If symptoms are severe or getting worse, seek medical
            attention.
          </p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;