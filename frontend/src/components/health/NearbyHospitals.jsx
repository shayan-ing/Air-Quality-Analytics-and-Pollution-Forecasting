import {
  Hospital,
  Phone,
  MapPin,
} from "lucide-react";

const hospitals = [
  {
    name: "AIIMS Delhi",
    distance: "5.2 km",
    phone: "011-26588500",
  },
  {
    name: "Safdarjung Hospital",
    distance: "6.8 km",
    phone: "011-26730000",
  },
  {
    name: "Max Super Speciality",
    distance: "8.5 km",
    phone: "011-40554055",
  },
  {
    name: "Fortis Hospital",
    distance: "10.1 km",
    phone: "011-42776222",
  },
];

function NearbyHospitals() {
  return (
    <div className="grid gap-5 md:grid-cols-2">

      {hospitals.map((hospital) => (

        <div
          key={hospital.name}
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
            hover:border-cyan-500/30
            transition
          "
        >

          <div className="flex justify-between items-start">

            <div>

              <div className="flex items-center gap-2">

                <Hospital
                  size={22}
                  className="text-cyan-400"
                />

                <h3 className="text-xl font-semibold">
                  {hospital.name}
                </h3>

              </div>

              <div className="mt-4 flex items-center gap-2 text-slate-400">

                <MapPin size={16} />

                {hospital.distance}

              </div>

              <div className="mt-2 flex items-center gap-2 text-slate-400">

                <Phone size={16} />

                {hospital.phone}

              </div>

            </div>

            <button className="rounded-lg bg-cyan-500 px-4 py-2 text-slate-950 font-semibold hover:bg-cyan-400 transition">

              Navigate

            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default NearbyHospitals;