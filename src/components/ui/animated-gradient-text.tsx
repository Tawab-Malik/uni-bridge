import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit items-center justify-center text-3xl md:text-4xl xl:text-5xl font-bold",
        className,
      )}
    >
      {/* Gradient Text with Animation */}
      <span
        className="bg-gradient-to-r from-red-500  to-[#9c40ff] via-[#ffaa40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-text transition-all duration-500 ease-in-out hover:scale-105"
      >
        {children}
      </span>

      {/* Keyframes for Gradient Animation */}
      <style jsx>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-text {
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
