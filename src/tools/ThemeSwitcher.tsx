'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="">
      <div className="py-8">
        <button onClick={() => setTheme("light")}>
          <Sun className="dark:fill-white dark:stroke-white" />
        </button>
      </div>
      <div>
        <button onClick={() => setTheme("dark")}>
           <Moon className="dark:fill-white dark:stroke-white"/>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;