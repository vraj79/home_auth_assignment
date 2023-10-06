import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineFlight} from 'react-icons/md'
import { BsFillSignIntersectionYFill} from 'react-icons/bs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav className="bg-tertiary-300 relative">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-tertiary-300 relative">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[124px] h-9 lg:w-[150px] lg:h-[42px] object-cover z-20 relative rounded-full"
              src="/logo.jpg"
              alt="shopify-icon"
            />
            
          </a>


          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
            <a href="#" className="navlink active-navlink font-bold">
            Home
            </a>
            <a href="#" className="navlink">
            Officers
            </a>
            <a href="#" className="navlink">
            Sections
            </a>
            <a href="#" className="navlink">
            Students
            </a>
            <a href="#" className="navlink">
            Academics
            </a>
          </div>

          {/* Button */}
          <div className="flex space-x-4">
            <BsFillSignIntersectionYFill/>
          <MdOutlineFlight/>
          <GiHamburgerMenu/>
          </div>
          
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}