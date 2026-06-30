import { Bell, UserCircle } from "lucide-react";

function Navbar() {
  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800">

      <div className="h-full flex items-center justify-between px-10">

        <div>
          <p className="text-sm text-slate-400">
            {date}
          </p>

          <h2 className="text-xl font-semibold mt-1">
            Air Quality Dashboard
          </h2>
        </div>

        <div className="flex items-center gap-6">

          <button className="relative p-2 rounded-xl hover:bg-slate-800 transition">

            <Bell size={22} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-3">

            <UserCircle
              size={36}
              className="text-cyan-400"
            />

            <div>

              <p className="font-semibold">
                Aryan Singh
              </p>

              <p className="text-sm text-slate-400">
                Software Engineer
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;