import Link from "next/link";
import React from "react";
import Logo from "src/lib/assets/logo.svg";

type Props = {};

const IdeNavbar = (props: Props) => {
  return (
    <div className="w-screen h-[8vh] bg-[#202225] flex items-center justify-between px-4">
      <Link
        href="/"
        className="text-2xl sm:text-3xl flex font-semibold justify-center items-center lg:justify-start"
      >
        <Logo className="w-8 h-8 mr-2" />
        <span className="text-white">Code</span>
        <span className="text-[#00ffc2]">G</span>
      </Link>

      <button className="text-sm sm:text-base border-2 px-4 py-2 rounded-md self-center text-white hover:bg-[#00ffc3] hover:border-[#00ffc3] hover:text-[#303136] ease-in duration-100">
        Sign in
      </button>
    </div>
  );
};

export default IdeNavbar;
