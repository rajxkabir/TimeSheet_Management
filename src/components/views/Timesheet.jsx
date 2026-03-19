import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Play, Square } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "../ui";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const initialEntries = [
  {
    id: 1,
    project: "Website Redesign",
    task: "Homepage UI Design",
    hours: [3.5, 4.0, 2.5, 3.0, 2.0, 0, 0],
    total: 15,
    color: "bg-accent",
  },
  {
    id: 2,
    project: "Mobile App",
    task: "API Integration",
    hours: [2.0, 3.5, 4.0, 2.5, 3.0, 0, 0],
    total: 15,
    color: "bg-green-500",
  },
  {
    id: 3,
    project: "API Development",
    task: "Authentication Module",
    hours: [3.0, 0, 2.5, 2.0, 2.5, 0, 0],
    total: 10,
    color: "bg-cyan-500",
  },
];

export function Timesheet() {
  const [entries, setEntries] = useState(initialEntries);
  const [currentWeek] = useState("Mar 10 - Mar 16, 2026");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerTime] = useState("00:00:00");

  const weekTotals = weekDays.map((_, dayIndex) =>
    entries.reduce((sum, entry) => sum + entry.hours[dayIndex], 0)
  );
  const grandTotal = entries.reduce((sum, entry) => sum + entry.total, 0);

  const updateHours = (entryId, dayIndex, value) => {
    const hours = parseFloat(value) || 0;
    setEntries(
      entries.map((entry) => {
        if (entry.id === entryId) {
          const newHours = [...entry.hours];
          newHours[dayIndex] = hours;
          return {
            ...entry,
            hours: newHours,
            total: newHours.reduce((sum, h) => sum + h, 0),
          };
        }
        return entry;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Timesheet</h1>
          <p className="mt-1 text-muted-foreground">
            Track and manage your work hours
          </p>
        </div>

        {/* Timer Card */}
        <Card className="border-0 bg-foreground text-background shadow-lg">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="text-center">
              <p className="text-2xl font-mono font-semibold">{timerTime}</p>
              <p className="text-xs opacity-60">Current Session</p>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="w-12 h-12 rounded-full bg-background text-foreground hover:bg-background/90"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
            >
              {isTimerRunning ? (
                <Square className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Week Navigation */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-base font-medium">Weekly View</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="min-w-[180px] text-center text-sm font-medium">
              {currentWeek}
            </span>
            <Button variant="ghost" size="icon-sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 pl-6 w-[250px] text-sm font-medium text-muted-foreground">
                    Project / Task
                  </th>
                  {weekDays.map((day, idx) => (
                    <th key={day} className="text-center p-4 w-20">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">{day}</span>
                        <span className="text-sm">{10 + idx}</span>
                      </div>
                    </th>
                  ))}
                  <th className="text-center p-4 w-20 pr-6 text-sm font-medium text-muted-foreground">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} className="border-b border-border group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${entry.color}`}
                        />
                        <div className="min-w-0">
                          <p className="font-medium truncate">{entry.project}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {entry.task}
                          </p>
                        </div>
                      </div>
                    </td>
                    {entry.hours.map((hours, dayIdx) => (
                      <td key={dayIdx} className="text-center p-1">
                        <Input
                          type="number"
                          step="0.5"
                          min="0"
                          max="24"
                          value={hours || ""}
                          onChange={(e) =>
                            updateHours(entry.id, dayIdx, e.target.value)
                          }
                          className="w-16 mx-auto text-center border-0 bg-secondary/50 focus:bg-secondary"
                          placeholder="-"
                        />
                      </td>
                    ))}
                    <td className="text-center p-4 pr-6">
                      <span className="font-semibold">{entry.total}h</span>
                    </td>
                  </tr>
                ))}

                {/* Totals Row */}
                <tr className="bg-secondary/30 font-medium">
                  <td className="p-4 pl-6">
                    <Button variant="ghost" size="sm" className="gap-2 -ml-2">
                      <Plus className="w-4 h-4" />
                      Add Row
                    </Button>
                  </td>
                  {weekTotals.map((total, idx) => (
                    <td key={idx} className="text-center p-4">
                      {total > 0 ? `${total}h` : "-"}
                    </td>
                  ))}
                  <td className="text-center p-4 pr-6">
                    <span className="text-lg font-semibold">{grandTotal}h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Billable Hours</p>
            <p className="mt-1 text-2xl font-semibold">35h</p>
            <p className="text-xs text-muted-foreground">87.5% of total</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Weekly Target</p>
            <p className="mt-1 text-2xl font-semibold">40h</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
              <div className="h-full w-[87%] rounded-full bg-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Overtime</p>
            <p className="mt-1 text-2xl font-semibold">0h</p>
            <p className="text-xs text-muted-foreground">On track this week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}