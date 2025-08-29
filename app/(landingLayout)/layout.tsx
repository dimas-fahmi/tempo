import React from "react";

const LandingLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <>
      {/* NavBar */}

      {/* Content */}
      {children}

      {/* Footer */}
    </>
  );
};

export default LandingLayout;
