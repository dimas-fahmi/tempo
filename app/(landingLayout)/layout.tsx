import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "@/src/ui/components/Footer";

const LandingLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <div className="px-4 md:px-6 lg:px-16 max-w-[1440px] m-auto">
      {/* NavBar */}
      <NavBar />

      {/* Content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
