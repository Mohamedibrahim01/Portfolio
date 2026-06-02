import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiFigma,
  SiShadcnui,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiAngular,
} from "react-icons/si";
import myPhoto from "../assets/me.jpeg";
import torostack_photo from "../assets/ToroStack.png";
import movies_photo from "../assets/Movies.png";

const Motion = motion;

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#c94f32]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#18a999]" />,
  },
  { name: "React", icon: <FaReact className="text-[#18a999]" /> },
  { name: "Angular", icon: <SiAngular className="text-red-500" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#70c15a]" />,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-[#24211d]" /> },
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
    tags: ["React", ".NET", "AI"],
    liveUrl: "https://torostack.me/",
    accent: "yellow",
  },
  {
    title: "Movies App",
    icon: "🎬",
    image: movies_photo,
    imageAlt: "Movies App",
    description:
      "A movie discovery app built with React that showcases films, search, and details using a modern UI.",
    tags: ["React", "API", "UI"],
    liveUrl: "https://movies-app-kuva.vercel.app/",
    accent: "teal",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#f7f2ea] font-sans text-[#24211d]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-multiply noise-layer" />

      <section
        id="hero"
        className="relative z-10 min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Motion.div
            className="relative text-center lg:text-left"
            initial="hidden"
            animate="show"
            variants={staggerGroup}
          >
            <Motion.p
              className="mb-6 inline-flex items-center rounded-full border border-[#24211d]/15 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#c94f32] shadow-[6px_6px_0_#24211d12]"
              variants={fadeUp}
            >
              Front End Developer - React & Angular
            </Motion.p>

            <Motion.h1
              className="mb-7 text-5xl font-black leading-[0.95] tracking-normal text-[#24211d] sm:text-6xl lg:text-7xl"
              variants={fadeUp}
            >
              <span className="block">Hey, I'm</span>
              <Motion.span
                className="relative mt-3 inline-block overflow-hidden whitespace-nowrap border-r-4 border-[#18a999] font-mono text-[#18a999]"
                initial={{ width: 0 }}
                animate={{ width: "16ch" }}
                transition={{ duration: 2.4, ease: "easeInOut", delay: 0.35 }}
              >
                Mohamed Ibrahim
              </Motion.span>
            </Motion.h1>

            <Motion.h2
              className="mb-5 text-2xl font-black text-[#c94f32] sm:text-3xl"
              variants={fadeUp}
            >
              Front-End Developer & React Specialist
            </Motion.h2>
            <Motion.p
              className="mx-auto mb-9 max-w-xl text-lg font-medium leading-relaxed text-[#4d463d] lg:mx-0"
              variants={fadeUp}
            >
              Motivated junior frontend developer focused on React.js and
              TailwindCSS. I enjoy building clean, accessible interfaces and
              translating product ideas into responsive user experiences.
            </Motion.p>

            <Motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              variants={fadeUp}
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#24211d] px-6 py-3 font-black text-white shadow-[7px_7px_0_#18a999] transition duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#18a999]"
              >
                <span className="relative z-10">🚀 View Projects</span>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer rounded-lg border-2 border-[#24211d] bg-[#f7f2ea] px-6 py-3 font-black text-[#24211d] shadow-[7px_7px_0_#f2b84b] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                📞 Contact Me
              </ScrollLink>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="relative mx-auto w-full max-w-[27rem]"
            initial={{ opacity: 0, rotate: 5, x: 60 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Motion.div
              className="absolute -left-5 top-10 h-28 w-28 border-8 border-[#f2b84b]"
              animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <Motion.div
              className="absolute -right-6 bottom-8 h-20 w-20 bg-[#18a999]"
              animate={{ rotate: [8, -8, 8], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <div className="relative rotate-2 overflow-hidden rounded-lg border-4 border-[#24211d] bg-white p-3 shadow-[18px_18px_0_#c94f32]">
              <img
                src={myPhoto}
                alt="Mohamed Ibrahim"
                className="aspect-[4/5] w-full rounded-md object-cover grayscale-[18%] saturate-125"
              />
            </div>
            <Motion.div
              className="absolute -bottom-8 left-6 right-6 rounded-lg border-2 border-[#24211d] bg-[#f7f2ea] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.22em] shadow-[8px_8px_0_#24211d]"
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Clean UI / Real Code
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <div className="relative z-10 overflow-hidden border-y-2 border-[#24211d] bg-[#24211d] py-3 text-white">
        <Motion.div
          className="flex w-max gap-8 text-sm font-black uppercase tracking-[0.28em]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {[...skills, ...skills].map(({ name }, index) => (
            <span key={`${name}-${index}`}>{name}</span>
          ))}
        </Motion.div>
      </div>

      <section
        id="skills"
        className="relative z-10 bg-[#fffaf2] px-5 py-24 sm:px-8"
      >
        <Motion.div
          className="mx-auto max-w-6xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          <Motion.h2
            className="mb-5 text-4xl font-black text-[#24211d]"
            variants={fadeUp}
          >
            🧠 My Skills
          </Motion.h2>
          <Motion.p
            className="mx-auto mb-12 max-w-2xl text-[#5d554b]"
            variants={fadeUp}
          >
            My stack is centered around modern React development with strong
            fundamentals in styling, state management, and JavaScript tooling.
          </Motion.p>
          <Motion.div
            className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            variants={staggerGroup}
          >
            {skills.map(({ name, icon }) => (
              <Motion.div
                key={name}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-lg border-2 border-[#24211d] bg-[#f7f2ea] p-5 text-center shadow-[6px_6px_0_#24211d] transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[10px_10px_0_#18a999]"
                variants={fadeUp}
                whileHover={{ rotate: -2 }}
              >
                <div className="text-4xl transition duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <p className="font-black uppercase tracking-[0.12em]">{name}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>
      </section>

      <section
        id="projects"
        className="relative z-10 bg-[#eaf8f4] px-5 py-24 sm:px-8"
      >
        <Motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          <Motion.h2
            className="mb-12 text-center text-4xl font-black text-[#24211d]"
            variants={fadeUp}
          >
            🚀 Projects
          </Motion.h2>

          <div>
            <Motion.h3
              className="mb-8 flex w-fit items-center gap-2 border-b-4 border-[#18a999] pb-2 text-2xl font-black text-[#128173]"
              variants={fadeUp}
            >
              <FaReact /> React Projects
            </Motion.h3>

            <Motion.div
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-2"
              variants={staggerGroup}
            >
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
                  accent,
                }) => (
                  <Motion.div
                    key={title}
                    className={`group relative overflow-hidden rounded-lg border-2 bg-[#fffaf2] shadow-[10px_10px_0_#24211d] transition-all duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0_#c94f32] ${
                      accent === "yellow"
                        ? "border-[#f2b84b]"
                        : "border-[#18a999] border-dashed"
                    }`}
                    variants={fadeUp}
                  >
                    {badge && (
                      <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full border-2 border-[#24211d] bg-[#f2b84b] px-3 py-1 text-xs font-black text-[#24211d] shadow-[4px_4px_0_#24211d]">
                        <span>{icon}</span>
                        <span>{badge}</span>
                      </div>
                    )}
                    <div className="overflow-hidden border-b-2 border-[#24211d]">
                      <img
                        src={image}
                        alt={imageAlt}
                        className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-black text-[#24211d]">
                        {icon} {title}
                      </h3>
                      <p className="mb-5 text-sm font-semibold leading-relaxed text-[#4d463d]">
                        {description}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#18a999] bg-white px-3 py-1 text-xs font-black text-[#128173]"
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
                          className="inline-flex items-center gap-2 rounded-lg bg-[#24211d] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#c94f32]"
                        >
                          Live Demo <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </Motion.div>
                ),
              )}
            </Motion.div>
          </div>
        </Motion.div>
      </section>

      <section
        id="education"
        className="relative z-10 bg-[#f7f2ea] px-5 py-24 sm:px-8"
      >
        <Motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          <Motion.h2
            className="mb-10 text-4xl font-black text-[#24211d]"
            variants={fadeUp}
          >
            🎓 Education
          </Motion.h2>
          <Motion.div
            className="mx-auto max-w-2xl rounded-lg border-2 border-[#24211d] bg-[#fffaf2] p-7 shadow-[10px_10px_0_#f2b84b]"
            variants={fadeUp}
            whileHover={{ rotate: 1, y: -4 }}
          >
            <h3 className="mb-1 text-2xl font-black">Information Technology</h3>
            <p className="mb-2 font-semibold text-[#4d463d]">
              Egyptian E-Learning University
            </p>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c94f32]">
              graduated: June 2026
            </p>
          </Motion.div>
        </Motion.div>
      </section>

      <section
        id="contact"
        className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center bg-[#24211d] px-5 py-20 text-[#fffaf2] sm:px-8"
      >
        <Motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerGroup}
        >
          <Motion.h2
            className="mb-10 text-center text-4xl font-black"
            variants={fadeUp}
          >
            Contact Me 🤝
          </Motion.h2>
          <Motion.div
            className="grid grid-cols-2 gap-4 text-center md:grid-cols-4"
            variants={staggerGroup}
          >
            <a
              href="https://www.linkedin.com/in/mohamed-ibrahim-733952214"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-[#fffaf2] bg-[#fffaf2] p-4 text-xs font-black uppercase tracking-widest text-[#24211d] shadow-[6px_6px_0_#18a999] transition duration-300 hover:-translate-y-2"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/Mohamedibrahim01"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-[#fffaf2] bg-[#fffaf2] p-4 text-xs font-black uppercase tracking-widest text-[#24211d] shadow-[6px_6px_0_#c94f32] transition duration-300 hover:-translate-y-2"
            >
              🐙 GitHub
            </a>
            <a
              href="mailto:ibrahim24876@gmail.com"
              className="rounded-lg border-2 border-[#fffaf2] bg-[#fffaf2] p-4 text-xs font-black uppercase tracking-widest text-[#24211d] shadow-[6px_6px_0_#f2b84b] transition duration-300 hover:-translate-y-2"
            >
              📧 Gmail
            </a>
            <a
              href="https://wa.me/201159588996"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-2 border-[#fffaf2] bg-[#fffaf2] p-4 text-xs font-black uppercase tracking-widest text-[#24211d] shadow-[6px_6px_0_#70c15a] transition duration-300 hover:-translate-y-2"
            >
              💬 WhatsApp
            </a>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  );
}
