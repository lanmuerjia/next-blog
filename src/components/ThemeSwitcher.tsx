"use client";

import { MoonIcon, SunIcon } from "@nextui-org/shared-icons";
import { useTheme } from "next-themes";
// import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    // <Switch
    //   isSelected={theme === "dark"}
    //   onValueChange={(selected) => setTheme(selected ? "dark" : "light")}
    //   startContent={<MoonIcon />}
    //   endContent={<SunIcon />}
    // />
    <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </span>
  );
}
