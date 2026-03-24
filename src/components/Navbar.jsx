import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Bell, Search, Menu, X, LogOut } from "lucide-react";
import { Button, Input, Avatar, AvatarFallback } from "./ui";

export function Navbar({ onMenuClick, isSidebarOpen, user = "John Doe" }) {
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();

    // 🔥 Get initials from username
    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };

    const handleLogout = () => {
        // 🔐 later: clear token/session
        navigate("/login");
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border/40 bg-background/80 backdrop-blur-xl">

            <div className="flex h-full items-center justify-between px-4 md:px-6">

                {/* Left */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuClick}
                        className="md:hidden"
                    >
                        {isSidebarOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </Button>

                    <div className="flex items-center gap-2">
                        <div className="flex w-8 h-8 items-center justify-center rounded-lg bg-foreground">
                            <Clock className="w-4 h-4 text-background" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">
                            Trackora
                        </span>
                    </div>
                </div>

                {/* Center Search */}
                <div className="hidden flex-1 max-w-md mx-8 md:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search projects, timesheets..."
                            className="pl-9 bg-secondary/50 border-0"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2">

                    {/* Mobile Search Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setSearchOpen(!searchOpen)}
                    >
                        <Search className="w-5 h-5" />
                    </Button>

                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
                    </Button>

                    {/* Avatar */}
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-secondary text-foreground text-sm">
                                {getInitials(user)}
                            </AvatarFallback>



                        </Avatar>
                    </Button>

                    {/* Logout */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleLogout}
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile Search */}
            {searchOpen && (
                <div className="absolute top-14 left-0 right-0 border-b border-border bg-background p-4 md:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search projects, timesheets..."
                            className="pl-9 bg-secondary/50 border-0"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </header>
    );
}