
import projectData from "./../data/project.json"


function Project(){



    return (
        <section className="">
            <div className="flex flex-col">
                <div className="flex flex-col">
                       <h2 className="text-3xl font-bold mb-4 text-blue-500 mx-10 md:mx-40 mt-2">Projects</h2>
                       <span className="text-white md:mx-60 mx-10">A collection of my personal work that enhances skills in Full Stack and A.I & ML applications </span>

                </div>

                <div>
                      
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 px-4 md:px-40 py-8">
                        {projectData.map((project, idx) => (
                        <li
                            key={project.name + idx}
                            className="list-none"
                        >
           
                        <div className={`w-4/5 min-h-50 bg-neutral-800 rounded-lg shadow-lg mx-10 md:mx-20 p-4 flex flex-col justify-between ${project.gradientClass}`}>
                            <a className="w-full text-left cursor-pointer">
                            <div className="flex flex-row justify-between items-center">
                                <h3 className="text-sm font-semibold text-white">{project.name}</h3>
                                <span className={`text-gray-900 mr-2  px-2 scroll-py-1 rounded-3xl ${project.status === 'Active' ? 'bg-green-500 animate-bounce' : 'bg-blue-500' }`}>{project.status}</span>
                            </div>
                            <span className="text-gray-400  mt-2">{project.description}</span>
                            <ul className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                <li key={tech}>
                                    <span className="rounded-md px-1 py-1 bg-neutral-700 text-white text-xs font-mono">{tech}</span>
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