import React from "react";

export default function PostCard({ children }: { children: React.ReactNode }) {
  return <div className="bg-amber-200 border-2 p-2 m-4 shadow-md text-center">{children}</div>;
}
