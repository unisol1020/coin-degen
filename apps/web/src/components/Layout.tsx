import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <div className="border-grid flex flex-1 flex-col">{children}</div>
    </div>
  );
}
