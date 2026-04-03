"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { MagneticButton } from "../ui/MagneticButton";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <MagneticButton
      intensity={0.2}
      className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-900 dark:text-white"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} weight="light" /> : <Moon size={20} weight="light" />}
    </MagneticButton>
  );
}
