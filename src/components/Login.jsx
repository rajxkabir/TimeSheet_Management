import { useState, useEffect } from "react";
import { Button } from "./ui";
import { Input } from "./ui";
import { ArrowRight, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Hide scrollbar ONLY for this page
    useEffect(() => {
        // Save the original overflow to restore it later
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";

        return () => {
            // Restore original overflow when moving to Dashboard/other pages
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
        /* 'fixed inset-0' is the safest way to ensure NO scroll without 
           changing your global index.css body settings */
        <div className="fixed inset-0 flex items-center justify-center bg-background px-6 overflow-hidden">

            {/* Login Card - Using your CSS variable 'bg-card' */}
            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-8">

                {/* Logo & Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3">
                        <Lock className="w-5 h-5 text-primary-foreground" />
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground">
                        Welcome Back
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Login to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <span className="text-sm text-accent cursor-pointer hover:underline font-medium">
                            Forgot password?
                        </span>
                    </div>

                    <Button type="submit" className="w-full gap-2 py-6 text-base">
                        Login
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-8">
                    Don’t have an account?{" "}
                    <span className="text-accent font-medium cursor-pointer hover:underline">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}