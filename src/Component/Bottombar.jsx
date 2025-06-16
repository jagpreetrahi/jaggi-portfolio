function BottomBar(){

    return (
        <section className="relative w-full flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
                <h3>Jagpreet Singh Rahi</h3>
                <a href="https://github.com/jagpreetrahi/">Github</a>
                 
            </div>

            <div className="flex flex-row space-x-16 md:space-x-24">
                <div className="flex flex-col gap-2">
                    <span>Pages</span>
                     <ul>
                        <li>Home</li>
                        <li>Articles</li>
                        <li>Project</li>
                        <li>Contact</li>
                     </ul>
                </div>

                <div className="flex flex-col gap-4"> 
                    <span>Content</span>
                    <ul>
                        <li>Blog</li>
                        <li>Open Source</li>
                        
                    </ul>
                </div>

            </div>

            <div className="flex flex-col justify-end">
                <div>
                    <span>Copy-right @Jagpreet Singh. All rights reserved</span>
                </div>
               <ul className="flex flex-col  gap-2 text-lg md:gap-4 md:p-4 mx-32 mt-4">
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


        </section>
    )
}

export default BottomBar