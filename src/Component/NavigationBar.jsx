import { TbMoonStars } from "react-icons/tb";
import { useState } from "react";

function NavigationBar() {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="flex mt-6 flex-row items-center md:justify-around gap-2 md:gap-6">
        {/* Profile Image */}
        <div className="mx-4  flex mt-2">
          <img
            src="own.jpg"
            alt="Portfolio Image"
            className="w-10 h-10 md:w-14 md:h-14  rounded-full object-cover"
          />
        </div>

        
       {/* Mobile Toggle Button */}
        <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(true)} className="text-white left-5 px-4 py-2 bg-gray-700 rounded-xl">
                ☰ Menu
            </button>
        </div>

        {/* Navigation Menu */}
        <div className={`fixed top-0 left-0  w-full md:w-auto  h-screen bg-gray-900 text-white z-50 flex-col items-center justify-center md:static md:h-auto  md:flex md:flex-row md:rounded-3xl ${isOpen ? 'flex' : 'hidden'}`}>
        
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl md:hidden">✖</button>

            <ul className="md:mx-5 flex flex-col md:flex-row gap-6 text-lg md:gap-8 md:p-4">
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4">Home</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4">Articles</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4">Projects</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)} className="py-2 px-4">Contact</a></li>
            </ul>

        </div>


        {/* Theme Icon */}
        <div className=" rounded-3xl w-8 mr-3 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-700 flex items-center justify-center">
          <button
            className="
              text-white
              hover:text-yellow-400
              transition
              transform
              hover:scale-110
              active:-translate-y-2
              focus:outline-none
            "
            aria-label="Toggle dark mode"
            
          >
            <TbMoonStars size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
