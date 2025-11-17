import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Frontendlogo } from '@/../public/image.js'
import Image from 'next/image'

const Skill = [
  {
    name: 'Frontend Development',
    details: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ],
    image: Frontendlogo
  },
  {
    name: 'Backend Development',
    details: [
      'Node.js',
      'Express',
      'MongoDB',
      'SQL'
    ],

  },
  {
    name: 'fullstack Development',
    details: [
      'MERN Stack',
      'MEAN Stack',
      'Django',
      'Flask'
    ]
  },
  {
    name: 'AI features',
    details: [
      'Chatbots',
      'Image Recognition',
      'Natural Language Processing',
      'Recommendation Systems'
    ]
  }
]

function Skills() {
  return (
    <div id='skill' className='md:flex justify-evenly w-full h-screen/2 items-center bg-linear-to-b from-gray-900 via-black to-gray-900 py-20'>
      {
        Skill.map((skill, index) => (
          <Card key={index} className="md:w-[20%] md:h-[40vh] h-[30vh] backdrop-blur-3xl m-4 bg-gray-800 " style={{ backgroundImage: `url(${skill.image?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <CardHeader>
              <CardTitle className={'text-3xl font-sans uppercase'}>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className='list-disc list-inside'>
                {
                  skill.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))
                }
              </ol>
            </CardContent>
          </Card>
        ))
      }

    </div>
  )
}

export default Skills