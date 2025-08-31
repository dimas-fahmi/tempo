import { Button } from "@/src/ui/shadcn/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row gap-6 justify-between"
    >
      {/* Content Container */}
      <div className="flex items-center">
        {/* Content Wrapper */}
        <div className="max-w-lg space-y-7">
          <h1 className="text-4xl font-header mb-4">
            Don't Lose Track, Keep It Ticking!
          </h1>
          <p className="font-sans">
            With Tempo you'll never forget important events anymore, wether it's
            your favorite soccer team's matchday to your girlfriend's birthday!
          </p>

          {/* CTA */}
          <div className="grid grid-cols-2 mt-6 items-center gap-4">
            <Button style={"pill"} variant={"outline"}>
              Login
            </Button>
            <Button style={"pill"}>Register</Button>
          </div>
        </div>
      </div>

      {/* Illustration Container */}
      <div>
        {/* Illustration */}
        <Image
          width={500}
          height={500}
          src={"/resources/Illustration Arts/hero-placeholder.png"}
          alt="Hero Placeholder"
        />
      </div>
    </section>
  );
};

export default Hero;
