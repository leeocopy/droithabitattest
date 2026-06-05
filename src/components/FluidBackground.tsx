"use client";

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background-main pointer-events-none">
      <div
        className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-green/12 blur-[130px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-accent-slate/20 blur-[120px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-text-primary/8 blur-[160px]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
