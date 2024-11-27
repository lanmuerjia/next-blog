"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as Provider, ThemeProviderProps } from "next-themes";

function ThemeProvider(props: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <Provider {...props} /> : null;
}

export default ThemeProvider;
