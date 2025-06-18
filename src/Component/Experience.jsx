import { motion, stagger } from "motion/react";
import experience from "./../data/work-experience.json"
import { BiBriefcase } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    show : {
        transition : {
           staggerChildren: 0.9
        }
    }
}

const itemsVariants = {
    hidden: {opacity : 0, y:40},
    show: {opacity : 1 , y:0 , transition: { duration: 0.7, ease: "easeOut" }}
}

function Experience(){

    const [ref , inView] = useInView({triggerOnce : true , threshold : 0.25})
    

    return (
    <section className="py-16 px-4 " id="work-experience">
      <h2 className="text-3xl font-bold mb-10 text-blue-500 mx-10 md:mx-48 mt-2">Work Experience</h2>
        
       
      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-12"
      >
        {experience.map((exp, idx) => (
          <motion.li
            key={exp.company + idx}
            variants={itemsVariants}
            className="list-none gap-4 flex justify-center"
          >
           
            <div className="flex flex-row  mx:20 md:mx-60  gap:1 md:gap-2  bg-neutral-800 w-11/12 md:w-3/5" style={{ boxShadow: '-10px 0 15px -7px blue' }}>
                <span className="z-10 flex items-center justify-center w-9 h-9 mt-2 mr-5 px-2 py-1  border-4 border-blue-500 rounded-full shadow-md text-xl ml-4">
                   <BiBriefcase color="white" size={24}/> 
                   
                </span>
              <div className="w-full mt-2 max-h-screen">
                  <button  className="text-left">
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-gray-400">{exp.role}</p>
                      <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                      <p className="mt-4 text-gray-400">{exp.description}</p>
                      <ul className="grid grid-cols-3 md:grid-cols-5 mb-2 w-full">
                          {exp.techStack.map((tech) => (
                            <li key={tech}>
                              <span className=" rounded-md px-2 py-1  bg-neutral-700 text-white">{tech}</span>
                            </li>
                          ))}
                      </ul>
                  </button>
                  
    
                     
                   
                 
              </div>
              
              
            </div>
            
          </motion.li>
         
        ))}
         
      </motion.ul>
     
      
    </section>
  );

    
}

export default Experience;