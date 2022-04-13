import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import './contact.scss'
import {AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp,AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
function Contact() {
  return (
    <Box className='Contact'>
        
        <Box className='Contact-main'>
        <Text className='Contact-main-heading'>Contact</Text>
        <Box className='Contact-body'>
            <Box className='social-part'>
                <Box className='social-row' ><AiOutlineMail/></Box>
                <Box className='social-row' ><FiPhoneCall/></Box>
                <Box className='social-row'><AiFillLinkedin/></Box>
                <Box className='social-row'><AiFillGithub/></Box>  
                <Box className='social-row'><AiOutlineWhatsApp/></Box>  
                <Box className='social-row'><AiOutlineInstagram/></Box>  

            </Box>
            <Box className='message-part'>

            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Contact