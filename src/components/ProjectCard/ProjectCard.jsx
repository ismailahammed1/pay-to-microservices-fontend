import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({item}) => {
  return (
    <div className='projectCard'>
        <img src={item.img} alt="" />
        <div className='info'>
        <img src={item.pp} alt="" />
            <div className='text'>
                <h1>{item.cat}</h1>
                <span>{item.username}</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard