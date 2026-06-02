import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-full px-5 transition-all duration-300 sm:px-8 ${
        scrolled
          ? "border-b-2 border-[#24211d] bg-[#fffaf2]/90 py-3 shadow-[0_8px_0_#24211d12] backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-black tracking-normal text-[#24211d] transition hover:text-[#c94f32]"
          onClick={closeMenu}
        >
          Mohamed Ibrahim<span className="text-[#18a999]">.</span>
        </ScrollLink>

        <div className="hidden items-center gap-2 rounded-full border-2 border-[#24211d]/10 bg-white/45 px-2 py-2 backdrop-blur lg:flex">
          {links.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="bg-[#24211d] text-white"
              className="cursor-pointer rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#4d463d] transition-all hover:bg-[#f2b84b] hover:text-[#24211d]"
            >
              {label}
            </ScrollLink>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="z-[110] grid h-11 w-11 cursor-pointer place-items-center rounded-lg border-2 border-[#24211d] bg-[#fffaf2] text-xl text-[#24211d] shadow-[4px_4px_0_#18a999] lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[105] flex flex-col items-center justify-center space-y-8 bg-[#fffaf2] transition-transform duration-500 lg:hidden ${
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
            className="cursor-pointer text-3xl font-black uppercase tracking-normal text-[#24211d] transition hover:text-[#c94f32]"
          >
            {label}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
}
