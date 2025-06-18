import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive';



function HeroBar(){

   const isMediumUp = useMediaQuery({ minWidth: 768 });
   const xValue = isMediumUp ? 100 : 10;

    return (
        <>
           
          <div className="flex relative items-center flex-col-reverse md:flex-row justify-between mt-10 md:mt-24" >
             
            <div className="md:mx-24 px-2 py-1 md:px-4 md:py-2">
                
                <motion.div initial={{x: -xValue, opacity:0}} animate={{x: xValue , opacity:1}} transition={{duration:0.9, ease:"easeOut"}} className="mx-2 md:mx-5 md:text-3xl text-white font-bold">
                    
                  <p style={{fontFamily : "Savate" , letterSpacing : '0.5px'}}>Hey, I'm Jagpreet Singh Rahi </p>
                  
                    
                </motion.div>

                <div className="flex flex-col mx-2  md:mx-28">
                  <p className="text-white text-xl mt-3">
                    🌱 I'm currently in my fourth year of pursuing a B.E. in Computer Science.
                  </p>
                  <p className="text-white text-xl mt-0">
                    I am a Full Stack developer and Open Source Contributor at
                    <span className="text-blue-500 ml-1" style={{ letterSpacing: '1px' }}>
                      JSON Schema
                    </span>.
                  </p>
                  <p className="text-white text-xl mt-3">
                    Let's connect and create something extraordinary together!
                  </p>
                </div>


            </div>
           
        </div>
        </>
    )
}

export default HeroBar