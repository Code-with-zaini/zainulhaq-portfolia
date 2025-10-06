import { motion } from "framer-motion";
import { Code, Database, Brain, BarChart3, Users, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python 🐍", "C++ ⚙️", "SQL 🗃️", "JavaScript 🌐", "HTML/CSS 🎨", "PHP 💻"],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    title: "Data Visualization",
    icon: BarChart3,
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "D3.js"],
  },
  {
    title: "Tools & Platforms",
    icon: Database,
    skills: ["Jupyter", "VS Code", "Git/GitHub", "MySQL", "MongoDB", "Docker"],
  },
  {
    title: "Data Analytics",
    icon: Lightbulb,
    skills: ["Data Wrangling", "EDA", "Statistical Analysis", "Feature Engineering", "Model Evaluation", "A/B Testing"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Analytical Thinking", "Problem Solving", "Communication", "Team Collaboration", "Time Management", "Adaptability"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-xl bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 text-sm font-medium hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
