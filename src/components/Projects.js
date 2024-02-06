import React from 'react'

import Project_5 from '../components/project/Project5'
import Project_6 from '../components/project/Project6'
import Project_7 from '../components/project/Project7'
import Project_8 from '../components/project/Project8'
const Projects = () => {
  return (
    <div className="flex flex-wrap w-full justify-evenly mt-10">
        <Project_5/>
        <Project_6/>
        <Project_7/>
        <Project_8/>
    </div>
  )
}

export default Projects