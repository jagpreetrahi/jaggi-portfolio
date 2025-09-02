import { motion} from "motion/react";
import experience from "./../data/work-experience.json"
import { BiBriefcase } from "react-icons/bi";
import { useInView } from "react-intersection-observer";


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
      <h2 className="text-3xl font-bold mb-10 text-blue-500 mx-2 mt-2">Work Experience</h2>
        
       
      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-8 justify-center"
        
      >
        {experience.map((exp, idx) => (
          <motion.li
            key={exp.company + idx}
            variants={itemsVariants}
             className="flex-2"
          >
          <div className="experience-container flex items-start mx-20 md:mx-auto  rounded-lg bg-neutral-800">
              <span className="z-10 flex items-center  w-9 h-9 mt-2 mr-3 px-2 py-1  border-4 border-blue-500 rounded-full shadow-md text-xl ml-4">
                <BiBriefcase color="white" size={24}/> 
                   
              </span>
              <div className=" mt-2">
                  <a  className="text-left cursor-pointer">
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-gray-400 mt-2">{exp.role}</p>
                      <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                      <p className="mt-2 text-gray-400 mr-1">{exp.description}</p>
                      <ul className="flex flex-wrap gap-2 mt-3 mb-5">
                          {exp.techStack.map((tech) => (
                            <li key={tech}>
                              <span className="rounded-md px-2 bg-neutral-700 text-white">{tech}</span>
                            </li>
                          ))}
                      </ul>
                  </a>
                </div>
            </div>
            
          </motion.li>
         
        ))}
         
      </motion.ul>
     
      
    </section>
  );

    
}

export default Experience;