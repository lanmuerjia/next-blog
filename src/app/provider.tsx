"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from "@/components/ThemeProvider";

const _queryClient = new QueryClient();

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      {/* next-theme */}
      <ThemeProvider attribute="class" defaultTheme="light">
        {/* react-query */}
        <QueryClientProvider client={_queryClient}>
          {children}
          {/* react-query-devtools */}
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
