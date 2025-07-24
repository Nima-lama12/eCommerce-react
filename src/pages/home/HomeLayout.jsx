import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function HomeLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
