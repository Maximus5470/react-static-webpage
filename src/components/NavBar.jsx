import {useState} from "react";
import {close, logo, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-[16px]">
        {navLinks.map((link, index) => (
          <li key={link.id} className={`text-white text-lg text[16px] font-normal cursor-pointer hover:text-gray-300 ${index === navLinks.length - 1 ? "mr-0" : "mr-16"}`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden justify-end items-center flex-1">
        <img src={showMenu ? menu : close} alt="menu" className="w-[24px] h-[24px]"
             onClick={() => setShowMenu(!showMenu)}/>
        <div className={`${showMenu ? "hidden" : "flex"} p-6 sidebar rounded-xl bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li key={link.id} className={`text-white text-sm text[16px] font-normal cursor-pointer hover:text-gray-300 ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;