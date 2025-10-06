import { motion } from "framer-motion";
import { GraduationCap, Code, BarChart3, Award, Rocket, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Data Science Undergraduate", value: "BS Student" },
  { icon: Code, label: "Programming Languages", value: "6+" },
  { icon: BarChart3, label: "Data Projects Completed", value: "10+" },
  { icon: Award, label: "Academic Excellence", value: "Dean's List" },
  { icon: Rocket, label: "Career Status", value: "Open for Internships" },
  { icon: Users, label: "Team Projects", value: "5+" },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know who I am and what I do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-card/50 p-8 rounded-3xl border border-border shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Data Science student at the <strong className="text-foreground">Institute of Space Technology</strong>, 
                passionate about uncovering insights from data. From C++ systems programming to advanced Python analytics, 
                I thrive on solving real-world problems with data-driven intelligence.
              </p>
              <p>
                My journey in tech began with a curiosity about how data shapes decisions in modern businesses. 
                Today, I'm building expertise in <strong className="text-foreground">Machine Learning</strong>, 
                <strong className="text-foreground"> Statistical Analysis</strong>, and 
                <strong className="text-foreground"> Data Visualization</strong>.
              </p>
              <p>
                I aim to bridge the gap between AI theory and business impact through innovative solutions 
                that make data truly meaningful. Whether it's developing prediction models or creating 
                insightful visualizations, I'm committed to delivering excellence.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-card/50 p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-gradient-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
