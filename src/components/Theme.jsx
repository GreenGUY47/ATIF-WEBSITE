import { useEffect, useState } from "react";
import light from '../assets/icons/lightbulb-regular-full.svg'
import dark from '../assets/icons/lightbulb-solid-full.svg'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
   <button
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="
    p-1
    bg-white rounded-4xl dark:bg-gray-700
    transition-all duration-300
  "
>
  <img
    src={theme === "light" ? dark : light}
    alt="theme toggle"
    className="w-6 h-6"
  />
</button>
  );
};

export default ThemeToggle;