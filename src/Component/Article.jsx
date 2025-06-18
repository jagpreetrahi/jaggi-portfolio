import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const articleData = [{
    name: "My GSoC Community Bonding Journey with JSON Schema", img: "gsoc.png", url: 'https://medium.com/@jagpreet1615/my-gsoc-community-bonding-journey-with-json-schema-98d92f15d815'
},{
    name : "Transaction in Database" , img:"transaction.jpg" , url : 'https://jaggyblogs.hashnode.dev/transaction-in-databases'
}, {
    name : "Coercion in JavaScript" , img:"coercion.png", url : 'https://jaggyblogs.hashnode.dev/coercion-in-javascript'
}]

function ShowArticles(){

    const [ref , inView] = useInView({triggerOnce : true})
      return (
        <div className="w-22 md:w-full flex flex-col  py-12">
          <motion.h2 ref={ref} initial={{y:-100, opacity:0}} animate={inView ? {y:-40 , opacity:1} : {}} transition={{duration:0.8, delay : '0.5'}} className="mx-10 md:mx-40 text-2xl text-blue-500 md:text-5xl items-center font-bold  mb:2 md-mb-24 mt-24" style={{letterSpacing : '2px' , fontFamily : 'Riot'}}>Articles</motion.h2>
          <div className="grid grid-cols-1 mt-5  mx-10 md:mx-20 md:grid-cols-3 gap-4 md:gap-8 mb-2  md:mb-4">
            {articleData.map((data, index) => (
              <Article key={data.name} img= {data.img} name={data.name} url={data.url} delay={index * 300} />
            ))}
          </div>
        </div>
      );
}

function Article({img, name, url , delay}){

    const [playcontainer, setPlayContainer] = useState(false);
    const [ref , inView] = useInView({triggerOnce : true})

    useEffect(() => {
        if(inView){
            setTimeout(() => setPlayContainer(true), delay)
            
        }
    }, [inView , delay])
  
    return (
        <div className="relative  flex flex-col md:w-full items-center   transition
            transform
            hover:scale-110
            active:-translate-y-2
            focus:outline-none" ref={ref}>
           
           {playcontainer && (
              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0 }}
                animate={{ y: -20, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col relative items-center
                    px-2 py-1 md:px-4 md:py-2
                     mx-14 md:mx-8
                    w-48 h-64 md:w-64 md:h-80
                    max-w-64 max-h-80
                    overflow-hidden
                "

              >
                <img src={img}  className="w-32 h-32 md:w-44 md:h-44  mt-2" />
                <a href={url} target="_blank"  className="text-blue px-2 py-1  md:px-4 md:py-2 font-medium text-center mt-4 text-white" style={{letterSpacing : '3px', fontFamily : 'Savate , sans-serif'}}>
                    {name}
                </a>
              </motion.div>
           )} 
           
        </div>
    )
}




export default ShowArticles