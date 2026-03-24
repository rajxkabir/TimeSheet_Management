import { Clock, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui";

export function LandingNavbar({ handleStart }) {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const navigate = useNavigate();

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                        <Clock className="w-5 h-5 text-background" />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-accent transition">
                        Trackora
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        className="relative text-sm text-muted-foreground transition duration-300 hover:text-foreground
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
  after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Features
                    </a>
                    <a
                        href="#benefits"
                        className="relative text-sm text-muted-foreground transition duration-300 hover:text-foreground
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
  after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Benefits
                    </a>

                    <a
                        href="#pricing"
                        className="relative text-sm text-muted-foreground transition duration-300 hover:text-foreground
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
  after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Pricing
                    </a>

                    <a
                        href="#about"
                        className="relative text-sm text-muted-foreground transition duration-300 hover:text-foreground
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
  after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About
                    </a>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-4">

                    <Button
                        onClick={handleStart}
                        size="sm"
                        className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                        Login 🚀
                    </Button>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md transition-all duration-300 hover:bg-muted hover:scale-110 active:scale-95"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>

                {/* Mobile Button */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-background border-t border-border">
                    <a href="#features" className="block text-sm text-muted-foreground">Features</a>
                    <a href="#pricing" className="block text-sm text-muted-foreground">Pricing</a>
                    <a href="#about" className="block text-sm text-muted-foreground">About</a>

                    <button onClick={() => navigate("/login")} className="block w-full text-left text-sm">
                        Login
                    </button>

                    <Button onClick={handleStart} className="w-full">
                        Get Started 🚀
                    </Button>

                    <button onClick={toggleTheme} className="flex items-center gap-2 text-sm">
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        Theme
                    </button>
                </div>
            )}
        </nav>
    );
}