import { Box, Img, Text } from '@chakra-ui/react'

import './PortFolio.scss'


import crapeetalk from '../../Asset/Project/crapee-talk.png'
import ReizenHub from '../../Asset/Project/ReizenHub.png'
import OLX from '../../Asset/Project/olx.png'
import ProjectModal from '../Model/ProjectModal';
import quiz from '../../Asset/Project/onlinequiz.png'
import blood from '../../Asset/Project/blood.png'
import { isMobile } from 'react-device-detect'
import soppingcart from '../../Asset/Project/shopping.png'
import pmhchitty from '../../Asset/Project/pmhChitty.png'
import taskmanage from '../../Asset/Project/task.png'
function PortFolio() {
  let projects = [ 
    {
      name: "Task Manager",
      description: "Crapee Task management application using MERN stack ",
      LiveLink: "https://gippme.online",
      githublink: 'https://github.com/muhammedshafeeque/crapee-talks.git',
      image:taskmanage,
      fetures: [
        "login system",
        "logout from all divice in single click",
        "createte task",
        "finish task",
        "delete task",
       
      ],
      technologi: [
        "Node js",
        "Express Js",
        " MongoDb",
        "React js",
        "Chakra ui",
        "jwt",
      ],
    },
    {
      name: "crapee-talk",
      description: "Crapee Talk is real time chatitng application using MERN stack ",
      LiveLink: "https://gippme.online",
      githublink: 'https://github.com/muhammedshafeeque/Task-Manager.git',
      image: crapeetalk,
      fetures: [
        "login system",
        "search user ",
        "create group",
        "real time chat",
        "group admin control",
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
        "reizen hub was a startup idea fore travel and tours , it will improve the communication and business between costumers and agency ",
      LiveLink: "https://poetic-snickerdoodle-759860.netlify.app  ",
      githublink: "",
      image: ReizenHub,
      fetures: [
        "login system for costumer", "Agency",
        "admin panel",
        "search packages",
        "select packages",
        "add package ",
        "edit package",
        "manage package",
        "rating for package", "agency",
        "search order boosting",
        "add charted flight",
        "flight searching ",
        "scheduling trip",
        "control agency",
        "suspend packages",
        "suspend Agency ",
        "terminate agency",
        "email notification",
        "sms notification",
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
      githublink: 'https://github.com/muhammedshafeeque/olx_clone.git',
      image: OLX,
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
    },
    {
      name: "Quiz Result Publication",
      description: "this Project is developed for an online quiz that contected by our youth club. it will display individual Marks using player mobile Numbers ",
      LiveLink: "https://vfcresult.herokuapp.com/ ",
      githublink: 'https://github.com/muhammedshafeeque/quiz_result.git',
      image: quiz,
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
    },
    {
      name: "SKSSF AMAPPOYIL BLOOD",
      description: "This is developed for SKSSF AMAPPOYIL UNIT for blood donation  ",
      LiveLink: "https://skssfamappoyil.herokuapp.com/ ",
      githublink: 'https://github.com/muhammedshafeeque/skssfamappoyil.git',
      image: blood,
      fetures: [

        "Search blood with blood group",
        "Donate Blood",


      ],
      technologi: [
        'Node js ',
        "mongo db",
        "Express handlebars"
      ],
    },
    {
      name: "CRAPEE STORE",
      description: "Crapee store is a chatting application made by node.js , Express js, mongo db , Handle bars",
      LiveLink: "",
      githublink: 'https://github.com/muhammedshafeeque/shopingcart.git',
      image: soppingcart,
      fetures: [
        "Login System",
        "Admin Controle",
        "Add Product",
        "Delete Product",
        "Edit Product",
        "add items to the cart ",
        "remove from cart",
        "edit product count in cart",
        "place order ",
        "List Oders",
        "online Payment ",
        "cash on Delivery"
      ],
      technologi: [
        'Node js ',
        "mongo db",
        "Express js",
        "Express handlebars",
        "razor Pay ",
        "Ajax"
      ],
    }
    ,
    {
      name: "PMH CHITTY ",
      description: "PMH CHITTY is a chitty management application made by node.js , Express js, mongo db , Handle bars",
      LiveLink: "",
      githublink: 'https://github.com/muhammedshafeeque/pmh-chitty.git',
      image: pmhchitty,
      fetures: [
        "Login System",
        "Admin Controle",
        "Add Member",
        "Create Groupe",
        "Edit Admin",
        "add members to groupe",
        "Make Chitty",
        "Payement register",
        "View Member Profile",
        "etc"

      ],
      technologi: [
        'Node js ',
        "mongo db",
        "Express js",
        "Express handlebars",
        "Ajax"
      ],
    }

  ];
  return (
    <Box className='portfolio'>
      <Text className='project-text'>Projects</Text>

      <Box className='portfolio-main'>
        {projects.map((project) => {

          return <Box ml={isMobile ? '7%' : '0'} key={project.name} >
            <ProjectModal data={project} >
              <Box className="project">
                <Img className='project-Image' src={project.image} />
                <Text fontWeight={'bold'}>{project.name}</Text>
              </Box>
            </ProjectModal>
          </Box>

        })}


      </Box>
    </Box>
  )
}

export default PortFolio