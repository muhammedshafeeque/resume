import { Box, Button, FormControl, FormHelperText, FormLabel, Input, StackDivider, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import './contact.scss'
import { AiOutlineMail, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { isMobile } from 'react-device-detect'
function Contact() {
  return (
    <Box className='Contact'>

      <Box className='Contact-main'>
        <Text className='Contact-main-heading'>Contact</Text>
        <Box className='Contact-body'>
          <Box className='social-part'>
            <Box className='social-row' ><AiOutlineMail /> {!isMobile && <Text ml={'10px'}>shafeequekkv95@gmail.com</Text>}</Box>
            <Box className='social-row' ><FiPhoneCall />{!isMobile && <Text ml={'10px'}> +918075806497 </Text>}</Box>
            <Box className='social-row'><AiFillLinkedin />{!isMobile && <Text ml={'10px'}> https://in.linkedin.com/in/muhammed-shafeeque-p-6244a7124</Text>}</Box>
            <Box className='social-row'><AiFillGithub /> {!isMobile && <Text ml={'10px'}> https://github.com/muhammedshafeeque </Text>} </Box>
            <Box className='social-row'><AiOutlineWhatsApp />{!isMobile && <Text ml={'10px'}> +918075806497 </Text>}</Box>
            {/* <Box className='social-row'><AiOutlineInstagram /></Box> */}

          </Box>
  <Box pl={'15%'} width={isMobile?'80%':'60%'} className='message-part'>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
              <FormControl>
                <FormLabel htmlFor='email' placeholder='Enter Email'>Email address</FormLabel>
                <Input id='email'  type='email' />
             
                <FormLabel htmlFor='text'>Message</FormLabel>
                <Textarea placeholder='Enter Your Message' />
              </FormControl>
              <Button colorScheme={'blue'} >Submit</Button>
            </VStack>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Contact