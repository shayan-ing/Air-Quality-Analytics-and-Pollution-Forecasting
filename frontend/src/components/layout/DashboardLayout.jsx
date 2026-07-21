import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto">

  <div className="max-w-7xl mx-auto px-12 py-10">

    <Outlet />

  </div>

</main>

      </div>

    </div>
  );
}

export default DashboardLayout;