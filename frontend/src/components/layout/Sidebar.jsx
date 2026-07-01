import { NavLink } from "react-router-dom";
import navigation from "../../constants/navigation";
import { useSidebar } from "../../contexts/SidebarContext";
import { Leaf } from "lucide-react";
function Sidebar() {
  const { isOpen } = useSidebar();
  return (
    <aside
  className={`bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${
    isOpen ? "w-64" : "w-20"
  }`}
>

      {/* Logo */}
      <div
  className={`border-b border-slate-800 ${
    isOpen ? "p-6" : "py-6 flex justify-center"
  }`}
>

    <div
  className={`flex items-center ${
    isOpen ? "gap-3" : "justify-center"
  }`}
>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">

            <Leaf size={28} className="text-emerald-400" />

        </div>

        {isOpen && (
  <div>
    <h1 className="text-2xl font-bold text-cyan-400">
      AQ Analytics
    </h1>

    <p className="text-sm text-slate-400">
      Pollution Forecasting Platform
    </p>
  </div>
)}

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
  `flex items-center ${
    isOpen ? "justify-start gap-3 px-4" : "justify-center"
  } py-3 rounded-xl mb-2 transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              <Icon size={20} />
              {isOpen && <span>{item.name}</span>}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;