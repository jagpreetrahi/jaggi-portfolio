import { motion } from "motion/react"
import { useMediaQuery } from 'react-responsive';
import { FaFileAlt } from "react-icons/fa";
import { useCallback, useMemo } from "react";

function HeroBar(){

  const isMediumUp = useMediaQuery({ minWidth: 768 });
  const xValue = isMediumUp ? 40 : 10;

  const content = "Hey, I'm Jagpreet Singh Rahi";
  // split the content
  const letters = useMemo(() => content.split(" "), [content])

  const downloadResume = useCallback(() => {
         const pdfFile = 'Resume_jaggi.pdf'
         const link = document.createElement('a');
         link.href = pdfFile;
         link.download = "Jagpreet_Singh.pdf"
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
    }, [])

    return (
        <>
           
          <div className="flex relative items-center flex-col-reverse md:flex-row justify-between mt-10 md:mt-24" >
             
            <div className="px-2 py-1 md:px-4 md:py-2">
                {letters.map((char, index) => {
                  return (
                    <motion.span key={index} initial={{x: -xValue, opacity:0}} animate={{x: xValue , opacity:1}} transition={{duration:0.9,  delay: index*0.3}} className="md:text-3xl text-white font-bold tracking-wider mr-3">
                      <p style={{fontFamily : "Savate", display: 'inline-block'}}>{char}</p>
                    </motion.span>
                  )
                 
                })}
                

                <div className="flex flex-col mx-4">
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
                <div className="resume-container mx-5 mt-5 ">
                  <a onClick={downloadResume} className="flex flex-row gap-4 tracking-wider text-white  justify-center text-xl">
                  Resume
                  <FaFileAlt size={20} className="my-1"/></a>
                  
                </div>


            </div>
           
        </div>
        </>
    )
}

export default HeroBar