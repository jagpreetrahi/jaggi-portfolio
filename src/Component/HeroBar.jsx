import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive';
import { BsLinkedin } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { PiSmileyMeltingFill } from "react-icons/pi";


function HeroBar(){

   const isMediumUp = useMediaQuery({ minWidth: 768 });
   const xValue = isMediumUp ? 100 : 10;

    return (
        <>
           
          <div className="flex relative items center flex-col-reverse md:flex-row justify-between mt-10 md:mt-24">
             
            <div className="md:mx-10 px-2 py-1 md:px-4 md:py-2">
                
                <motion.div initial={{x: -xValue, opacity:0}} animate={{x: xValue , opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="mx-5 md:text-3xl text-white font-bold">
                    
                  <h1 style={{fontFamily : "Savate" , letterSpacing : '3px'}}>I'm Jagpreet Singh Rahi </h1>
                  
                    
                </motion.div>

                <div className="flex flex-col mx-5 md:mx-36">
                    <span className="text-white text-xl  mt-3" style={{letterSpacing : '2px'}}>🌱 Currently in Fourth Year Of pursuing a B.E. in Computer Science student.<pre></pre>I am a Full Stack developer and Open Source Contributor at <h5>JSON Schema.</h5> </span>
                    <div className="flex flex-row gap-2">
                            <h4 className="social-follow mt-5">Follow me, here </h4>
                            <PiSmileyMeltingFill  size={30} className="mt-6 text-white relative"/>
                    </div>
                    
                    <ul className="flex flex-col  gap-2 text-lg md:gap-4 md:p-4 mx-32 mt-4">
                          <li className="mt-2">
                            <a href="https://github.com/jagpreetrahi/visualize-json-schema" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white">
                                <BsGithub  size={20}/>  
                                <span className="social-icon">Github</span>
                             </a>
                        </li>
                         <li className="mt-2">
                            <a href="https://github.com/jagpreetrahi/visualize-json-schema" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white ">
                                <BsSlack  size={20}/>
                                <span className="social-icon">Slack</span>
                            </a>
                        </li>
                         <li className="mt-2">
                            <a href="https://x.com/jsonschema" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white">
                                <BsTwitterX  size={20}/>
                                <span className="social-icon">X</span>
                            </a>
                        </li>
                         <li className="mt-2">
                            <a href="https://www.linkedin.com/company/jsonschema/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white ">
                                <BsLinkedin size={20}/>
                                <span className="social-icon">LinkedIn</span>
                            </a>
                        </li>
                   </ul>

                </div>


            </div>
            <div className="px-10 py-5 md:px-4 md:py-2 mb-9">
                <motion.img src="own.jpg" alt="profile image" initial={{x: xValue, opacity:0, rotate: -6}} animate={{x: -xValue, opacity:1 , rotate: 4}} transition={{duration:0.8, ease:"easeOut"}} className="w-52 md:w-2xl border-none rounded-lg ">
                
               </motion.img>
            </div>
             

           
              

          </div>
        </>
    )
}

export default HeroBar