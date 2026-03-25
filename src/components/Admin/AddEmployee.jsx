import { useState } from "react";
import { Button, Input } from "../ui";
import { Navbar } from "../Navbar";

export default function AddEmployeePage() {
    const [form, setForm] = useState({
        EMP_FIRSTNAME: "", EMP_LASTNAME: "", EMP_GMAIL: "",
        EMP_PHONE: "", EMP_ROLE: "", EMP_SALARY: "",
        EMP_COUNTRY: "", EMP_STATE: "",
        EMP_CITY: "",  
        EMP_AADHAR: "", EMP_PAN: "", EMP_PASSWORD: "",
    });

    // Options for dropdowns
    const roles = ["Developer", "Tester", "Manager", "TeamLead", "HR"];
    const teamIds = Array.from({ length: 9 }, (_, i) => 1001 + i); // 1001 to 1009
    const projectIds = Array.from({ length: 9 }, (_, i) => 5001 + i); // 5001 to 5009

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar user="Admin" />

            <div className="max-w-7xl mx-auto pt-2 px-6 pb-8">
                <div className="mb-6">
                    <h1 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent px-1">
                        Add Employee
                    </h1>
                    <p className="mt-1 text-muted-foreground">
                        Create a new profile and assign initial projects.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="relative group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 shadow-sm transition-all"
                >
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Object.keys(form).map((key) => {
                            const label = key.replace("EMP_", "").replace(/_/g, " ");

                            // Check if the current field should be a dropdown
                            const isRole = key === "EMP_ROLE";
                            const isTeam = key === "EMP_TEAM_ID";
                            const isProject = key === "EMP_PROJECT_ID";

                            return (
                                <div key={key} className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">
                                        {label}
                                    </label>

                                    {isRole || isTeam || isProject ? (
                                        <select
                                            name={key}
                                            value={form[key]}
                                            onChange={handleChange}
                                            className="w-full h-10 px-3 rounded-md bg-background/50 border border-border/50 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none"
                                        >
                                            <option value="">Select {label.toLowerCase()}</option>
                                            {isRole && roles.map(r => <option key={r} value={r}>{r}</option>)}
                                            {isTeam && teamIds.map(id => <option key={id} value={id}>{id}</option>)}
                                            {isProject && projectIds.map(id => <option key={id} value={id}>{id}</option>)}
                                        </select>
                                    ) : (
                                        <Input
                                            name={key}
                                            value={form[key]}
                                            onChange={handleChange}
                                            type={key.includes("PASSWORD") ? "password" : "text"}
                                            placeholder={`Enter ${label.toLowerCase()}`}
                                            className="bg-background/50 border-border/50 focus:ring-2 focus:ring-accent transition-all"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-end mt-10 pt-6 border-t border-border/50">
                        <Button
                            type="submit"
                            className="px-10 py-6 rounded-xl bg-gradient-to-br from-accent to-accent/80 hover:scale-105 transition-transform shadow-lg"
                        >
                            Save Employee Profile
                        </Button>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
                </form>
            </div>
        </div>
    );
}