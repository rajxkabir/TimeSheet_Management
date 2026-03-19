import {
  Clock,
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  Settings,
  Plus,
  ChevronRight,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui";

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "timesheet", name: "Timesheet", icon: Clock },
  { id: "projects", name: "Projects", icon: FolderKanban },
  { id: "team", name: "Team", icon: Users },
  { id: "reports", name: "Reports", icon: FileText },
];

const recentProjects = [
  { id: 1, name: "Website Redesign", color: "bg-accent" },
  { id: 2, name: "Mobile App", color: "bg-green-500" },
  { id: 3, name: "API Development", color: "bg-cyan-500" },
];

export function Sidebar({ isOpen, activeView, onViewChange }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={() => onViewChange(activeView)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border/40 bg-background transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* New Entry Button */}
          <div className="p-4">
            <Button className="w-full gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90">
              <Plus className="w-4 h-4" />
              New Entry
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3">
            <div className="mb-2">
              <span className="px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Menu
              </span>
            </div>
            {navigation.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  />
                  {item.name}
                  {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                </button>
              );
            })}
          </nav>

          {/* Recent Projects */}
          <div className="border-t border-border/40 p-4">
            <span className="mb-3 block px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Recent Projects
            </span>
            <div className="space-y-1">
              {recentProjects.map((project) => (
                <button
                  key={project.id}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                >
                  <span className={cn("w-2.5 h-2.5 rounded-full", project.color)} />
                  <span className="truncate">{project.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="border-t border-border/40 p-4">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}