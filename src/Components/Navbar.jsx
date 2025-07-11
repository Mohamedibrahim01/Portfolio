import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      <ScrollLink
        to="hero"
        smooth={true}
        duration={500}
        className="cursor-pointer text-xl font-bold text-blue-800 hover:text-blue-600 transition"
      >
        Mohamed Ibrahim
      </ScrollLink>

      <div className="space-x-6">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="education"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
        >
          Education
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
        >
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
}
