function BottomBar(){

    return (
        <section className="relative w-full flex flex-col md:flex-row justify-between mb-5">
            <div className="flex flex-col mx-4 md:mx-8">
                <h3 className="text-white" style={{letterSpacing : '3px', fontSize: '25px'}}>Jagpreet Singh Rahi</h3>
                <span  className="text-white mt-1" style={{letterSpacing : '2px' , fontSize : '15px'}}>Copy-right @Jagpreet Singh. All rights reserved</span>
                
                 
            </div>

            <div className="flex flex-col space-x-10 md:space-x-24 mt-3 ">
                <div className="flex flex-row  justify-around">
                    <div className="flex flex-col gap-2">
                        <span className="pages">Pages</span>
                        <ul>
                            <li className="pages">Home</li>
                            <li className="pages">Articles</li>
                            <li className="pages">Project</li>
                            <li className="pages">Contact</li>
                        </ul>
                   </div>
                   <div className="flex flex-col gap-2 ">
                        <span className="content">Content</span>
                        <ul>
                            <li className="content">Blog</li>
                            <li className="content">Open Source</li>
                            
                        </ul>
                    </div>
                </div>
               

               

                <div className="relative mr-12 ">
                
                    <ul className="flex flex-row  gap-2 text-lg md:gap-4 md:p-4 mt-2 mr-5">
                            <li className="mt-2">
                                <a href="https://github.com/jagpreetrahi/" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white">
                                    
                                    <span className="social-icon">Github</span>
                                </a>
                            </li>
                            
                            <li className="mt-2">
                                <a href="https://x.com/jsonschema" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white">
                                
                                    <span className="social-icon">X</span>
                                </a>
                            </li>
                            <li className="mt-2">
                                <a href="https://www.linkedin.com/company/jsonschema/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-full  flex flex-row  items-center gap-1 sm:gap-2 sm:px-2 md:px-4 md:py-2 sm:py-1 text-sm sm:text-md  md:text-base    px-2 py-1  text-white ">
                                
                                    <span className="social-icon">LinkedIn</span>
                                </a>
                            </li>
                    </ul>
                </div>

            </div>

          


        </section>
    )
}

export default BottomBar