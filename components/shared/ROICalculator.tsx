"use client";

import React, { useState } from "react";
import { Users, Banknote, TrendingUp } from "lucide-react";

/* Indian-format currency: crore / lakh / grouped rupees. */
const fmtINR = (n: number): string => {
  if (!isFinite(n) || n <= 0) return "₹0";
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

const fmtNum = (n: number): string =>
  !isFinite(n) || n < 0 ? "0" : Math.round(n).toLocaleString("en-IN");

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[0.8rem] font-medium text-foreground mb-1.5">
        {label}
      </span>
      <div className="flex items-center rounded-xl border border-[#E2E6EB] bg-white focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 transition-shadow">
        {prefix && (
          <span className="pl-3.5 text-[0.9rem] text-muted-foreground select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="numeric"
          min={min}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(Number.isFinite(v) ? Math.max(min, v) : 0);
          }}
          className="w-full bg-transparent px-3.5 py-2.5 text-[0.95rem] text-foreground outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && (
          <span className="pr-3.5 text-[0.8rem] text-muted-foreground whitespace-nowrap select-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

export default function ROICalculator() {
  const [editors, setEditors] = useState(20);
  const [linesPerDay, setLinesPerDay] = useState(1200);
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [multiplier, setMultiplier] = useState(2);
  const [revenuePerLine, setRevenuePerLine] = useState(6.6);
  const [costPerEditor, setCostPerEditor] = useState(35000);

  const currentLines = editors * linesPerDay * daysPerMonth;
  const extraLines = currentLines * (multiplier - 1);
  const extraEditorEq = editors * (multiplier - 1);
  const extraBillableAnnual = extraLines * revenuePerLine * 12;
  const avoidedHiringAnnual = editors * (multiplier - 1) * costPerEditor * 12;

  const results = [
    {
      icon: TrendingUp,
      value: `+${fmtNum(extraLines)}`,
      unit: "lines / month",
      label: "Added monthly capacity",
      note: `≈ ${extraEditorEq.toFixed(1)} editors’ worth of output, with no hiring`,
    },
    {
      icon: Banknote,
      value: fmtINR(extraBillableAnnual),
      unit: "/ year",
      label: "Added billable capacity",
      note: "If you grow into the capacity with billable work",
    },
    {
      icon: Users,
      value: fmtINR(avoidedHiringAnnual),
      unit: "/ year",
      label: "Hiring cost avoided",
      note: "If you hold the team flat and absorb today’s volume leaner",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#E2E6EB] bg-white shadow-xl shadow-black/5 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* Inputs */}
        <div className="p-7 lg:p-9 border-b lg:border-b-0 lg:border-r border-[#E2E6EB]">
          <p className="text-[0.7rem] font-mono font-semibold uppercase tracking-[0.18em] text-primary mb-6">
            Your operation
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField label="Production editors" value={editors} onChange={setEditors} min={1} />
            <NumberField label="Lines / editor / day" value={linesPerDay} onChange={setLinesPerDay} min={1} />
            <NumberField label="Working days / month" value={daysPerMonth} onChange={setDaysPerMonth} min={1} />
            <NumberField label="Revenue per line" value={revenuePerLine} onChange={setRevenuePerLine} prefix="₹" min={0} />
            <div className="sm:col-span-2">
              <NumberField
                label="Fully-loaded cost / editor / month"
                value={costPerEditor}
                onChange={setCostPerEditor}
                prefix="₹"
                min={0}
              />
            </div>
          </div>

          {/* Multiplier slider */}
          <div className="mt-6">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[0.8rem] font-medium text-foreground">
                Output multiplier with Audryl
              </span>
              <span className="text-[0.95rem] font-bold text-primary tabular-nums">
                {multiplier.toFixed(1)}×
              </span>
            </div>
            <input
              type="range"
              min={1.5}
              max={2.5}
              step={0.1}
              value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
            <p className="mt-2 text-[0.72rem] text-muted-foreground leading-relaxed">
              Audryl is built to roughly double editor output. Dial this to model
              your own assumption.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="p-7 lg:p-9 bg-[#F3F6FA]">
          <p className="text-[0.7rem] font-mono font-semibold uppercase tracking-[0.18em] text-primary mb-6">
            Same team, with Audryl
          </p>

          <div className="space-y-3.5">
            {results.map((r) => (
              <div
                key={r.label}
                className="flex items-start gap-4 rounded-xl border border-[#E2E6EB] bg-white p-4"
              >
                <span
                  className="inline-flex items-center justify-center h-[2.1rem] w-[2.1rem] rounded-lg shrink-0 mt-0.5"
                  style={{ backgroundColor: "#F6F8FF", border: "1px solid #B2C7FE" }}
                >
                  <r.icon
                    className="h-[1.15rem] w-[1.15rem]"
                    strokeWidth={2}
                    style={{ color: "oklch(0.488 0.217 264)" }}
                  />
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl lg:text-[1.7rem] font-bold text-foreground leading-none tabular-nums">
                      {r.value.startsWith("₹") ? (
                        <>
                          <span className="text-[0.7em] font-semibold mr-0.5">₹</span>
                          {r.value.slice(1)}
                        </>
                      ) : (
                        r.value
                      )}
                    </span>
                    <span className="text-[0.8rem] text-muted-foreground">{r.unit}</span>
                  </div>
                  <p className="mt-1 text-[0.82rem] font-semibold text-foreground">{r.label}</p>
                  <p className="text-[0.75rem] text-muted-foreground leading-snug">{r.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[0.75rem] text-muted-foreground leading-relaxed">
            Grow into the capacity or hold the team flat — either way, more output
            on a flat team cost is what expands your margin.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-7 lg:px-9 py-4 border-t border-[#E2E6EB] bg-white">
        <p className="font-mono text-[0.65rem] text-muted-foreground leading-relaxed">
          Illustrative estimates from your inputs. Figures reflect gross
          throughput and assume added capacity is filled with billable work;
          platform investment is scoped during your pilot. Actual results vary by
          specialty, client specifications, and team adoption.
        </p>
      </div>
    </div>
  );
}
