import { Button } from "./ui";
import {
    Clock,
    BarChart3,
    Users,
    FolderKanban,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Globe,
} from "lucide-react";

export function LandingPage({ onGetStarted }) {
    const features = [
        {
            icon: Clock,
            title: "Time Tracking",
            description:
                "Track hours effortlessly with our intuitive weekly timesheet grid and real-time timer.",
        },
        {
            icon: FolderKanban,
            title: "Project Management",
            description:
                "Organize work by projects with progress tracking, budgets, and team assignments.",
        },
        {
            icon: Users,
            title: "Team Overview",
            description:
                "Monitor team capacity, availability, and workload distribution at a glance.",
        },
        {
            icon: BarChart3,
            title: "Detailed Reports",
            description:
                "Generate comprehensive reports with visual analytics and export capabilities.",
        },
    ];

    const benefits = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for speed and responsiveness",
        },
        {
            icon: Shield,
            title: "Secure & Private",
            description: "Enterprise-grade security for your data",
        },
        {
            icon: Globe,
            title: "Work Anywhere",
            description: "Access from any device, anytime",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                            <Clock className="w-5 h-5 text-background" />
                        </div>
                        <span className="font-semibold text-foreground">Trackora</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                            Features
                        </a>
                        <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground">
                            Benefits
                        </a>
                        <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                            Pricing
                        </a>
                    </div>

                    <Button onClick={onGetStarted} size="sm">
                        Get Started
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Now with real-time collaboration
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
                        Time tracking,
                        <br />
                        <span className="text-muted-foreground">simplified.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        The modern way to manage timesheets, track projects, and understand
                        where your team's time goes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={onGetStarted} className="gap-2 px-8">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                        <Button size="lg" variant="outline">
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                        <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {[
                                    { label: "Hours This Week", value: "32.5h" },
                                    { label: "Active Projects", value: "8" },
                                    { label: "Team Members", value: "12" },
                                    { label: "Tasks Completed", value: "47" },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-background p-4 rounded-xl border">
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                        <p className="text-xl font-semibold">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-20 px-6 bg-muted/30">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {features.map((f) => (
                        <div key={f.title} className="bg-card p-8 rounded-2xl border">
                            <f.icon className="mb-4 w-6 h-6" />
                            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                            <p className="text-muted-foreground">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {benefits.map((b) => (
                        <div key={b.title} className="text-center">
                            <b.icon className="mx-auto mb-4 w-7 h-7" />
                            <h3 className="font-semibold">{b.title}</h3>
                            <p className="text-muted-foreground">{b.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 px-6 bg-muted/30">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

                    <div className="bg-card p-8 rounded-2xl border">
                        <h3 className="text-lg font-semibold mb-2">Free</h3>
                        <p className="mb-4 text-muted-foreground">Perfect for individuals</p>
                        <p className="text-3xl font-semibold mb-6">$0/month</p>

                        <Button onClick={onGetStarted} className="w-full">
                            Get Started
                        </Button>
                    </div>

                    <div className="bg-foreground text-background p-8 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">Pro</h3>
                        <p className="mb-4 text-background/70">For teams</p>
                        <p className="text-3xl font-semibold mb-6">$12/user</p>

                        <Button onClick={onGetStarted} variant="secondary" className="w-full">
                            Start Free Trial
                        </Button>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <Button size="lg" onClick={onGetStarted} className="gap-2 px-8">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
                © 2024 Trackora. All rights reserved.
            </footer>
        </div>
    );
}