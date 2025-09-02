import { useCallback } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";



function NavigationBar() {

  return (
    <nav className="w-full">
      <div className="flex mt-6 flex-row  md:justify-around gap-2 md:gap-8">
        {/* Profile Image */}
        <div className="mx-10  mt-2">
          <img
            src="own.jpg"
            alt="Portfolio Image"
            className="w-24 h-auto md:w-1/4 border-none rounded-xl "
          />
        </div>

        {/* Navigation Menu */}
        <div className="text-white ml-auto md:ml-0 mr-5 md:mr-12">
          <ul className="md:mx-5 flex flex-row  gap-6 text-lg md:gap-10 md:p-4">
            <li><a href="https://github.com/jagpreetrahi"  target="_blank"  className="px-2 py-1 md:py-2 md:px-4"><BsGithub size={25}/></a></li>
            <li><a href="https://www.linkedin.com/in/jagpreet-singh-rahi-877396257/" target="_blank"  className="px-2 py-1 md:py-2 md:px-4"><BsLinkedin size={25}/></a></li>
            <li><a href="https://www.instagram.com/jatt_jaggy/"  className="px-2 py-1 md:py-2 md:px-4"><BsInstagram size={25}/></a></li>
            <li><a href="https://x.com/jagpreet_rahi"  target="_blank" className="px-2 py-1 md:py-2 md:px-4"><BsTwitterX size={25}/></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
