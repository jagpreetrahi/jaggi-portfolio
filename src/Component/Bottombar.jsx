import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

function BottomBar(){

    return (
        <section className="relative w-full flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col mx-4 md:mx-8 mt-5">
                <h3 className="text-white" style={{letterSpacing : '2px', fontSize: '20px'}}>Jagpreet Singh Rahi</h3>
                <span  className="text-white mt-1" style={{letterSpacing : '1px' , fontSize : '12px'}}>© Jagpreet Singh. All rights reserved.</span>
                
                 
            </div>

            <div className="flex flex-row justify-end md:space-x-24 mt-3 ">
                
               <div className="relative mr-12 ">
                
                    <ul className="flex flex-row  gap-3 text-lg md:gap-6 md:p-4 mt-2 md:mr-5">
                        <li><a href="https://github.com/jagpreetrahi" target="_blank"  className="px-2 py-1 md:py-2 md:px-4"><BsGithub color="white" size={20}/></a></li>
                        <li><a href="https://www.linkedin.com/in/jagpreet-singh-rahi-877396257/" target="_blank"  className="px-2 py-1 md:py-2 md:px-4"><BsLinkedin color="white" size={20}/></a></li>
                        <li><a href="https://www.instagram.com/jatt_jaggy/"  className="px-2 py-1 md:py-2 md:px-4"><BsInstagram color="white" size={20}/></a></li>
                        <li><a href="https://x.com/jagpreet_rahi"  target="_blank" className="px-2 py-1 md:py-2 md:px-4"><BsTwitterX color="white" size={20}/></a></li>
                    </ul>
                </div>

            </div>

          


        </section>
    )
}

export default BottomBar