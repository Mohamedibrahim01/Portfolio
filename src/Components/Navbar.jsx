import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer text-xl font-bold text-blue-800 hover:text-blue-600 transition"
          onClick={closeMenu}
        >
          Mohamed Ibrahim
        </ScrollLink>

        {/* Hamburger Button */}
        <div
          className="lg:hidden text-2xl text-blue-800 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-6">
          {links.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-start space-y-4 px-4">
          {links.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer text-blue-800 hover:text-blue-600 font-medium text-lg"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
