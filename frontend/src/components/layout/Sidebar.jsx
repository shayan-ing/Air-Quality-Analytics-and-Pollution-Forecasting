import { NavLink } from "react-router-dom";
import navigation from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="border-b border-slate-800 p-6">

    <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">

            🌍

        </div>

        <div>

            <h1 className="text-2xl font-bold text-cyan-400">
                AQ Analytics
            </h1>

            <p className="text-sm text-slate-400">
                Pollution Forecasting Platform
            </p>

        </div>

    </div>

</div>

      {/* Navigation */}
      <nav className="flex-1 p-4">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;