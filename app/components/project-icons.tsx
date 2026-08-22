import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Droplet,
  LineChart,
  Stethoscope,
  TrendingDown,
  Smartphone,
  BellRing,
  GitBranch,
} from "lucide-react";
import type { ProjectIcon, Track } from "../data";

const ICONS: Record<ProjectIcon, LucideIcon> = {
  activity: Activity,
  brain: Brain,
  droplet: Droplet,
  "line-chart": LineChart,
  stethoscope: Stethoscope,
  "trending-down": TrendingDown,
  smartphone: Smartphone,
  "bell-ring": BellRing,
  "git-branch": GitBranch,
};

const TRACK_COLOR: Record<Track, string> = {
  research: "var(--teal)",
  systems: "var(--orange)",
};

export function ProjectIconBadge({
  icon,
  track,
  size = 44,
  inverted = false,
  className = "",
}: {
  icon: ProjectIcon;
  track: Track;
  size?: number;
  inverted?: boolean;
  className?: string;
}) {
  const Icon = ICONS[icon];
  const color = inverted ? "var(--paper)" : TRACK_COLOR[track];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-300 ease-out group-hover:rotate-[18deg] ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: inverted ? "rgba(244,242,236,0.55)" : color,
        color,
      }}
    >
      <Icon size={Math.round(size * 0.46)} strokeWidth={2.25} />
    </span>
  );
}
