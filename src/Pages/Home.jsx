import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiAxios,
} from "react-icons/si";
import myPhoto from "../assets/WhatsApp Image 2025-07-08 at 6.46.50 PM-Photoroom.png";

export default function Home() {
  return (
    <div className="text-blue-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-16 max-w-7xl mx-auto"
      >
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Hey, I'm <span className="text-blue-700">Mohamed Ibrahim</span> 👋
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">
            Front-End Developer & Self-Learner
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            21 y/o IT student. Passionate about crafting modern, clean, and
            performant web interfaces using React & Tailwind. Always learning.
            Always improving.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              🚀 View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer border border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition"
            >
              📞 Contact Me
            </ScrollLink>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={myPhoto}
            alt="Mohamed Ibrahim"
            className="rounded-full shadow-xl w-80 mx-auto ring-4 ring-blue-200"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12">🧠 My Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-500" />,
              },
              { name: "React", icon: <FaReact className="text-cyan-500" /> },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-sky-400" />,
              },
              { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
              { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
              {
                name: "Bootstrap",
                icon: <FaBootstrap className="text-purple-700" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-500" />,
              },
              { name: "SASS", icon: <SiSass className="text-pink-500" /> },
              { name: "Axios", icon: <SiAxios className="text-indigo-600" /> },
            ].map(({ name, icon }, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition p-4 rounded-xl shadow text-center flex flex-col items-center justify-center gap-2"
              >
                <div className="text-4xl">{icon}</div>
                <p className="font-medium">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-100">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">Freelance Projects</h3>
            <p className="text-gray-700 mb-2">2024 - Present</p>
            <p>
              Created responsive websites using React & Tailwind for practice,
              freelance work, and personal challenges. Building real-world UIs
              while mastering front-end best practices.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10">🎓 Education</h2>
          <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-1">
              Bachelor's in Information Technology
            </h3>
            <p className="text-gray-700 mb-2">
              Egyptian E-Learning University — Final Year
            </p>
            <p>Expected Graduation: 2026</p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-100 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚧 Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  Project {index + 1}
                </h3>
                <p className="text-gray-700 mb-4">
                  A cool web project built with React. Replace this with a real
                  project description.
                </p>
                <a
                  href="#"
                  className="text-blue-800 font-medium hover:underline"
                >
                  🔗 View Project
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-blue-50 text-blue-900 px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-center">
            Contact Me 🤝
          </h2>
          <ul className="space-y-4 text-lg text-center">
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-ibrahim-733952214"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 underline"
              >
                💼 LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mohamedibrahim01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 underline"
              >
                🐙 GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:ibrahim24876@gmail.com"
                className="hover:text-blue-600 underline"
              >
                📧 Gmail
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/201159588996"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 underline"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
