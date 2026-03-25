import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../ui";
import { ArrowLeft, Sun, Moon, Clock, UserPlus } from "lucide-react";

export default function AddEmployeePage() {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const [form, setForm] = useState({
        EMP_FIRSTNAME: "",
        EMP_LASTNAME: "",
        EMP_GMAIL: "",
        EMP_PHONE: "",
        EMP_ROLE: "",
        EMP_SALARY: "",
        EMP_TEAM_ID: "",
        EMP_PROJECT_ID: "",
        EMP_LOCATION: "",
        EMP_CITY: "",
        EMP_STATE: "",
        EMP_COUNTRY: "",
        EMP_AADHAR: "",
        EMP_PAN: "",
        EMP_PASSWORD: "",
    });

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/40 bg-background/60 backdrop-blur-xl flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate(-1)}
                        className="rounded-full hover:bg-accent/20"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                            <Clock className="text-primary-foreground w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Trackora</span>
                    </div>
                </div>

                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
            </header>

            {/* MAIN CONTENT */}
            <main className="pt-28 pb-12 px-6 flex justify-center">
                <div className="w-full max-w-5xl relative">
                    {/* Background Decorative Glows */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

                    <form
                        onSubmit={handleSubmit}
                        className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-2xl p-8 md:p-12 shadow-2xl"
                    >
                        {/* Header Section */}
                        <div className="col-span-full mb-10">
                            <div className="flex items-center gap-3 mb-2">
                                <UserPlus className="w-6 h-6 text-primary" />
                                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                    Add New Employee
                                </h2>
                            </div>
                            <p className="text-muted-foreground">Fill in the details to onboard a new team member.</p>
                        </div>

                        {/* Input Grid */}
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            {Object.keys(form).map((key) => (
                                <div key={key} className="space-y-2 group">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1">
                                        {key.replace("EMP_", "").replace(/_/g, " ")}
                                    </label>
                                    <div className="relative">
                                        <Input
                                            name={key}
                                            type={key.includes("PASSWORD") ? "password" : "text"}
                                            placeholder={`Enter ${key.replace("EMP_", "").toLowerCase()}`}
                                            value={form[key]}
                                            onChange={handleChange}
                                            className="h-12 bg-background/40 border-border/60 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 rounded-xl relative z-10"
                                        />
                                        {/* Inner Glow Effect on Focus/Hover */}
                                        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-focus-within:opacity-100 blur-md transition-opacity pointer-events-none" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full flex justify-end mt-12 pt-6 border-t border-border/40">
                            <Button
                                type="submit"
                                className="h-12 px-10 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/25"
                            >
                                Save Employee Profile
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}