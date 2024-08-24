import React from "react";
import Image from "next/image";

interface LoaderProps {
  logoSrc: string;
}

const Loader: React.FC<LoaderProps> = ({ logoSrc }) => {
  return (
    <div className="loader">
      <div className="loader-circle"></div>
      <div className="loader-logo">
        <Image src={logoSrc} alt="Loading logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Loader;
