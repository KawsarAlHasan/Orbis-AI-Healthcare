import { Image } from "antd";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const navLinks = ["Features", "How It Works", "Integrations", "Pricing", "FAQ"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("instructorProfile");
    localStorage.removeItem("profileTimestamp");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#100b1e]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/#">
            <Image
              preview={false}
              className="cursor-pointer"
              src="/images/homeLogo.png"
              alt="logo"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <h2
              onClick={handleLogOut}
              className="cursor-pointer text-white/60 text-sm hover:text-white transition-colors"
            >
              Log In
            </h2>
            <a
              href="#"
              className="mainBtn text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#dbb95d] transition-colors"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl p-1"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#100b1e]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 text-base hover:text-white transition-colors py-1"
              >
                {link}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <h2 onClick={handleLogOut} className="text-white/60 text-sm">
                Log In
              </h2>
              <a
                href="#"
                className="bg-[#c9a84c] text-[#100b1e] text-sm font-bold px-5 py-3 rounded-full text-center hover:bg-[#dbb95d] transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
