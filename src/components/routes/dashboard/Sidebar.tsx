import Link from "next/link";
import React from "react";
import Logo from "src/lib/assets/logo.svg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="w-60 h-screen bg-[#272727] px-4 pt-10 flex flex-col items-center">
      <Link
        href="/"
        className="text-2xl sm:text-3xl flex font-semibold justify-center items-center lg:justify-start mb-10"
      >
        <Logo className="w-8 h-8 mr-2" />
        <span className="text-white">Code</span>
        <span className="text-[#00ffc2]">G</span>
      </Link>
      <div className="w-full py-3 border-b border-[#f1f1f1] border-solid">
        <Link href="/" className="w-full cursor-pointer">
          <div className="w-full py-2 mb-1 rounded-lg hover:bg-[#e1e1e1] hover:text-[#212121] hover:pl-3 transition-all duration-500">
            Home
          </div>
        </Link>
        <Link href="/dashboard" className="w-full cursor-pointer">
          <div className="w-full py-2 pl-3 rounded-lg bg-[#00ffc3] hover:bg-[#f1f1f1] text-[#212121] transition-all duration-500">
            Dashboard
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
