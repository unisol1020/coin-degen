import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-1 flex-col items-center pt-10">
      <div className="container">{children}</div>
    </main>
  );
}
