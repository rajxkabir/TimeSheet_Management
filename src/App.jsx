import { LandingPage } from "./components/LandingPage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/views/Dashboard";
import { Timesheet } from "./components/views/Timesheet";
import { Projects } from "./components/views/Projects";
import { Team } from "./components/views/Team";
import { Reports } from "./components/views/Reports";
import { cn } from "./lib/utils";
import { useState } from "react";
import Login from "./components/Login";

function App() {
    const [showApp, setShowApp] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useState("login");

    // 👉 Landing Page first
    if (!showApp) {
        return (
            <LandingPage
                onGetStarted={() => {
                    setShowApp(true);
                    setActiveView("login");
                }}
            />
        );
    }

    const handleViewChange = (view) => {
        setActiveView(view);
        setSidebarOpen(false);
    };

    const renderView = () => {
        switch (activeView) {
            case "login":
                return <Login onLogin={() => setActiveView("dashboard")} />;

            case "dashboard":
                return <Dashboard />;

            case "timesheet":
                return <Timesheet />;

            case "projects":
                return <Projects />;

            case "team":
                return <Team />;

            case "reports":
                return <Reports />;

            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* ❌ Hide Navbar/Sidebar on login */}
            {activeView !== "login" && (
                <>
                    <Navbar
                        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                        isSidebarOpen={sidebarOpen}
                    />

                    <Sidebar
                        isOpen={sidebarOpen}
                        activeView={activeView}
                        onViewChange={handleViewChange}
                    />
                </>
            )}

            <main
                className={cn(
                    activeView !== "login" && "pt-14 md:pl-64",
                    "transition-all duration-300"
                )}
            >
                <div className="p-6 md:p-8 lg:p-10">{renderView()}</div>
            </main>
        </div>
    );
}

export default App;