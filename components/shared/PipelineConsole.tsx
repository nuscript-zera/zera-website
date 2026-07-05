import React from "react";

export type ConsoleStage = {
  num: string;
  icon: React.ElementType;
  label: string;
  tag: string;
  desc: string;
};

export default function PipelineConsole({
  command,
  stages,
}: {
  command: string;
  stages: ConsoleStage[];
}) {
  return (
    <div
      className="rounded-2xl border bg-white p-5 shadow-[0_12px_50px_-12px_rgba(15,23,42,0.14)]"
      style={{ borderColor: "#E2E6EB" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "#E2E6EB" }}>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {command}
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Running
        </span>
      </div>

      {/* Stages */}
      <ol className="relative mt-5">
        {/* Continuous rail */}
        <span
          aria-hidden="true"
          className="absolute left-[1.05rem] top-3 bottom-3 w-px bg-gradient-to-b from-[#B2C7FE] to-[#E2E6EB]"
        />
        {stages.map((s) => (
          <li key={s.num} className="relative flex gap-4 pb-3 last:pb-0">
            <span
              className="relative z-10 flex h-[2.1rem] w-[2.1rem] shrink-0 items-center justify-center rounded-lg border"
              style={{
                backgroundColor: "#F6F8FF",
                borderColor: "#B2C7FE",
                color: "oklch(0.488 0.217 264)",
              }}
            >
              <s.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
            </span>
            <div
              className="min-w-0 flex-1 rounded-xl border px-4 py-3"
              style={{ backgroundColor: "#F3F6FA", borderColor: "#E2E6EB" }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[1.05rem] text-slate-400 tabular-nums">{s.num}</span>
                  <span className="text-[1.05rem] font-bold text-foreground">{s.label}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary shrink-0">
                  {s.tag}
                </span>
              </div>
              <p className="mt-0.5 text-[0.82rem] leading-snug text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
