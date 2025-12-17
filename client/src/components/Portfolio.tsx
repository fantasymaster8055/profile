import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTrophy,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Navigation() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          GS
        </motion.span>
        <div className="flex gap-6">
          {["About", "Projects", "Skills", "Achievements", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ),
          )}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Guhaan Saravanan
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com/fantasymaster8055"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/guhaan-saravanan-0972ba249/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-105"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto flex justify-center pt-2">
              <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl shrink-0">
                GS
              </div>
              <div>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer with 3+ years of
                  experience building web applications. I specialize in React,
                  Node.js, and modern JavaScript frameworks. I love creating
                  beautiful, performant, and user-friendly interfaces.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  When I'm not coding, you can find me solving algorithmic
                  challenges, contributing to open source projects, or exploring
                  new technologies. I believe in continuous learning and pushing
                  the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Smart Dustbin",
      description:
        "An intelligent waste management system using ultrasonic sensors and line tracing concepts for automated navigation and waste collection.",
      tech: ["Arduino", "Ultrasonic Sensors", "Line Tracing", "Motors"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Smart Waiter Robot",
      description:
        "An autonomous robot designed to serve customers in restaurants, featuring navigation and object detection capabilities.",
      tech: ["Robotics", "Sensors", "Microcontrollers", "Motors"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Interactive 3D portfolio showcasing projects and skills with smooth animations and modern design.",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div
                className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.color} mb-4`}
              />
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {project.title}
                <FaExternalLinkAlt className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Robotics & Hardware",
      skills: [
        "Arduino",
        "Raspberry Pi",
        "Ultrasonic Sensors",
        "Motor Control",
        "Line Tracing",
        "Circuit Design",
      ],
    },
    {
      title: "App Development",
      skills: [
        "React",
        "React Native",
        "Flutter",
        "JavaScript",
        "TypeScript",
        "Mobile UI/UX",
      ],
    },
    {
      title: "Web Development",
      skills: [
        "HTML/CSS",
        "Tailwind CSS",
        "Three.js",
        "Node.js",
        "Python",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "VS Code",
        "Figma",
        "CAD Software",
        "Linux",
        "3D Printing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:bg-slate-600/50 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = [
    {
      icon: <SiLeetcode className="text-3xl text-yellow-500" />,
      title: "LeetCode",
      stat: "Constantly Learning and Solving questions",
      description: "Learning new concepts and solving questions",
    },
    {
      icon: <FaCode className="text-3xl text-green-500" />,
      title: "CodeChef",
      stat: "Upskilling and making progress",
      description: "Learning to code",
    },
    {
      icon: <FaTrophy className="text-3xl text-purple-500" />,
      title: "Hackathons",
      stat: "3 Runner-ups",
      description: "participated in multiple school level hackathons",
    },
    {
      icon: <FaGithub className="text-3xl text-slate-300" />,
      title: "Open Source",
      stat: "Making porjects and contributing",
      description: "Active contributor to major projects",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex gap-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="shrink-0">{achievement.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{achievement.title}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {achievement.stat}
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:guhaan.ss2025@vitstudent.ac.in"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:opacity-90 transition-opacity"
            >
              <FaEnvelope />
              <span>guhaan.ss2025@vitstudent.ac.in</span>
            </a>
            <a
              href="https://github.com/fantasymaster8055"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/guhaan-saravanan-0972ba249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-400"></div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="relative text-white overflow-y-auto h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
