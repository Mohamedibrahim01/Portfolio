import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaGithub,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
} from "react-icons/si";
import myPhoto from "../assets/PhotoOfMe.png";
import project_Movies_photo from "../assets/MoviesApp.png";
import project_Supplements_photo from "../assets/supplementsStore.png";
import Fitness_App_photo from "../assets/FitnessApp.png";
import project_FoodApp_photo from "../assets/FoodApp.png";
// import project_StGym_photo from "../assets/StGymDashboard.png";

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

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">
            Front-End Developer & Angular/React Specialist
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Passionate about crafting modern, clean, and performant web
            interfaces. Expert in Angular, React & Tailwind.
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

      {/* 2. Skills Section - (تأكد أن الـ id هو skills) */}
      <section id="skills" className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12">🧠 My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {[
              { name: "Angular", icon: <FaAngular className="text-red-600" /> },
              { name: "React", icon: <FaReact className="text-cyan-500" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-500" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-500" />,
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-sky-400" />,
              },
              { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
            ].map(({ name, icon }, index) => (
              <div
                key={index}
                className="bg-blue-50 hover:bg-blue-100 transition p-4 rounded-xl shadow text-center flex flex-col items-center gap-2"
              >
                <div className="text-4xl">{icon}</div>
                <p className="font-medium">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-100">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold mb-2">Freelance Projects</h3>
            <p className="text-gray-700 mb-2">2025 - Present</p>
            <p>
              Building real-world UIs while mastering front-end best practices
              using Angular, React & Tailwind.
            </p>
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
          </div>
        </motion.div>
      </section>

      {/* 5. Projects Section - (الآن id واحد فقط لضمان عمل السكرول) */}
      <section id="projects" className="py-24 bg-slate-100 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Projects</h2>

          {/* --- Angular Sub-Section --- */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-red-600 border-b-2 border-red-600 w-fit pb-2">
              <FaAngular /> Angular Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-red-600 hover:shadow-xl transition-all">
                <img
                  src={Fitness_App_photo}
                  alt="ST GYM"
                  className="w-full h-48 object-cover opacity-80"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    🏆 ST GYM Management System
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm font-medium">
                    Professional Gym management dashboard. Features Admin/Member
                    roles & Workout Logging. Built with Angular & Tailwind.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
                    >
                      🔗 Preview
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-900 transition"
                    >
                      💻 Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 mb-16" />

          {/* --- React Sub-Section --- */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-cyan-600 border-b-2 border-cyan-600 w-fit pb-2">
              <FaReact /> React Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Movies App */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={project_Movies_photo}
                  alt="Movies App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    🎬 Movies App
                  </h3>
                  <p className="text-gray-700 mb-4 text-xs leading-relaxed font-medium">
                    React, TypeScript, and Tailwind. Watchlist and ratings
                    integration.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://movies-app-kuva.vercel.app/"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Mohamedibrahim01/Movies-App.git"
                      className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Supplements Store */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={project_Supplements_photo}
                  alt="Supplements"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    💊 Supplements Store
                  </h3>
                  <p className="text-gray-700 mb-4 text-xs leading-relaxed font-medium">
                    E-commerce store built with React and Framer Motion.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://supplements-store.vercel.app/"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Mohamedibrahim01/Supplements-Store"
                      className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Food App */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={project_FoodApp_photo}
                  alt="Food App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    🍔 Food App
                  </h3>
                  <p className="text-gray-700 mb-4 text-xs leading-relaxed font-medium">
                    Responsive ordering app with API integration.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://food-app-eight-pearl.vercel.app/"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Mohamedibrahim01/FoodApp"
                      className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Fitness App (React version) */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border-b-4 border-cyan-500">
                <img
                  src={Fitness_App_photo}
                  alt="Fitness App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    🏋️‍♂️ Fitness App (React)
                  </h3>
                  <p className="text-gray-700 mb-4 text-xs leading-relaxed font-medium">
                    Fitness tracking with workout plans and responsive UI.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://fitness-app-eta-mauve.vercel.app/"
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Mohamedibrahim01/FitnessApp"
                      className="bg-gray-800 text-white px-3 py-1 rounded text-xs"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
