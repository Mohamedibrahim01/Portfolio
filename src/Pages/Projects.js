import { motion } from "framer-motion";

const Motion = motion;

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/Mohamedibrahim01/portfolio",
    },
    {
      title: "Movies App",
      description:
        "Movie discovery app built with React, featuring search and film details.",
      link: "https://github.com/Mohamedibrahim01/Movies-App",
    },
    {
      title: "Todo App",
      description: "A simple and clean todo list with local storage support.",
      link: "https://github.com/Mohamedibrahim01/todo-app",
    },
    {
      title: "Weather App",
      description: "Weather forecast app using OpenWeather API.",
      link: "https://github.com/Mohamedibrahim01/weather-app",
    },
  ];

  return (
    <section className="min-h-screen bg-[#eaf8f4] px-5 py-24 text-[#24211d] sm:px-8">
      <Motion.h2
        className="mb-12 text-center text-4xl font-black"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </Motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Motion.div
            key={index}
            className="rounded-lg border-2 border-[#24211d] bg-[#fffaf2] p-6 shadow-[8px_8px_0_#24211d] transition duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_#c94f32]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="mb-2 text-2xl font-black">{project.title}</h3>
            <p className="mb-4 font-medium text-[#4d463d]">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black uppercase tracking-[0.14em] text-[#c94f32] hover:underline"
            >
              View Project →
            </a>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
