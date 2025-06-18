import { TbMoonStars } from "react-icons/tb";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";


function NavigationBar() {


  return (
    <nav className="w-full">
      <div className="flex mt-6 flex-row  md:justify-around gap-2 md:gap-8">
        {/* Profile Image */}
        <div className="mx-4 md:mx-8  mt-10">
          <img
            src="own.jpg"
            alt="Portfolio Image"
            className="w-24 h-16 md:w-24 border-none rounded-xl "
          />
        </div>

        
       

        {/* Navigation Menu */}
        <div className="fixed top-0 left-0  w-full md:w-auto  h-screen  text-white z-50 flex-col items-center justify-center md:static md:h-auto  md:flex md:flex-row md:rounded-3xl">
        
            

            <ul className="md:mx-5 flex flex-col md:flex-row gap-6 text-lg md:gap-8 md:p-4">
                <li><a href="#"  className="py-2 px-4"><BsGithub/></a></li>
                <li><a href="#"  className="py-2 px-4"><BsLinkedin/></a></li>
                <li><a href="#"  className="py-2 px-4"><BsSlack/></a></li>
                <li><a href="#"  className="py-2 px-4"><BsTwitterX/></a></li>
              
           
            </ul>

        </div>


       
      </div>
    </nav>
  );
}

export default NavigationBar;
