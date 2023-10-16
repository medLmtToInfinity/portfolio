import About from "@/components/about";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import React from "react";


const HomePage = () => {
  const experiences =[];
  
  return (
    <div>
      <About />
      {
        !!experiences.length && <Experiences />
      }
      <Projects />
      
    </div>
  )
}

export default HomePage;