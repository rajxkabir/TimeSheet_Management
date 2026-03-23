import { useState } from "react";
import { Button } from "./ui";
import { Input } from "./ui";
import { ArrowRight, Lock, User } from "lucide-react";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password) {
            onLogin(); // 🔥 go to dashboard
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-8">

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

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-2">
                        <label className="text-sm text-foreground">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-foreground">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full gap-2">
                        Login
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </div>
    );
}