import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ClientLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-64 bg-slate-900 border-r border-slate-800">
        <Sidebar />
      </aside>

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 md:hidden
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800">
          <span className="font-semibold">U-Tech</span>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* MOBILE HEADER */}
        <header className="md:hidden flex items-center gap-4 px-4 py-4 border-b border-slate-800 bg-slate-900">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-medium">Dashboard</h1>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
