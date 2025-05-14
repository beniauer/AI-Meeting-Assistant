
import { Link, useLocation } from "react-router-dom";
import { Home, Mic, CheckSquare, LayoutDashboard, FileText, Settings } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Meeting Assistant", path: "/meeting-assistant", icon: <Mic className="h-5 w-5" /> },
  { name: "Action Center", path: "/action-center", icon: <CheckSquare className="h-5 w-5" rotate={-45} /> },
  { name: "Task Board", path: "/task-board", icon: <CheckSquare className="h-5 w-5" /> },
  { name: "Project Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { name: "Transcript Library", path: "/transcripts", icon: <FileText className="h-5 w-5" /> },
  { name: "Admin & Integrations", path: "/admin", icon: <Settings className="h-5 w-5" /> },
];

export default function NavRail() {
  const location = useLocation();
  
  return (
    <nav className="w-[220px] bg-white border-r border-gray-200 fixed top-16 left-0 bottom-12 z-20 overflow-y-auto">
      <div className="py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-app-red/10 text-app-red"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className={`mr-3 ${isActive ? "text-app-red" : "text-gray-500"}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
