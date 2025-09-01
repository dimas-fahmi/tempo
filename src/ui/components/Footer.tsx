"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="max-w-7xl text-card-foreground m-auto space-y-6 px-4 lg:px-0">
      {/* Content Wrapper */}
      <div className="bg-card space-y-8 text-card-foreground p-16 rounded-t-[50px] pb-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 mb-16">
          {/* Logo */}
          <div className="flex justify-center lg:block">
            <Image
              width={240}
              height={240}
              src={"/resources/Logo/Transparent/Label.png"}
              alt="Logo"
              className="invert-100"
            />
          </div>

          {/* NavLinks */}
          <ul className="flex flex-col text-card-foreground md:flex-row gap-4 items-center justify-center text-nowrap">
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Services</Link>
            </li>
            <li className="hidden xl:block">
              <Link href={"/"}>Use Cases</Link>
            </li>
            <li>
              <Link href={"/"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex justify-center items-center gap-4">
            <Image
              width={32}
              height={32}
              src={"/resources/Companies Logo/Linkedin.png"}
              alt="linkeding"
            />
            <Image
              width={32}
              height={32}
              src={"/resources/Companies Logo/Facebook.png"}
              alt="linkeding"
            />
            <Image
              width={32}
              height={32}
              src={"/resources/Companies Logo/Twitter.png"}
              alt="linkeding"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Contact and address */}
          <div className="space-y-4 text-center lg:text-start">
            <h1 className="text-xl font-semibold text-card-foreground tracking-wider">
              Contact Us
            </h1>
            <div className="opacity-70 font-light font-sans space-y-2">
              <p>example@positivus.dimasfahmi.pro</p>

              <p>+1 234-567-890</p>
              <p>123 Stree, City Name</p>
              <p>State, Country Name</p>
            </div>
          </div>

          {/* Subscribe to newsletter form */}
          <div className="p-4 px-0 lg:px-16 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="flex-grow w-full border px-4 py-2 h-16 rounded-xl"
            />
            <button className="border px-4 py-2 rounded-2xl h-16 font-header cursor-pointer">
              Subscribe to news
            </button>
          </div>
        </div>

        <hr />

        {/* More Section */}
        <div className="md:flex md:justify-between text-center lg:text-start">
          {/* Copyright section */}
          <div>{year} Tempo - Made With NextJS by Dimas Fahmi</div>

          {/* Credits Section */}
          <div>Inspired by Kaggle, Positivus and More</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
