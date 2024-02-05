import React from 'react'

import Project_1 from '../components/project/Project 1'
import Project_2 from '../components/project/Project 2'
import Project_3 from '../components/project/Project 3'
import Project_4 from '../components/project/Project 4'
const Projects1 = () => {
  return (
    <div className="flex flex-wrap w-full justify-evenly mt-10">
        <Project_1/>
        <Project_2/>
        <Project_3/>
        <Project_4/>
    </div>
  )
}

export default Projects1