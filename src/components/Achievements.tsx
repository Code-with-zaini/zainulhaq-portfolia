import { motion } from "framer-motion";
import { Award, Trophy, CheckCircle, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Dean's List",
    description: "Recognized for outstanding academic performance and consistent excellence throughout the semester.",
  },
  {
    icon: Star,
    title: "Top Project Presentation",
    description: "Awarded best project presentation at IST for innovative data science solution.",
  },
  {
    icon: Award,
    title: "Data Science Foundations",
    description: "Successfully completed comprehensive Data Science certification program on Coursera.",
  },
];

const certifications = [
  "Python for Data Science (Coursera)",
  "Machine Learning Specialization (Stanford)",
  "SQL for Data Analytics",
  "Tableau/Power BI Visualization",
  "Google Data Analytics Professional Certificate",
  "Deep Learning Fundamentals",
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
            <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">Recognition and certifications</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all group text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 text-primary group-hover:scale-110 transition-transform mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-card p-8 rounded-3xl border-2 border-primary/20 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
