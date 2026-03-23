import { Button } from "./ui";
import { useNavigate } from "react-router-dom";
import { Features } from "./Features";
import { LandingNavbar } from "./LandingNavbar";
import AboutImage from "../assets/About_Section.jpg";
import {
  Clock,
  BarChart3,
  Users,
  FolderKanban,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

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
      <LandingNavbar handleStart={handleStart} />

      {/* Content Wrapper */}
      <div className="pt-16">

        {/* ================= HERO ================= */}
              <section id="hero" className="relative pt-32 pb-24 px-6 text-center overflow-hidden">

                  {/* 🌈 Background Glow */}
                  <div className="absolute inset-0 -z-10 flex justify-center">
                      <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-[120px] rounded-full" />
                  </div>

                  <div className="max-w-4xl mx-auto">

                      {/* 🔥 Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-sm text-muted-foreground mb-6">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Built for modern teams
                      </div>

                      {/* 🧠 Headline */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                          Track time.
                          <br />
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                              Work smarter.
                          </span>
                      </h1>

                      {/* ✨ Description */}
                      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                          A simple yet powerful timesheet platform to manage projects, track productivity,
                          and help your team focus on what really matters.
                      </p>

                      {/* 🚀 CTA */}
                      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                          <Button
                              size="lg"
                              onClick={handleStart}
                              className="px-8 gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                          >
                              Get Started 🚀
                          </Button>

                          <Button
                              size="lg"
                              variant="outline"
                              className="transition-all duration-300 hover:scale-105"
                          >
                              Watch Demo
                          </Button>
                      </div>

                      {/* 📊 Social Proof */}
                      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                          <span>✨ 10,000+ users</span>
                          <span>🚀 Fast & reliable</span>
                          <span>🔒 Secure platform</span>
                      </div>

                  </div>
              </section>
        {/* ================= DASHBOARD PREVIEW ================= */}
      <section className="relative px-4 sm:px-6 pb-20 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
  </div>

  <div className="max-w-6xl mx-auto">

    <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">

      {/* Fake Browser Bar */}
      <div className="bg-muted/40 px-4 py-3 border-b flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {[
            { label: "Hours", value: "32.5h" },
            { label: "Projects", value: "8" },
            { label: "Team", value: "12" },
            { label: "Tasks", value: "47" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative p-5 rounded-xl border bg-background/70 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-lg hover:border-accent"
            >

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-cyan-400/10 blur-xl" />

              <p className="text-xs sm:text-sm text-muted-foreground mb-1 relative z-10">
                {stat.label}
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground relative z-10 group-hover:text-accent transition">
                {stat.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>

  </div>
</section>

        {/* ================= FEATURES ================= */}
        <section id="features" className="py-20 px-6 bg-muted/30">
          <Features />
        </section>

        {/* ================= BENEFITS ================= */}
              <section id="benefits" className="relative py-24 px-4 sm:px-6 overflow-hidden">

                  {/* 🌈 Background Glow */}
                  <div className="absolute inset-0 -z-10 flex justify-center">
                      <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-[120px] rounded-full" />
                  </div>

                  {/* HEADER */}
                  <div className="max-w-6xl mx-auto text-center mb-20">

                     

                      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
                          Why teams choose
                          <br />
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                              Trackora
                          </span>
                      </h2>

                      <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                          Designed to boost productivity, reduce manual work, and help teams stay focused on what matters most.
                      </p>
                  </div>

                  {/* GRID */}
                  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                      {benefits.map((b) => (
                          <div
                              key={b.title}
                              className="group relative p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                          >

                              {/* ✨ Glow Overlay */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-xl" />

                              {/* ICON */}
                              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-5 group-hover:bg-accent/20 transition">
                                  <b.icon className="w-6 h-6 text-accent group-hover:scale-110 transition" />
                              </div>

                              {/* TITLE */}
                              <h3 className="relative z-10 text-lg font-semibold mb-2 group-hover:text-accent transition">
                                  {b.title}
                              </h3>

                              {/* DESCRIPTION */}
                              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                                  {b.description}
                              </p>

                              {/* 🔥 Bottom Line Animation */}
                              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500" />

                          </div>
                      ))}

                  </div>

              </section>

        {/* ================= PRICING ================= */}
              <section id="pricing" className="py-24 px-4 sm:px-6 bg-muted/30">

                  {/* HEADER */}
                  <div className="max-w-6xl mx-auto text-center mb-16">
                      <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm mb-4">
                          💰 Pricing
                      </div>

                      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                          Simple, transparent pricing
                      </h2>

                      <p className="text-muted-foreground max-w-2xl mx-auto">
                          Choose a plan that fits your workflow. Upgrade anytime as your team grows.
                      </p>
                  </div>

                  {/* PRICING GRID */}
                  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                      {/* PERSONAL */}
                      <div className="group p-8 rounded-2xl border bg-card text-foreground transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:bg-foreground hover:text-background">

                          <h3 className="text-xl font-semibold mb-2">Personal</h3>
                          <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-6">
                              Best for individuals getting started
                          </p>

                          <p className="text-4xl font-bold mb-6">$0<span className="text-sm">/month</span></p>

                          <ul className="space-y-3 text-sm mb-8">
                              <li>✔ Time tracking</li>
                              <li>✔ Weekly timesheets</li>
                              <li>✔ Basic reports</li>
                              <li>✔ Data export (CSV)</li>
                          </ul>

                          <Button
                              onClick={handleStart}
                              className="w-full transition group-hover:bg-background group-hover:text-foreground"
                          >
                              Get Started
                          </Button>
                      </div>

                      {/* TEAM (HIGHLIGHTED) */}
                      <div className="group p-8 rounded-2xl border-2 border-accent bg-accent/10 text-foreground transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:bg-foreground hover:text-background relative">

                          {/* Badge */}
                          <div className="absolute top-4 right-4 text-xs bg-accent text-white px-2 py-1 rounded">
                              Popular
                          </div>

                          <h3 className="text-xl font-semibold mb-2">Team</h3>
                          <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-6">
                              Perfect for small teams
                          </p>

                          <p className="text-4xl font-bold mb-6">$12<span className="text-sm">/user</span></p>

                          <ul className="space-y-3 text-sm mb-8">
                              <li>✔ Everything in Personal</li>
                              <li>✔ Team collaboration</li>
                              <li>✔ Advanced reports</li>
                              <li>✔ Project tracking</li>
                          </ul>

                          <Button
                              onClick={handleStart}
                              className="w-full transition group-hover:bg-background group-hover:text-foreground"
                          >
                              Start Free Trial
                          </Button>
                      </div>

                      {/* ORGANIZATION */}
                      <div className="group p-8 rounded-2xl border bg-card text-foreground transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:bg-foreground hover:text-background">

                          <h3 className="text-xl font-semibold mb-2">Organization</h3>
                          <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-6">
                              Best for large companies
                          </p>

                          <p className="text-4xl font-bold mb-6">$29<span className="text-sm">/user</span></p>

                          <ul className="space-y-3 text-sm mb-8">
                              <li>✔ Everything in Team</li>
                              <li>✔ Admin controls</li>
                              <li>✔ Custom workflows</li>
                              <li>✔ Priority support</li>
                          </ul>

                          <Button
                              onClick={handleStart}
                              className="w-full transition group-hover:bg-background group-hover:text-foreground"
                          >
                              Contact Sales
                          </Button>
                      </div>

                  </div>
              </section>

              {/* ================= ABOUT ================= */}
              <section id="about" className="py-24 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                      {/* Left Side - Image */}
                      <div className="flex justify-center md:justify-center">
                          <img
                              src={AboutImage}
                              alt="About Trackora"
                              className="h-[550px] w-full max-w-md object-cover rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                          />    
                          {/* Optional Glow */}
                          <div className="absolute -z-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-full blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                      </div>

                      {/* Right Side - Text Content */}
                      <div className="text-center md:text-left">
                          {/* Small Badge */}
                          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-semibold mb-4">
                              About Us
                          </div>

                          {/* Heading */}
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
                              Trackora — The smarter way to track time and productivity
                          </h2>

                          {/* Description */}
                          <p className="text-muted-foreground text-base sm:text-lg mb-6">
                              At Trackora, we believe that managing your time should be effortless, intuitive, and insightful.
                              Our platform helps individuals and teams track projects, monitor progress, and make data-driven decisions — all in one place.
                          </p>

                          {/* Feature Highlights */}
                          <div className="grid sm:grid-cols-2 gap-4 mb-8">
                              <div className="flex items-start gap-3">
                                  <span className="text-accent text-2xl">🚀</span>
                                  <p className="text-sm text-muted-foreground">Boost productivity with real-time tracking</p>
                              </div>
                              <div className="flex items-start gap-3">
                                  <span className="text-accent text-2xl">🔒</span>
                                  <p className="text-sm text-muted-foreground">Enterprise-grade security for your data</p>
                              </div>
                              <div className="flex items-start gap-3">
                                  <span className="text-accent text-2xl">🌐</span>
                                  <p className="text-sm text-muted-foreground">Access from any device, anywhere</p>
                              </div>
                              <div className="flex items-start gap-3">
                                  <span className="text-accent text-2xl">📊</span>
                                  <p className="text-sm text-muted-foreground">Visual analytics and detailed reports</p>
                              </div>
                          </div>

                         
                      </div>
                  </div>
              </section>
        {/* ================= CTA ================= */}
              <section className="relative py-24 px-6 text-center overflow-hidden">

                  {/* 🌈 Background Glow */}
                  <div className="absolute inset-0 -z-10 flex justify-center">
                      <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-[120px] rounded-full" />
                  </div>

                  <div className="max-w-3xl mx-auto">

                      {/* Heading */}
                      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                          Ready to take control of your time?
                      </h2>

                      {/* Description */}
                      <p className="text-muted-foreground mb-10">
                          Join thousands of users managing their work smarter and faster with Trackora.
                      </p>

                      {/* CTA Button */}
                      <Button
                          size="lg"
                          onClick={handleStart}
                          className="gap-2 px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                      >
                          Get Started Free 🚀
                          <ArrowRight className="w-5 h-5" />
                      </Button>

                  </div>
              </section>




        {/* ================= FOOTER ================= */}
        <footer className="border-t py-10 text-center text-sm text-muted-foreground">
          © 2026 Trackora. All rights reserved.
        </footer>

      </div>
    </div>
  );
}