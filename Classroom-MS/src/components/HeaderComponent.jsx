import Button from "./ButtonComponent";
import { useApp } from "../context/AppContext";

export default function HeaderComponent() {
  const { theme, setTheme, inputRef } = useApp();

  // 2026 Toggle Logic: Toggles between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="flex justify-between py-3 px-8 items-center max-w-[1400px] m-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-lg mt-2 rounded-2xl sticky top-2 z-50 transition-colors duration-300 border border-white/20 dark:border-slate-700/50">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          CreedRoom<span className="text-lime-600">MS</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:ring-2 hover:ring-slate-300 dark:hover:ring-slate-600 transition-all"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            /* Sun Icon (Light Mode) */
            <svg
              xmlns="www.w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m.386-6.364 1.591-1.591M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
              />
            </svg>
          ) : (
            /* Moon Icon (Dark Mode) */
            <svg
              xmlns="www.w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>

        {/* Focus Input Action */}
        <Button
          onClick={() => inputRef.current?.focus()}
          className="px-6 py-2.5 bg-lime-600 hover:bg-lime-700 text-white rounded-xl font-bold transition-all shadow-md shadow-lime-600/20"
        >
          Focus
        </Button>
      </div>
    </header>
  );
}
