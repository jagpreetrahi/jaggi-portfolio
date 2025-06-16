import React, { useEffect, useState } from "react"
import { inView, motion } from "motion/react"
import { useInView } from "react-intersection-observer";


const mySkills = [
    {name : "JavaScript" , icon : "https://skillicons.dev/icons?i=js"},
    {name : "React" , icon : "https://skillicons.dev/icons?i=react"},
    {name : "TypeScript" , icon : "https://skillicons.dev/icons?i=ts"},
    {name : "C++" , icon : "https://skillicons.dev/icons?i=cpp"},
    {name : "Express.Js" , icon : "https://skillicons.dev/icons?i=express"},
    {name : "Prisma" , icon : "https://skillicons.dev/icons?i=prisma"},
    {name : "Next.Js" , icon : "https://skillicons.dev/icons?i=nextjs"},
    {name : "MySql" , icon : "https://skillicons.dev/icons?i=mysql"},
    {name : "Mongo DB" , icon : "https://skillicons.dev/icons?i=mongodb"},
    {name : "Docker" , icon : "https://skillicons.dev/icons?i=docker"},
    {name : "Tailwind CSS" , icon : "https://skillicons.dev/icons?i=tailwind"},
    {name : "Postgres" , icon : "https://skillicons.dev/icons?i=postgres"},
]


function SkillBox({ icon, name, delay }) {
  const [playBox, setPlayBox] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setPlayBox(true), delay); // Staggered start
      
    }
  }, [inView, delay]);

  return (
    <div ref={ref} className="relative w-24 h-24 flex flex-col items-center justify-center ">
      

      {playBox && (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0 }}
          animate={{ y: -20, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10 flex flex-col items-center"
          
        >
          <img src={icon} alt={name} className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform" />
         
        </motion.div>
      )}
    </div>
  );
}


function SkillSection() {
    const [ref , inView] = useInView({triggerOnce : true})
  return (
    <div className="min-h-screen w-22 md:w-full flex flex-col items-center py-12">
      <motion.h2 ref={ref} initial={{y:-100, opacity:0}} animate={inView ? {y:-40 , opacity:1} : {}} transition={{duration:0.8, delay : '0.5'}} className="mx-auto text-3xl text-white md:text-6xl items-center font-bold  mb:10 md-mb-20 mt-14" style={{letterSpacing : '2px' , fontFamily : 'Riot'}}>Skills</motion.h2>
      <div className="grid grid-cols-4  md:grid-cols-6 gap-4">
        {mySkills.map((skill, index) => (
          <SkillBox key={skill.name} {...skill} delay={index * 300} />
        ))}
      </div>
    </div>
  );
}

export default SkillSection