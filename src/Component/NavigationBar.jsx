import { TbMoonStars } from "react-icons/tb";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { PiSmileyMeltingFill } from "react-icons/pi";

function NavigationBar() {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="flex mt-6 flex-row items-center md:justify-around gap-2 md:gap-6">
        {/* Profile Image */}
        <div className="mx-16 md:mx-2  mt-10">
          <img
            src="own.jpg"
            alt="Portfolio Image"
            className="w-24 h-16 md:w-24 border-none rounded-xl "
          />
        </div>

        
       {/* Mobile Toggle Button */}
        <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(true)} className="text-white left-5 px-4 py-2 bg-gray-700 rounded-xl">
                ☰ Menu
            </button>
        </div>

        {/* Navigation Menu */}
        <div className={`fixed top-0 left-0  w-full md:w-auto  h-screen  text-white z-50 flex-col items-center justify-center md:static md:h-auto  md:flex md:flex-row md:rounded-3xl ${isOpen ? 'flex' : 'hidden'}`}>
        
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl md:hidden">✖</button>

            <ul className="md:mx-5 flex flex-col md:flex-row gap-6 text-lg md:gap-8 md:p-4">
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4"><BsGithub/></a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4"><BsLinkedin/></a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4"><BsSlack/></a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4"><BsTwitterX/></a></li>
              
                <li><button
                      className="
                        text-white
                        text-lg
                         py-2 px-4
                        transition
                        transform
                        hover:scale-110
                        active:-translate-y-2
                     
                        
                      "
                      aria-label="Toggle dark mode"
            
                    >
                       <TbMoonStars size={20} />
                    </button>
                  </li>
            </ul>

        </div>


       
      </div>
    </nav>
  );
}

export default NavigationBar;
