"use client";

import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const notify = () => toast.success("Here is your toast.");

  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
