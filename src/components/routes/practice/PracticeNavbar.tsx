import React from "react";

type Props = {};

const PracticeNavbar = (props: Props) => {
  return (
    <section className="w-full h-[60px] flex items-center">
      <button className="mr-8 rounded-md bg-[#00ffc3] text-[#212121] px-3 py-1 hover:bg-[#e1e1e1] hover:text-[#212121] transition-all duration-200">
        Description
      </button>
      <button className="rounded-md px-3 py-1 hover:bg-[#e1e1e1] hover:text-[#212121] transition-all duration-200">
        Editorial
      </button>
    </section>
  );
};

export default PracticeNavbar;
