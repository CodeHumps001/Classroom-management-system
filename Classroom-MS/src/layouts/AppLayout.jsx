import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import FormLayout from "./FormLayout";
import Overview from "./OverviewLayout";
import StudentCard from "./StudentCardLayout";

export default function AppLayout() {
  const { theme } = useApp();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    /* Added dark:bg-slate-950 to the main background */
    <main className="grid grid-cols-[500px_1fr] grid-rows-[300px_1fr] p-5 w-full min-h-svh gap-5 max-md:grid-cols-1 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar/Overview: Added dark:bg-slate-900 */}
      <div className="bg-gray-100 dark:bg-slate-900 p-3 flex flex-col gap-4 max-md:row-start-2 rounded-xl transition-colors">
        <Overview />
      </div>

      {/* Form Area */}
      <div className="max-md:row-start-1">
        <FormLayout />
      </div>

      {/* Student List Area: Added dark:bg-slate-900/50 */}
      <div className="bg-gray-200 dark:bg-slate-900/50 col-span-1 md:col-span-2 flex flex-wrap p-5 gap-4 rounded-xl transition-colors">
        <StudentCard />
      </div>
    </main>
  );
}
