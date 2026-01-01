"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [phoneMenu, setPhoneMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: { x: "-100%", opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-6"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200/50 rounded-xl py-3"
              : "bg-transparent py-2"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.h1
              layout
              transition={{ duration: 0.25 }}
              className={`Inconsolata font-bold transition-all duration-300 ${
                isScrolled ? "text-black text-xl" : "text-black text-2xl"
              }`}
            >
              <Link href={"/"}>
                Chris<span className="text-emerald-900 animate-ping">.</span>
              </Link>
            </motion.h1>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-1">
              {linkItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:bg-black hover:text-white"
                        : "text-black hover:bg-black/10"
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`Inconsolata cursor-pointer hidden md:block px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              Let&apos;s Talk
            </motion.button>

            {/* Mobile Button */}
            <button
              onClick={() => setPhoneMenu((prev) => !prev)}
              className={`cursor-pointer md:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled ? "hover:bg-gray-100" : "hover:bg-black/10"
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: phoneMenu ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {phoneMenu ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {phoneMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setPhoneMenu(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white shadow-2xl flex flex-col p-8"
            >
              {/* Mobile Logo */}
              <h1 className="font-bold text-2xl text-black mb-12">
                <Link href={"/"}>
                  Chris<span className="text-emerald-500">.</span>
                </Link>
              </h1>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2">
                {linkItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        className="block text-gray-800 text-xl font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setPhoneMenu(false)}
                      >
                        {item.name}
                      </motion.a>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setPhoneMenu(false)}
              >
                Let&apos;s Talk
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
