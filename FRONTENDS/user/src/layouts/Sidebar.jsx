import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  Mail
} from "lucide-react";

const Sidebar = ({ onNavigate }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md transition
     ${isActive
       ? "bg-teal-500/20 text-teal-400"
       : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`;

  return (
    <nav className="p-4 space-y-1">
      <NavLink to="." end className={linkClass} onClick={onNavigate}>
        <LayoutDashboard size={18} />
        Overview
      </NavLink>

      <NavLink to="tutorials" className={linkClass} onClick={onNavigate}>
        <BookOpen size={18} />
        Tutorials
      </NavLink>

      <NavLink to="projects" className={linkClass} onClick={onNavigate}>
        <FolderKanban size={18} />
        Projects
      </NavLink>

      <NavLink to="messages" className={linkClass} onClick={onNavigate}>
        <Mail size={18} />
        Messages
      </NavLink>
    </nav>
  );
};

export default Sidebar;
