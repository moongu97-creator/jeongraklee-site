import { cvTimeline, type TimelineLane } from "@/data/timeline";
import { cn } from "@/lib/utils";

const RANGE_START = 2015;
const RANGE_END = 2027;
const RANGE = RANGE_END - RANGE_START;

const YEAR_TICKS = [2015, 2017, 2019, 2021, 2023, 2025, 2027];

type LaneSpec = {
  key: TimelineLane;
  label: string;
  barClass: string;
  rows: number;
};

const LANES: LaneSpec[] = [
  { key: "education", label: "Education", barClass: "bg-brand-primary", rows: 1 },
  { key: "research", label: "Research", barClass: "bg-tag-hybrid", rows: 2 },
  { key: "industry", label: "Industry", barClass: "bg-tag-photonics", rows: 1 },
];

const yearToPercent = (year: number) =>
  ((year - RANGE_START) / RANGE) * 100;

const endYear = (end: number | "present") =>
  end === "present" ? new Date().getFullYear() + 0.5 : end;

export function CvTimeline() {
  return (
    <figure className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-y-2">
        <h2 className="font-heading text-base font-semibold text-foreground md:text-lg">
          Career timeline at a glance
        </h2>
        <Legend />
      </figcaption>

      <div className="grid grid-cols-[80px_1fr] gap-3 md:grid-cols-[140px_1fr] md:gap-4">
        <div />
        <div className="relative h-5">
          {YEAR_TICKS.map((y) => (
            <span
              key={y}
              className="absolute top-0 -translate-x-1/2 font-mono text-[10px] text-muted-foreground md:text-xs"
              style={{ left: `${yearToPercent(y)}%` }}
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-1 space-y-3">
        {LANES.map((lane) => {
          const entries = cvTimeline.filter((e) => e.lane === lane.key);
          return (
            <div
              key={lane.key}
              className="grid grid-cols-[80px_1fr] gap-3 md:grid-cols-[140px_1fr] md:gap-4"
            >
              <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-muted-foreground md:text-sm">
                {lane.label}
              </div>
              <div className="relative">
                {YEAR_TICKS.map((y) => (
                  <div
                    key={y}
                    className="pointer-events-none absolute top-0 bottom-0 w-px bg-border/50"
                    style={{ left: `${yearToPercent(y)}%` }}
                  />
                ))}

                {Array.from({ length: lane.rows }).map((_, rowIdx) => (
                  <div key={rowIdx} className="relative h-9">
                    {entries
                      .filter((e) => (e.row ?? 0) === rowIdx)
                      .map((e, i) => {
                        const left = yearToPercent(e.start);
                        const width =
                          yearToPercent(endYear(e.end)) - left;
                        const endLabel =
                          e.end === "present" ? "present" : e.end;
                        return (
                          <div
                            key={i}
                            className={cn(
                              "absolute top-1 bottom-1 overflow-hidden rounded-md px-2 text-xs font-medium text-white shadow-sm transition-transform hover:z-10",
                              lane.barClass,
                            )}
                            style={{
                              left: `${left}%`,
                              width: `${width}%`,
                              minWidth: "24px",
                            }}
                            title={`${e.name} (${e.start}–${endLabel})${e.detail ? ` — ${e.detail}` : ""}`}
                          >
                            <span className="flex h-full items-center truncate">
                              {e.name}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground md:text-xs">
      {LANES.map((l) => (
        <span key={l.key} className="inline-flex items-center gap-1.5">
          <span className={cn("h-2 w-2 rounded-sm", l.barClass)} />
          {l.label}
        </span>
      ))}
    </div>
  );
}
