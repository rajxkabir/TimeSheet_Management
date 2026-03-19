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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <Clock className="w-5 h-5 text-background" />
            </div>
            <span className="font-semibold text-foreground">Trackora</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
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
            where your team's time goes. Built for teams who value clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={onGetStarted} className="gap-2 px-8">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
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
            <div className="p-8 bg-gradient-to-b from-muted/30 to-transparent">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Hours This Week", value: "32.5h" },
                  { label: "Active Projects", value: "8" },
                  { label: "Team Members", value: "12" },
                  { label: "Tasks Completed", value: "47" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background rounded-xl p-4 border border-border"
                  >
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-background rounded-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground">Weekly Overview</h3>
                  <span className="text-sm text-muted-foreground">
                    Mar 11 - Mar 17
                  </span>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 55, 80, 70, 30, 0].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div
                        className="w-full bg-accent/20 rounded-t-md relative overflow-hidden"
                        style={{ height: `${height}%` }}
                      >
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-accent rounded-t-md"
                          style={{ height: "100%" }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Everything you need to manage time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and keep
              your team on track.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free, upgrade when you need more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Free
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfect for individuals
              </p>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-foreground">
                  $0
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 3 projects",
                  "Basic time tracking",
                  "Weekly reports",
                  "Mobile access",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" onClick={onGetStarted}>
                Get Started
              </Button>
            </div>
            {/* Pro Plan */}
            <div className="bg-foreground text-background rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                Popular
              </div>
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <p className="text-background/70 mb-6">For growing teams</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold">$12</span>
                <span className="text-background/70">/user/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited projects",
                  "Advanced analytics",
                  "Team management",
                  "Priority support",
                  "API access",
                  "Custom integrations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="secondary"
                className="w-full"
                onClick={onGetStarted}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to take control of your time?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of teams who have transformed how they track and
            manage time.
          </p>
          <Button size="lg" onClick={onGetStarted} className="gap-2 px-8">
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <Clock className="w-5 h-5 text-background" />
            </div>
            <span className="font-semibold text-foreground">Timesheet</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            2024 Timesheet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}