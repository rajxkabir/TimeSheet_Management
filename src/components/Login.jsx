import { useState } from "react";
import { Button } from "./ui";
import { Input } from "./ui";
import { ArrowRight, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password) {
            // 🔥 Later replace with API call
            navigate("/dashboard"); // ✅ redirect
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">

            {/* Card */}
            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-8">

                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center mb-3">
                        <Lock className="w-5 h-5 text-background" />
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

                    {/* Username */}
                    <div className="space-y-2">
                        <label className="text-sm text-foreground">Username</label>
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

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-sm text-foreground">Password</label>
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

                    {/* Options */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-muted-foreground">
                            <input type="checkbox" className="accent-accent" />
                            Remember me
                        </label>

                        <span className="text-accent cursor-pointer hover:underline">
                            Forgot password?
                        </span>
                    </div>

                    {/* Button */}
                    <Button type="submit" className="w-full gap-2">
                        Login
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                    Don’t have an account?{" "}
                    <span className="text-accent cursor-pointer hover:underline">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}