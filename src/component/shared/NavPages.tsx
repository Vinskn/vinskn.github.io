"use client";
import { motion, AnimatePresence } from "motion/react";
import { IconPlus, IconX, IconHome, IconPerson, IconFolder, IconMail } from "@intentui/icons";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavPages({ addStyle }: { addStyle?: string }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const menuItems = [
    { label: "Home", dir: "/", Icon: IconHome },
    { label: "About", dir: "/detail/about", Icon: IconPerson },
    { label: "Projects", dir: "/detail/project", Icon: IconFolder },
    { label: "Contact", dir: "/#contact", Icon: IconMail },
  ];

  const HelperActiveMenu = () => {
    switch (pathname) {
      case "/":
        return <IconHome className="w-6 h-6" />;
      case "/detail/about":
        return <IconPerson className="w-6 h-6" />;
      case "/detail/project":
        return <IconFolder className="w-6 h-6" />;
      case "/#contact":
        return <IconMail className="w-6 h-6" />;
      default:
        return <IconHome className="w-6 h-6" />;
    }
  }

  return (
    <div className={`fixed bottom-6 right-6 z-100 flex flex-col-reverse items-center gap-3 ${addStyle ?? ""}`}>
      {/* Speed dial toggle button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-mainAccent text-white shadow-lg shadow-mainAccent/30 flex items-center justify-center cursor-pointer hover:bg-hoverAccent transition-colors duration-200"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HelperActiveMenu />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu items — fan upward, Home on top */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
              closed: { transition: { staggerChildren: 0.04, staggerDirection: 1 } },
            }}
            className="flex flex-col items-center gap-2"
          >

            {[...menuItems].map((item) => {
              const isActive = pathname === item.dir;

              return (
                <motion.li
                  key={item.label}
                  variants={{
                    open: { opacity: 1, y: 0, scale: 1 },
                    closed: { opacity: 0, y: 20, scale: 0.8 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="list-none"
                >
                  <Link
                    href={item.dir}
                    onClick={() => setOpen(false)}
                    className="group relative flex items-center"
                  >
                    {/* Tooltip label */}
                    <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-black/80 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150">
                      {item.label}
                    </span>

                    {/* Icon button */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md cursor-pointer transition-colors duration-200 ${
                        isActive
                          ? "bg-mainAccent text-white shadow-mainAccent/25"
                          : "bg-white/90 backdrop-blur-sm border border-border/40 text-textSec hover:text-mainAccent hover:border-mainAccent/40"
                      }`}
                    >
                      <item.Icon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
