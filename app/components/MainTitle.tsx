import Link from "next/link";

import { cn } from "@/lib/utils";

type MainTitleProps = {
  className?: string;
};

export default function MainTitle({ className }: MainTitleProps) {
  return (
    <h1 className={cn(["text-2xl font-bold italic tracking-wide", className])}>
      <Link href="/">SP WIX</Link>
    </h1>
  );
}
