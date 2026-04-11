import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiFigma,
  SiShadcnui,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import myPhoto from "../assets/me.jpeg";
import torostack_photo from "../assets/ToroStack.png";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-slate-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

const reactProjects = [
  {
    title: "ToroStack",
    badge: "Graduation Project",
    icon: "🎓",
    image: torostack_photo,
    imageAlt: "ToroStack",
    description:
      "Competitive programming platform with 1v1 battles, AI integration, learning roadmaps, and group challenges. Built with React, .NET, and JWT authentication.",
    tags: ["React", ".NET", "JWT", "AI"],
    liveUrl: "https://torostack.me/",
    codeUrl: "https://github.com/Ma7EG/CPTS",
    accent: "yellow",
  },
];

export default function Home() {
  return (
    <div className="text-blue-900 font-sans overflow-x-hidden">
      {/* 1. Hero Section */}
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
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="block">Hey, I'm</span>
            <motion.span
              className="block text-blue-700 overflow-hidden border-r-2 border-blue-700 font-mono whitespace-nowrap w-fit mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: "16ch" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            >
              Mohamed Ibrahim
            </motion.span>
          </motion.h1>

          <p className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 mb-5">
            React Developer • Graduating June 2026
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">
            Front-End Developer & React Specialist
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Motivated junior frontend developer focused on React.js and
            TailwindCSS. I enjoy building clean, accessible interfaces and
            translating product ideas into responsive user experiences.
          </p>
          <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-blue-900/75">
            My recent work includes a competitive programming platform with
            real-time code execution, AI-powered features, and complex state
            management as part of my graduation project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              🚀 View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer border border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition"
            >
              📞 Contact Me
            </ScrollLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-blue-800/80">
            <span className="rounded-full border border-blue-200 bg-white/70 px-3 py-1">
              React
            </span>
            <span className="rounded-full border border-blue-200 bg-white/70 px-3 py-1">
              TailwindCSS
            </span>
            <span className="rounded-full border border-blue-200 bg-white/70 px-3 py-1">
              Responsive UI
            </span>
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

      {/* 2. Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12">🧠 My Skills</h2>
          <p className="max-w-2xl mx-auto text-blue-900/70 mb-10">
            My stack is centered around modern React development with strong
            fundamentals in styling, state management, and JavaScript tooling.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="bg-blue-50 hover:bg-blue-100 transition p-5 rounded-xl shadow text-center flex flex-col items-center gap-2 border border-blue-100"
              >
                <div className="text-4xl">{icon}</div>
                <p className="font-medium">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {false && (
        <>
          {/* 3. Experience Section */}
          <section id="experience" className="py-24 px-6 bg-slate-100">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-center mb-10">
                Experience
              </h2>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold mb-2">
                  Freelance Projects
                </h3>
                <p className="text-gray-700 mb-2">2025 - Present</p>
                <p>
                  Building real-world UIs while mastering front-end best
                  practices using React & Tailwind.
                </p>
              </div>
            </motion.div>
          </section>
        </>
      )}
      {/* 5. Projects Section */}

      <section id="projects" className="py-24 bg-slate-100 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Projects</h2>

          {/* --- React Project (Graduation) --- */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-cyan-600 border-b-2 border-cyan-600 w-fit pb-2">
              <FaReact /> React Projects
            </h3>
            <p className="text-blue-900/70 mb-8 max-w-2xl">
              A selected set of React projects that highlight UI engineering,
              product thinking, and real-world application structure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {reactProjects.map(
                ({
                  title,
                  badge,
                  icon,
                  image,
                  imageAlt,
                  description,
                  tags,
                  liveUrl,
                  codeUrl,
                  accent,
                }) => (
                  <div
                    key={title}
                    className={`relative bg-white rounded-xl shadow-md overflow-hidden border-2 hover:shadow-xl transition-all ${
                      accent === "yellow"
                        ? "border-yellow-400"
                        : "border-cyan-200 border-dashed"
                    }`}
                  >
                    {badge && (
                      <div className="absolute top-3 left-3 z-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                        <span>{icon}</span>
                        <span>{badge}</span>
                      </div>
                    )}
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-blue-800">
                        ⚔️ {title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed font-medium">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs px-2 py-0.5 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition"
                        >
                          Live
                        </a>
                        <a
                          href={codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gray-800 text-white px-3 py-1 rounded text-xs hover:bg-gray-900 transition"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ),
              )}

              <div className="rounded-xl border-2 border-dashed border-cyan-200 bg-white/70 p-6 min-h-[24rem] flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 mb-3">
                  Next project
                </p>
                <h4 className="text-2xl font-bold text-blue-800 mb-3">
                  Your upcoming React project goes here
                </h4>
                <p className="text-blue-900/70 leading-relaxed">
                  I left space for the next card so the section already feels
                  balanced. Once you send the project name, description,
                  technologies, image, and links, I can plug it in quickly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* 4. Education Section */}
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
              Information Technology
            </h3>
            <p className="text-gray-700 mb-2">Egyptian E-Learning University</p>
            <p className="text-sm text-blue-900/70">
              Expected graduation: June 2026
            </p>
          </div>
        </motion.div>
      </section>

      {/* 6. Contact Section */}
      <section
        id="contact"
        className="min-h-[70vh] flex flex-col justify-center items-center bg-blue-50 text-blue-900 px-6 py-20"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <a
              href="https://www.linkedin.com/in/mohamed-ibrahim-733952214"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-xl shadow hover:text-blue-600 transition font-bold uppercase text-xs tracking-widest border-b-4 border-blue-600"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/Mohamedibrahim01"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-xl shadow hover:text-blue-600 transition font-bold uppercase text-xs tracking-widest border-b-4 border-gray-800"
            >
              🐙 GitHub
            </a>
            <a
              href="mailto:ibrahim24876@gmail.com"
              className="bg-white p-4 rounded-xl shadow hover:text-blue-600 transition font-bold uppercase text-xs tracking-widest border-b-4 border-red-500"
            >
              📧 Gmail
            </a>
            <a
              href="https://wa.me/201159588996"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-4 rounded-xl shadow hover:text-blue-600 transition font-bold uppercase text-xs tracking-widest border-b-4 border-green-500"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
