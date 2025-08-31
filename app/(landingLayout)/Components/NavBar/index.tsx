"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BookOpen, Calendar, Github, Menu, Newspaper } from "lucide-react";
import { Button } from "@/src/ui/shadcn/ui/button";
import { motion } from "motion/react";

const navlinks = [
  {
    icon: BookOpen,
    label: "Docs",
    href: "/documents",
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/events",
  },
  {
    icon: Newspaper,
    label: "Blog",
    href: "/blog",
  },
  {
    icon: Github,
    label: "Repository",
    href: "/something",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("scroll-disable");
    } else {
      document.body.classList.remove("scroll-disable");
    }
  }, [open]);

  return (
    <>
      {/* Navigation bar */}
      <nav className="py-4 flex justify-between md:grid md:grid-cols-[0.2fr_auto_0.2fr]">
        {/* Branding */}
        <div className="p-4">
          <Image
            width={120}
            height={80}
            src={"/resources/Logo/Transparent/Label.png"}
            alt="Tempo's Logo"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex w-full gap-4 items-center">
          {navlinks.map(({ href, label }, item) => {
            return (
              <li key={item}>
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button style={"pill"} variant={"outline"}>
            Login
          </Button>
          <Button style={"pill"}>Register</Button>
        </div>

        {/* Sidebar Button */}
        <div className="md:hidden flex items-center justify-center">
          <Button variant={"outline"} onClick={() => setOpen((prev) => !prev)}>
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        initial={{ y: -500, scale: 0.5 }}
        animate={open ? { y: 0, scale: 1 } : { y: -500, scale: 0.5 }}
        transition={
          open
            ? {
                duration: 0.3,
                type: "spring",
                damping: 14,
              }
            : {
                duration: 0.3,
              }
        }
        className={`${
          open ? "" : ""
        } absolute z-40 border rounded-md top-24 right-0 left-0 mx-6 md:mx-auto p-4 max-w-md`}
      >
        {/* CTA */}
        <h1 className="text-2xl font-bold font-header mb-4">Navigation</h1>

        {/* Navigation Links */}
        <ul className="grid grid-cols-4 gap-4 items-center">
          {navlinks.map((nav, index) => {
            const Icon = nav.icon;

            return (
              <li className="" key={index}>
                <Link
                  href={nav.href}
                  className="flex opacity-50 hover:opacity-100 transition-all duration-300 flex-col items-center border rounded-md gap-1 py-2 px-4"
                >
                  <Icon size={16} />
                  <span>{nav.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="grid items-center gap-4 border-t pt-6 mt-6">
          <Button style={"pill"} variant={"outline"}>
            Login
          </Button>
          <Button style={"pill"} onClick={() => setOpen(!open)}>
            Register
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
