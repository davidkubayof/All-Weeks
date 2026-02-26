import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex gap-15 justify-center mt-10 items-center bg-[#151d30] shadow-lg shadow-gray-500/40 inset-shadow-gray-200 ">
        <img src="icon_l.png" alt="" />
        <p className="text-white text-2xl ">Bomb Detection Application</p>
        <p className="text-[#366d47] ">Semulation Active</p>
      </div>
    </>
  );
};

export default Header;
