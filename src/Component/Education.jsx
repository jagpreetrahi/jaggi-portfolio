import { motion, stagger } from "motion/react";
import educationData from "./../data/education.json"
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

function Education(){

    const [ref , inView] = useInView({triggerOnce : true , threshold : 0.25})

    return (
    <section className="py-16 px-4 " id="work-experience">
      <h2 className="text-3xl font-bold mb-10 text-white mx-10 md:mx-40 mt-12" style={{letterSpacing : '3px' , fontFamily :'Roboto , sans-serif'}}>Education</h2>
        
       
      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-8 w-full"
      >
        {educationData.map((exp, idx) => (
          <motion.li
            key={exp.education + idx}
            variants={itemsVariants}
            className="list-none"
          >
           
            <div className="flex flex-row  mx:20 md:mx-80  gap:6 md:gap-12">
                <span className="z-10 flex items-center justify-center w-11 h-11 mr-5 px-2 py-1  border-4 border-blue-500 rounded-full shadow-md text-2xl ml-10">
                   <BiBriefcase color="white" size={24}/>
                   
                </span>
              <div className="md:w-full">
                <h3 className="text-xl font-semibold">{exp.education}</h3>
                <p className="text-gray-600">{exp.college}</p>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              <p className="mt-4 text-gray-700">{exp.percentage}</p>
              </div>
              
            </div>
            
          </motion.li>
        ))}
      </motion.ul>
      
    </section>
  );

    
}

export default Education;