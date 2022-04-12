import { Box, Img, Text } from '@chakra-ui/react'

import './PortFolio.scss'


import crapeetalk from '../../Asset/Project/crapee-talk.png'
import ReizenHub from '../../Asset/Project/ReizenHub.png'
import OLX from '../../Asset/Project/olx.png'
import ProjectModal from '../Model/ProjectModal';
import quiz from '../../Asset/Project/onlinequiz.png'
function PortFolio() {
  let projects = [
    {
      name: "crapee-talk",
      description: "Crapee Talk  is realtime chatting application using MERN ",
      LiveLink: "https://gippme.online",
      githublink:'https://github.com/muhammedshafeeque/crapee-talks.git',
      image: crapeetalk,
      fetures: [
        "login system",
        "search user",
        "create groupe",
        "realtime chat",
        "groupe admin controle",
        "edit Profile",
      ],
      technologi: [
        "Node js",
        "Express Js",
        " MongoDb",
        "Mongoose",
        "React js",
        "Chakra ui",
        "socket.io",
        "jwt",
      ],
    },
    {
      name: "ReizenHub",
      description:
        "reize hub was  a startp idea fore travel and tours , it will improve the communication and buisiness bitween costomers and agencys ",
      LiveLink: "https://poetic-snickerdoodle-759860.netlify.app  ",
      githublink: "",
      image: ReizenHub,
      fetures: [
        "login system for costomer , Agencys",
        "admin pannel",
        "search pakages",
        "select packages",
        "add pakage",
        "edit pakage",
        "conrole pakage ",
        "rating for pakage, agencys ",
        "search order boosting ",
        "add charterd fligt ",
        "flight searching ",
        "seduling trip ",
        'controle agencys ',
        'suspend packages',
        'suspend Agency ',
        'terminate agency ',
        'email notification ',
        'smms notification',
        "etc..",
      ],
      technologi: [
        "Node js",
        "react js",
        "mongodb",
        "express.js",
        "boostrap",
        "razorpay",
      ],
    },
    {
      name: "OLX clone ",
      description: " OlX clone application using react js and firebase",
      LiveLink: "https://snazzy-rugelach-270749.netlify.app",
      githublink:'https://github.com/muhammedshafeeque/olx_clone.git',
      image:OLX,
      fetures: [
        "login system",
        "search",
        'add Product ',
        'View Product '
      ],
      technologi: [
  
        "React js",
        'Firebase'
      ],
    }
    ,
    {
      name: "Quiz Result Publication",
      description: "this Project is devoloped for an online quiz that contected by our yuth club. it will display individual marks using players mobile numbers  ",
      LiveLink: "https://vfcresult.herokuapp.com/ ",
      githublink:'https://github.com/muhammedshafeeque/quiz_result.git',
      image:quiz,
      fetures: [
        
        "search with mobile",
        "mark View",
        "Quiz View"
        
      ],
      technologi: [
        'Node js ',
        "mongo db",
        "Express handlebars"
      ],
    }
  ];
  return (
    <Box className='portfolio'>
      <Text className='project-text'>Projects</Text>
      <Box className='portfolio-main'>
        {projects.map((project) => {

          return <div key={project.name} >
            <ProjectModal data={project} >
            <Box className="project">
              <Img className='project-Image' src={project.image} />
              <Text fontWeight={'bold'}>{project.name}</Text>
            </Box>
          </ProjectModal>
          </div>

        })}


      </Box>
    </Box>
  )
}

export default PortFolio