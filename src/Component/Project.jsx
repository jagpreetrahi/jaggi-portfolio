
import { useCallback, useMemo, useState } from "react"
import projectData from "./../data/project.json"
import { motion } from "motion/react"


function Project(){

   const content = "A collection of my personal work that enhances skills in Full Stack and A.I & ML applications.";

   // split the content
   const letter = useMemo(() => content.split(""), [content])

 

    return (
        <section>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold mb-4 text-blue-500 mx-5 mt-2 tracking-wider">Projects</h2>
                    <div className=" text-white text-lg mx-10">
                        {letter.map((char, index) => {
                            return (
                                <motion.span
                                    key={index}
                                    initial={{opacity:0, y: 20}}
                                    whileInView={{opacity:1, y:0}}
                                    transition={{delay: index * 0.1, duration: 0.2}}
                                    viewport={{once : true}}
                                > 
                                {char}
                                </motion.span>
                            )
                         
                        })}
                    </div>

                </div>

                <div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4  py-8">
                        {projectData.map((project, idx) => (
                        <li
                            key={project.name + idx}
                            className="list-none"
                        >
           
                        <div  className={`project-container w-full h-full bg-neutral-800 rounded-lg shadow-lg mx-5 p-4 flex flex-col justify-between ${project.gradientClass}`}>
                            <a href={project.url} target="_blank" className="w-full text-left cursor-pointer">
                            <div className="flex flex-row justify-between items-center">
                                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                                {/* <span className={`text-gray-900 mr-2  px-2 scroll-py-1 rounded-3xl ${project.status === 'Active' ? 'bg-green-500 animate-bounce' : 'bg-blue-500' }`}>{project.status}</span> */}
                            </div>
                            <span  className="text-gray-400  mt-4">{project.description}</span>
                            <ul className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech) => (
                                <li key={tech}>
                                    <span className="rounded-md px-1 py-1  bg-neutral-700 text-white text-xs font-mono">{tech}</span>
                                </li>
                                ))}
                            </ul>
                            </a>
                        </div>
                            
            
                        </li>
                        ))}
                   </ul>

                </div>

            </div>

        </section>
    )

}

export default Project