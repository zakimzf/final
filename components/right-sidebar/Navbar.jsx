import { navbarState } from "../../atoms/navbarAtom";
import { BsFillXCircleFill } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
import { FaGithub } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { ImMail4 } from "react-icons/im";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import FAQSection from "./FAQSection";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useRecoilState(navbarState);

  const handlers = useSwipeable({
    onSwipedRight: (e) => {
      setNavbarOpen(false);
    },
  });

  return (
    <div
      className={`animate absolute z-30 flex h-full w-screen flex-col items-center justify-center overflow-x-hidden ${
        navbarOpen ? "translate-x-0" : "translate-x-full"
      } `}
      {...handlers}
    >
      <button
        className="animate close-button absolute top-5 right-5 z-30 text-xl md:text-3xl"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        <BsFillXCircleFill />
      </button>
      <FAQSection />
      
      {/* FOOTER */}
      <p className="mb-1 text-black dark:text-black">
        Made with ⌨ and 🖱
      </p>
      <p className="mb-1 text-sm text-black dark:text-black">
        Copyright © {new Date().getFullYear()} <b>Nsak.ly</b>
      </p>
    </div>
  );
};

export default Navbar;
