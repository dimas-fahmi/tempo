import { Button } from "@/src/ui/shadcn/ui/button";
import Google from "@/src/ui/svg/Google";
import { KeyRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row gap-6 justify-between"
    >
      {/* Content Container */}
      <div className="flex items-center pt-4">
        {/* Content Wrapper */}
        <div className="max-w-lg space-y-7">
          <h1 className="text-5xl font-header mb-4 md:leading-14">
            Oops, Forgot To Feed The Cat Again Did You?
          </h1>
          <p className="font-sans">
            {`With Tempo you'll never forget important events anymore, wether
            it's your favorite soccer team's matchday to your
            girlfriend's birthday!
            `}
          </p>

          {/* CTA */}
          <div className="grid grid-cols-1 mt-6 items-center gap-4">
            <Button style={"pill"} size={"lg"} variant={"outline"}>
              <Google />
              <span>Continue With Google</span>
            </Button>
            <Button style={"pill"} size={"lg"}>
              <KeyRound /> Login or Register
            </Button>
          </div>
        </div>
      </div>

      {/* Illustration Container */}
      <div>
        {/* Illustration */}
        <Image
          width={500}
          height={500}
          src={
            "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/tempo/arts/illo-starving-cat.png"
          }
          alt="Hero Placeholder"
        />
      </div>
    </section>
  );
};

export default Hero;
