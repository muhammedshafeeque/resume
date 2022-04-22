import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import './projectModal.scss'
import {FaGlobeAmericas,FaGithub} from 'react-icons/fa'
interface Iproject{
  children:any
  data:{
    name:string,
    description:string,
    LiveLink:any,
    fetures:any,
    technologi:any,
    githublink:any
       
  }
}
const  ProjectModal : React.FC<Iproject>=({children,data})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()  
  return (
      <Box>
          <span onClick={onOpen}>{children}</span>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{data.description}</p><br/>
            <Text fontWeight={'bold'} >Features:</Text>
            <Box className='modalfeture' >
            {data.fetures&&data.fetures.map((fet:any)=>{
              return <p key={fet}>{fet} , </p>
            })}
            </Box>
            <br/>
            
            <Text fontWeight={'bold'} >Technology:</Text>
            <Box className='modalfeture' >
            {data.technologi&&data.technologi.map((tec:any)=>{
              return <p key={tec}>{tec} , </p>
            })}
            </Box>
            <br />
            {data.LiveLink&&<div className='link-div' onClick={(e)=>{
              e.preventDefault()
              window.open(data.LiveLink)
            }} ><FaGlobeAmericas/> &nbsp; &nbsp; {data.LiveLink}   </div>}
            <br />
            {data.githublink&&<div className='link-div' onClick={(e)=>{
              e.preventDefault()
              window.open(data.githublink)
            }} ><FaGithub/> &nbsp; &nbsp; {data.githublink}   </div>}

            

          </ModalBody>

       
        </ModalContent>
      </Modal>
      </Box>
    
  )
}

export default ProjectModal