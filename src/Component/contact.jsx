import { useState } from "react"
import { FaFileAlt } from "react-icons/fa";


const Contact = () => {

    const [isClick , setIsClick] = useState(false);
    const getContent = () => setIsClick(true);
    const onClose = () => setIsClick(false);

    return (
        <>
            <section >
             <div className="w-fit px-4 py-2 md:w-2/4 mx-auto h-fit border mt-5 rounded-lg mb-10">
                 <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center mt-3 mb-2">
                         <h4 className="contact">Let's Work Together</h4>
                         <span className="contact-msg">Get In Touch?</span>
                    </div>

                    <button onClick={getContent} className="bg-blue-700 text-white px-2 py-1 md:px-4 md:py-2 rounded-xl mb-3">Contact</button>

                 </div>
             </div>
            </section>
            <ContactDetail isClick={isClick} onClose={onClose}/>
        </>
      
    )
}

const ContactDetail = ({isClick, onClose}) => {

    const resumeDownload = () => {

    }
    return (
        isClick && (
            <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-neutral-700 w-fit h-fit md:h-2/4 md:w-2/4 p-8 rounded-lg shadow-lg relative">
                    <button onClick={onClose} className="absolute top-2 right-4 text-white border px-2 py-1">X</button>
                    <div className="flex flex-col">
                        <span className="mx-auto text-white" style={{letterSpacing : '2px' , fontFamily : 'Roboto, sans-serif' , fontSize : '20px'}}>Let's connect😊</span>
                         <ul className="grid grid-cols-1 md:grid-cols-3 justify-around gap-8 md:gap-16 mt-5">
                             <li>
                                 <div id="detail" className="w-full px-2 py-1 md:mx-4 md:py-2 rounded-md h-fit bg-blue-400 flex flex-col">
                                      <span className="contact-details">Email</span>
                                      <a href="mailto:jagpreet1615@gmail.com&subject=Welcome, dear" className="underline text-gray-900">@jagpreetsingh</a>
                                 </div>
                             </li>
                             <li>
                                <div id="detail"  className="w-full px-2 py-1 md:mx-4 md:py-2 rounded-md h-fit bg-blue-400 flex flex-col">
                                      <span className="contact-details">Linked In</span>
                                      <a href="https://www.linkedin.com/in/jagpreet-singh-rahi-877396257/" className="underline text-gray-900">@jagpreetsingh</a>
                                 </div>
                             </li>

                             <li>
                               <div id="detail"  className="w-full px-2 py-1 md:mx-4 md:py-2 rounded-md h-fit bg-blue-400 flex flex-col transition: background 0.4s ease;">
                                      <span className="contact-details">Github</span>
                                      <a href="https://github.com/jagpreetrahi" className="underline text-gray-900">@jagpreetsingh</a>
                                 </div>
                             </li>

                             <li>
                              <div id="detail"  className="w-full px-2 py-1 md:mx-4 md:py-2 rounded-md h-fit bg-blue-400 flex flex-col">
                                      <span className="contact-details">Phone</span>
                                      <a href="tel:+91 9528629522" className="underline text-gray-900">+91 9528629522</a>
                                 </div>
                             </li>
                             <li>
                              <div id="detail"  className="w-full px-2 py-1 md:mx-4 md:py-2 rounded-md h-fit bg-blue-400 flex flex-col">
                                      <FaFileAlt color="white"/>
                                      <button onClick={resumeDownload} className="contact-details">
                                            Resume
                                        </button>
                                      
                                 </div>
                             </li>

                         </ul>
                    </div>
                </div>
            </div>
        )
    )
}

export default Contact