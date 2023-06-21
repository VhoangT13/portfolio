import { useState, useContext } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "../themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="sticky bg-amber-50 dark:bg-gray-900 top-0 ">
      <nav className=" container mb-20 mx-auto  p-4 lg:p-5 flex items-center justify-between">
        <div>
          <a
            className="text-2xl font-bold dark:text-stone-100 text-gray-900"
            href="#"
          >
            {" <VH/> "}
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-lg text-gray-800 dark:text-stone-200 ">
          <li className="hover:border-b border-gray-800">
            <a className="px-1" href="#about">
              About
            </a>
          </li>
          <li className="hover:border-b border-gray-800">
            <a className="px-1" href="#project">
              Projects
            </a>
          </li>
          <li className="hover:border-b border-gray-800">
            <a className="px-1" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="hover:bg-orange-100/50 p-2 rounded-full"
            >
              {theme === "light" ? (
                <HiOutlineMoon className="text-2xl" />
              ) : (
                <HiOutlineSun className="text-2xl" />
              )}
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className={`${isOpen ? "hidden" : ""}dark:text-stone-200 text-4xl`}
          >
            <BiMenu />
          </button>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } absolute flex p-4 flex-col inset-0 w-full h-[40vh] backdrop-blur-sm bg-blue-200/40 dark:bg-slate-700/80 gap-8`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-5xl  self-end"
            >
              <BiX />
            </button>
            <ul className="self-center flex-1 justify-center items-center text-2xl flex flex-col gap-6">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="hover:bg-orange-100/50 p-2 rounded-full"
                >
                  {theme === "light" ? (
                    <HiOutlineMoon className="text-2xl" />
                  ) : (
                    <HiOutlineSun className="text-2xl" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
