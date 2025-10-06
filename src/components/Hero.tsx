import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Enthusiast",
  "Data Analyst",
  "Python Developer",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Animated gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Zain ul Haq</span> 👋
            </h1>

            <div className="h-16 flex items-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/80">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate Data Science student transforming complex data into actionable insights. Pursuing a Bachelor's in Data Science at IST, specializing in Machine Learning, Data Analytics, and AI-driven innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                  🧠 View My Projects
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Code-with-zaini"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:zain@example.com"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative backdrop-blur-xl bg-card/70 p-8 rounded-3xl border-2 border-primary/20 shadow-2xl">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50" />
                  <img
                    src={profileImg}
                    alt="Zain ul Haq"
                    className="relative rounded-full w-full h-full object-cover border-4 border-card"
                  />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold">Zain ul Haq</h3>
                  <p className="text-lg text-muted-foreground">Data Science Student</p>
                  <p className="text-sm text-muted-foreground">📍 Islamabad, Pakistan</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    ✨ Open to Internships
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
