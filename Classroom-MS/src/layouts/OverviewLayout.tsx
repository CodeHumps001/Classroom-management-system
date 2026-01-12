import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export default function Overview() {
  const { setSeconds, students, seconds } = useApp();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setSeconds]);

  return (
    <>
      {/* Total Students Card */}
      <div className="w-full h-48 bg-white/80 dark:bg-slate-800/50 rounded-2xl shadow-xl flex flex-col justify-center items-center backdrop-blur-xl border border-white/20 dark:border-slate-700/50 transition-all duration-300">
        <h1 className="text-xl font-medium text-slate-600 dark:text-slate-400">
          Total Students
        </h1>
        <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
          {students.length}
        </span>
      </div>

      {/* Active Time Card */}
      <div className="w-full h-48 bg-white/80 dark:bg-slate-800/50 rounded-2xl shadow-xl flex flex-col justify-center items-center backdrop-blur-xl border border-white/20 dark:border-slate-700/50 transition-all duration-300">
        <h1 className="text-xl font-medium text-slate-600 dark:text-slate-400">
          Active Time
        </h1>
        <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
          {seconds}s
        </span>
      </div>
    </>
  );
}
