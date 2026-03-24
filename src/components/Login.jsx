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

    // ✅ THEME (PERSISTENT)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const navigate = useNavigate();

    // APPLY THEME
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

    // LOCK SCROLL
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
        <div className="min-h-screen bg-background">

            {/* ✅ NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
                <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                            <Clock className="w-5 h-5 text-background" />
                        </div>
                        <span className="font-semibold text-foreground group-hover:text-accent transition">
                            Trackora
                        </span>
                    </div>

                    {/* THEME TOGGLE */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md transition-all duration-300 hover:bg-muted hover:scale-110 active:scale-95"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </nav>

            {/* ✅ MAIN CONTENT (FIXED CENTER) */}
            <div className="flex justify-center pt-24 px-6">

                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 -z-10 flex justify-center">
                    <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full translate-x-32 translate-y-20" />
                </div>

                {/* LOGIN CARD */}
                <div className="relative w-full max-w-sm p-7 rounded-2xl border border-border bg-card/70 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-1">

                    {/* TOP LINE */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl" />

                    {/* HEADER */}
                    <div className="flex flex-col items-center mb-8 mt-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-accent" />
                        </div>

                        <h2 className="text-2xl font-bold text-foreground">
                            Welcome Back 👋
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Login to continue to Trackora
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* USERNAME */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Username</label>

                            <div className="relative group">
                                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition" />

                                <Input
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`pl-10 
                                    ${username ? "bg-background dark:bg-muted/60 ring-1 ring-accent/20" : "bg-background/80 dark:bg-muted/40"}
                                    border border-border dark:border-white/10
                                    text-foreground placeholder:text-muted-foreground
                                    backdrop-blur-md

                                    focus:ring-2 focus:ring-accent
                                    focus:bg-background dark:focus:bg-muted/60

                                    hover:bg-background/90 dark:hover:bg-muted/50

                                    transition`}
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>

                            <div className="relative group">
                                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground group-focus-within:text-accent transition" />

                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`pl-10 pr-10 
                                    ${password ? "bg-background dark:bg-muted/60 ring-1 ring-accent/20" : "bg-background/80 dark:bg-muted/40"}
                                    border border-border dark:border-white/10
                                    text-foreground placeholder:text-muted-foreground
                                    backdrop-blur-md

                                    focus:ring-2 focus:ring-accent
                                    focus:bg-background dark:focus:bg-muted/60

                                    hover:bg-background/90 dark:hover:bg-muted/50

                                    transition`}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-muted-foreground hover:text-accent transition"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* FORGOT */}
                        <div className="flex justify-end">
                            <span className="text-sm text-accent cursor-pointer hover:underline">
                                Forgot password?
                            </span>
                        </div>

                        {/* BUTTON */}
                        <Button
                            type="submit"
                            className="w-full gap-2 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                        >
                            Login
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>

                    {/* FOOTER */}
                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Don’t have an account?{" "}
                        <span className="text-accent font-medium cursor-pointer hover:underline">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}