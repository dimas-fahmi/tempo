import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";

const NavBar = () => {
  return (
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
      <ul className="flex w-full gap-4 items-center">
        <li>
          <Link href={"/"}>Upcoming</Link>
        </li>
        <li>
          <Link href={"/"}>Popular</Link>
        </li>
        <li>
          <Link href={"/"}>Today</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
      </ul>

      {/* CTA */}
      <div>
        {/* Search Button */}
        <button>CTA</button>
      </div>
    </nav>
  );
};

export default NavBar;
