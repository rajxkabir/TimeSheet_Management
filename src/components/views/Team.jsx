import { useState } from "react";
import { Plus, Search, Mail, Phone } from "lucide-react";
import { Button, Card, CardContent, Input, Avatar, AvatarFallback, Badge } from "../ui";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@company.com",
    phone: "+1 234 567 890",
    role: "Senior Developer",
    department: "Engineering",
    status: "active",
    hoursThisWeek: 38,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    phone: "+1 234 567 891",
    role: "UI/UX Designer",
    department: "Design",
    status: "active",
    hoursThisWeek: 42,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@company.com",
    phone: "+1 234 567 892",
    role: "Project Manager",
    department: "Management",
    status: "away",
    hoursThisWeek: 35,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@company.com",
    phone: "+1 234 567 893",
    role: "Frontend Developer",
    department: "Engineering",
    status: "active",
    hoursThisWeek: 40,
  },
];

const statusStyles = {
  active: "bg-green-500",
  away: "bg-orange-500",
  offline: "bg-gray-400",
};

export function Team() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
          <p className="mt-1 text-muted-foreground">
            View and manage team members
          </p>
        </div>
        <Button className="gap-2 rounded-xl">
          <Plus className="w-4 h-4" />
          Add Member
        </Button>
      </div>

      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search team members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 bg-card border-0"
        />
      </div>

      {/* Team Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((member) => (
          <Card
            key={member.id}
            className="border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-secondary text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-card ${statusStyles[member.status]}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="bg-secondary/50">
                  {member.department}
                </Badge>
                <span className="text-sm">
                  <span className="font-semibold">{member.hoursThisWeek}h</span>
                  <span className="text-muted-foreground"> this week</span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}