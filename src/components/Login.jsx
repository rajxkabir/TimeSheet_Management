import { useState, useEffect } from "react";
import { Button, Input } from "./ui";
import {
    ArrowRight,
    Lock,
    User,
    Eye,
    EyeOff,
    Clock,
    Moon,
    Sun
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            navigate("/dashboard");
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col selection:bg-accent/30">

            {/* ✅ NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

                    {/* ✨ FIXED LOGO (No Overlap) */}
                    <div className="flex items-center gap-2.5 cursor-pointer group w-32">
                        <div className="relative w-8 h-8 rounded-lg bg-foreground flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg shadow-foreground/10">
                            <Clock className="w-4 h-4 text-background" />
                            {/* Inner Glow for Icon */}
                            <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <span className="text-lg font-bold tracking-tight text-foreground transition-all duration-500 group-hover:text-blue-500">
                            Trackora
                        </span>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl border border-border bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-105 active:scale-95"
                    >
                        {theme === "dark" ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} className="text-slate-700" />}
                    </button>
                </div>
            </nav>

            {/* ✅ MAIN CONTAINER - FIXED CENTERED */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 relative">

                {/* BACKGROUND AMBIENCE */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full" />
                </div>

                {/* ✅ GLOWING FORM CARD */}
                <div className="group relative w-full max-w-[400px]">
                    {/* External Glow Trail (Matches Landing Page) */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[30px] blur opacity-0 group-hover:opacity-20 transition duration-500" />

                    <div className="relative w-full p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-500">

                        <div className="flex flex-col items-center mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 ring-1 ring-accent/20">
                                <Lock className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">
                                Welcome Back
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1 text-center">
                                Enter your details to access your account
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest ml-1">Username</label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className={"pl-10 h-11 bg-background/50 border-border/60 focus:ring-2 focus:ring-blue-500/20 transition-all " +
                                            (username ? "ring-1 ring-blue-500/20" : "")}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Password</label>
                                    <span className="text-[11px] text-blue-500 font-medium hover:underline cursor-pointer">Forgot?</span>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={"pl-10 pr-10 h-11 bg-background/50 border-border/60 focus:ring-2 focus:ring-blue-500/20 transition-all " +
                                            (password ? "ring-1 ring-blue-500/20" : "")}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 rounded-xl bg-foreground text-background font-bold hover:opacity-90 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                Sign In
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-border/50 text-center relative z-10">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <span className="text-foreground font-bold hover:text-blue-500 cursor-pointer transition-colors">
                                    Create one
                                </span>
                            </p>
                        </div>

                        {/* ✨ Animated Bottom Border Line */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}