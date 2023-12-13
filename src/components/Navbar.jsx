import { useState } from "react";

//icons for menu sate and brand
import { close, logo, menu } from "../assets";
// imported all navlinks present as array 
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  // to know state of hamburger  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* brand logo */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/*nav links for mobile+*/}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* mapping through navlinks array */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      
      {/* hamburger for mobile*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          // setting src based on statee
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // changing state on click
          onClick={() => setToggle(!toggle)}
        />

      {/*nav links for mobile*/}
        <div
        // keep hidden(dispaly:none) when not in toggle state else flex
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                // not discussed yet
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >  
                {/* not inderstood well yet perhaps gonaa scoll to diff sec */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
