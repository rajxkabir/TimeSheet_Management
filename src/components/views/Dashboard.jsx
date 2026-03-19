import { Clock, TrendingUp, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";

const stats = [
  {
    title: "Hours This Week",
    value: "32.5",
    change: "+2.5h from last week",
    icon: Clock,
  },
  {
    title: "Active Projects",
    value: "8",
    change: "3 due this week",
    icon: Target,
  },
  {
    title: "Billable Hours",
    value: "28h",
    change: "86% billable rate",
    icon: TrendingUp,
  },
  {
    title: "Days Worked",
    value: "4/5",
    change: "1 day remaining",
    icon: Calendar,
  },
];

const weeklyData = [
  { day: "Mon", hours: 8.5 },
  { day: "Tue", hours: 7.5 },
  { day: "Wed", hours: 9.0 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 0 },
];

const recentEntries = [
  { project: "Website Redesign", task: "Homepage UI", hours: 3.5, date: "Today" },
  { project: "Mobile App", task: "API Integration", hours: 4.0, date: "Today" },
  { project: "API Development", task: "Authentication", hours: 2.5, date: "Yesterday" },
  { project: "Website Redesign", task: "Dashboard", hours: 5.0, date: "Yesterday" },
];

export function Dashboard() {
  const maxHours = Math.max(...weeklyData.map((d) => d.hours));

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back. Here's your weekly overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </div>
                <div className="rounded-xl bg-secondary p-3">
                  <stat.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Hours Chart */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Weekly Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48 pt-4">
              {weeklyData.map((day) => (
                <div
                  key={day.day}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="relative w-full flex items-end justify-center h-36">
                    <div
                      className="w-full max-w-12 rounded-t-lg bg-foreground/10 transition-all hover:bg-foreground/20"
                      style={{
                        height: `${(day.hours / maxHours) * 100}%`,
                        minHeight: day.hours > 0 ? "8px" : "0",
                      }}
                    >
                      {day.hours > 0 && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground">
                          {day.hours}h
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Recent Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEntries.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{entry.project}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {entry.task}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold">{entry.hours}h</p>
                    <p className="text-xs text-muted-foreground">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}