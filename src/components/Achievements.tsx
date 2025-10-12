import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import dataAnalysisCert from "@/assets/certificates/data-analysis-python.jpg";
import pythonDataScienceCert from "@/assets/certificates/python-for-data-science.jpg";
import toolsDataScienceCert from "@/assets/certificates/tools-for-data-science.jpg";
import whatIsDataScienceCert from "@/assets/certificates/what-is-data-science.jpg";
import genAICert from "@/assets/certificates/genai-prompt-engineering.jpg";

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
  {
    title: "Data Analysis with Python",
    image: dataAnalysisCert,
    issuer: "IBM - Coursera",
    date: "September 2025",
  },
  {
    title: "Python for Data Science, AI & Development",
    image: pythonDataScienceCert,
    issuer: "IBM - Coursera",
    date: "August 2025",
  },
  {
    title: "Tools for Data Science",
    image: toolsDataScienceCert,
    issuer: "IBM - Coursera",
    date: "September 2025",
  },
  {
    title: "What is Data Science?",
    image: whatIsDataScienceCert,
    issuer: "IBM - Coursera",
    date: "August 2025",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    image: genAICert,
    issuer: "IBM - Coursera",
    date: "July 2025",
  },
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
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Certifications</span>
              </h3>
              <p className="text-muted-foreground">Verified credentials from leading institutions</p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-2"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                        <div className="aspect-[1.414/1] overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-sm font-bold mb-1 line-clamp-2">{cert.title}</h4>
                            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                            <p className="text-xs text-primary mt-1">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
