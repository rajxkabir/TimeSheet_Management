import { useState } from "react";
import {
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    ArrowRight,
} from "lucide-react";

export function Footer() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        reason: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let err = {};

        if (!/^[A-Za-z ]+$/.test(form.name)) {
            err.name = "Only alphabets allowed";
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/.test(form.email)) {
            err.email = "Lowercase email ending with .com";
        }

        if (!/^[0-9]{10}$/.test(form.number)) {
            err.number = "Enter valid 10 digit number";
        }

        if (!form.reason) err.reason = "Select a reason";

        if (form.message.length < 10) {
            err.message = "Minimum 10 characters required";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Submitted ✅");

            // ✅ Reset form after submit
            setForm({
                name: "",
                email: "",
                number: "",
                reason: "",
                message: "",
            });
        }
    };

    return (
        <footer className="border-t bg-muted/30 py-16 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {/* ================= LEFT ================= */}
                <div className="space-y-6">

                    {/* Logo + Tagline */}
                    <div>
                        <h2 className="text-2xl font-bold">Trackora</h2>
                        <p className="text-muted-foreground text-sm mt-2">
                            Smart time tracking for modern teams 🚀
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="#features" className="hover:text-accent transition">Features</a>
                        <a href="#pricing" className="hover:text-accent transition">Pricing</a>
                        <a href="#about" className="hover:text-accent transition">About</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent/20 transition">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent/20 transition">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-lg bg-background hover:bg-accent/20 transition">
                            <Twitter size={18} />
                        </a>
                        <a
                            href="mailto:trackora@gmail.com"
                            className="p-2 rounded-lg bg-background hover:bg-accent/20 transition"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    {/* Extra Line */}
                    <p className="text-xs text-muted-foreground">
                        Built with ❤️ for productivity lovers.
                    </p>
                </div>

                {/* ================= RIGHT (FORM CARD) ================= */}
                <div className="group bg-card p-6 rounded-2xl border shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

                    <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

                    <form onSubmit={handleSubmit} className="space-y-3">

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 rounded border bg-background focus:ring-2 focus:ring-accent outline-none"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full p-2 rounded border bg-background focus:ring-2 focus:ring-accent outline-none"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-2 rounded border bg-background focus:ring-2 focus:ring-accent outline-none"
                            value={form.number}
                            onChange={(e) => setForm({ ...form, number: e.target.value })}
                        />
                        {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}

                        <select
                            className="w-full p-2 rounded border bg-background focus:ring-2 focus:ring-accent outline-none"
                            value={form.reason}
                            onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        >
                            <option value="">Select Reason</option>
                            <option>General Query</option>
                            <option>Bug Report</option>
                            <option>Pricing</option>
                            <option>Support</option>
                        </select>
                        {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}

                        <textarea
                            placeholder="Message"
                            rows="3"
                            className="w-full p-2 rounded border bg-background focus:ring-2 focus:ring-accent outline-none"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Submit <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>

            </div>

            {/* ================= BOTTOM ================= */}
            <div className="mt-12 text-center text-sm text-muted-foreground">
                © 2026 Trackora. All rights reserved.
            </div>

        </footer>
    );
}