"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useFetchByQuery } from "@/hooks/useFetch";
import request from "@/lib/request";

export default function Home() {
  const { refetch } = useFetchByQuery({
    enabled: false,
    queryKey: ["signIn"],
    queryFn: () => request.get("/api/signIn"),
  });

  const notify = async () => {
    await refetch();
  };

  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <ThemeSwitcher />
    </div>
  );
}
