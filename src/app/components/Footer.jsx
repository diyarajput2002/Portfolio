import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center  items-center space-x-6">
        <span>
        <Image src="/images/logo.jpg" height={50} width={50} alt=" " className="rounded-full" />
        </span>
        <p className="text-slate-600">© Laxmi Singh 2024.
        Exploring NextJS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
