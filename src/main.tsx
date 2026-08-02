import React from "react";
import ReactDOM from "react-dom/client";
import { TopNav } from "@/components/portfolio/TopNav";
import { Hero } from "@/components/portfolio/Hero";
import { Project } from "@/components/portfolio/Project";
import { Skills, Methods } from "@/components/portfolio/SkillsMethods";
import { Footer } from "@/components/portfolio/Footer";
import "@/styles.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <TopNav />
      <main>
        <Hero />
        <Project />
        <Skills />
        <Methods />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
