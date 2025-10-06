import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const contactCards = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    link: "https://linkedin.com/in/zain-ul-haq",
    linkText: "View Profile",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Explore my open-source projects",
    link: "https://github.com/Code-with-zaini",
    linkText: "Visit GitHub",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Let's collaborate or connect",
    link: "mailto:zain@example.com",
    linkText: "Send Email",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all group text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary/10 text-primary group-hover:scale-110 transition-transform mb-4">
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  {card.linkText}
                  <ExternalLink className="h-4 w-4" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-card p-8 rounded-2xl border-2 border-primary/20 shadow-2xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          © 2025 Zain ul Haq. Built with React & Tailwind CSS.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Designed with passion for data science and innovation
        </p>
      </motion.div>
    </section>
  );
}
