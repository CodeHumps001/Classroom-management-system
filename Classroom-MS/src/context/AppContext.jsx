import { createContext, useContext, useRef, useState, useMemo } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("light");
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef(null);

  const value = useMemo(
    () => ({
      students,
      setStudents,
      name,
      setName,
      seconds,
      setSeconds,
      theme,
      setTheme,
      inputRef,
    }),
    [students, name, seconds, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

export { AppProvider, useApp };
