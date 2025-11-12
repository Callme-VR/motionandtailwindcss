import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Containers({ children, className }: ContainerProps) {
  return <div className={cn("max-w-5xl mx-auto bg-white dark:bg-black w-full", className)}>{children}</div>;
}
