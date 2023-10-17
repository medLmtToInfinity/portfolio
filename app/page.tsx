import About from "@/components/about";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Separator from "@/components/separator";
import Skills from "@/components/skills";
import React from "react";


const HomePage = () => {
  
  return (
    <div>
      <About />
      <Separator />
      <Experiences />
      <Projects />
      <Separator />
      <Skills />
    </div>
  )
}

export default HomePage;