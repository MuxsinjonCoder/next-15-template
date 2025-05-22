import { Card } from "@/components/ui/card";

const colorPairs = [
  ["primary", "primary-foreground"],
  ["primary-foreground", "primary"],
  ["background", "foreground"],
  ["foreground", "sidebar-primary-foreground"],
  ["card", "card-foreground"],
  ["card-foreground", "card"],
  ["popover", "popover-foreground"],
  ["popover-foreground", "popover"],
  ["secondary", "secondary-foreground"],
  ["secondary-foreground", "secondary"],
  ["muted", "muted-foreground"],
  ["muted-foreground", "muted"],
  ["accent", "accent-foreground"],
  ["accent-foreground", "accent"],
  ["destructive", "primary-foreground"],
  ["border", "foreground"],
  ["input", "foreground"],
  ["ring", "foreground"],
  ["chart-1", "primary"],
  ["chart-2", "primary"],
  ["chart-3", "primary"],
  ["chart-4", "foreground"],
  ["chart-5", "foreground"],
  ["sidebar", "sidebar-foreground"],
  ["sidebar-foreground", "sidebar"],
  ["sidebar-primary", "sidebar-primary-foreground"],
  ["sidebar-primary-foreground", "sidebar-primary"],
  ["sidebar-accent", "sidebar-accent-foreground"],
  ["sidebar-accent-foreground", "sidebar-accent"],
  ["sidebar-border", "foreground"],
  ["sidebar-ring", "foreground"],
];

export default function ToolsPage() {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {colorPairs.map(([bg, text]) => (
        <Card
          key={bg}
          className={`bg-${bg} text-${text} text-center font-bold p-4 capitalize`}
        >
          {bg}
        </Card>
      ))}
    </div>
  );
}
