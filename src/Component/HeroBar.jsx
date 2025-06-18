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
                
                <motion.div initial={{x: -xValue, opacity:0}} animate={{x: xValue , opacity:1}} transition={{duration:0.9, ease:"easeOut"}} className="mx-5 md:text-3xl text-white font-bold">
                    
                  <h1 style={{fontFamily : "Savate" , letterSpacing : '3px'}}>Hey, I'm Jagpreet Singh Rahi </h1>
                  
                    
                </motion.div>

                <div className="flex flex-col mx-5 md:mx-28">
                    <span className="text-white text-xl  mt-3" style={{letterSpacing : '2px'}}>🌱 I'm Currently in Fourth Year Of pursuing a B.E. in Computer Science student. <pre></pre>I am a Full Stack developer and Open Source Contributor at <span className=" text-blue-500" style={{letterSpacing :'3px'}}>JSON Schema</span>.
                    <pre></pre>I'm excited to connect with fellow professionals, explore collaboration opportunities, and contribute to impactful projects. Let's connect and create something extraordinary together!</span>
                   
                    
                  

                </div>


            </div>
           
        </div>
        </>
    )
}

export default HeroBar