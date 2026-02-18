import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // تأثير عند السكرول عشان يغير شكل النافبار
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" }, // اتأكد إن الترتيب هنا هو نفس ترتيب السكاشن تحت
    { to: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      } px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-black tracking-tighter text-blue-800 hover:text-blue-600 transition"
          onClick={closeMenu}
        >
          Mohamed Ibrahim<span className="text-blue-400">.</span>
        </ScrollLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // التريكة هنا: عشان السكرول ميغطيش عنوان السكشن
              activeClass="text-blue-600 border-b-2 border-blue-600"
              className="cursor-pointer text-blue-900/80 hover:text-blue-700 font-bold text-sm uppercase tracking-widest transition-all pb-1"
            >
              {label}
            </ScrollLink>
          ))}
        </div>

        {/* Hamburger Button */}
        <div
          className="lg:hidden text-2xl text-blue-800 cursor-pointer z-[110]"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map(({ to, label }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer text-blue-800 hover:text-blue-600 font-black text-2xl uppercase tracking-tighter"
          >
            {label}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
}
