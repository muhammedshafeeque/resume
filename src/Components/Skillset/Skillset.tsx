import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import './skillset.scss'
import NODE from '../../Asset/Images/nodejs-1.svg'
import EXPRESS from '../../Asset/Images/express-109.svg'
import REACT from '../../Asset/Images/react-2.svg'
import MONGO from '../../Asset/Images/mongodb-icon-1.svg'
import TYPESCTIPT from '../../Asset/Images/typescript.svg'
import JAVASCRIPT from '../../Asset/Images/logo-javascript.svg'
import HTML from '../../Asset/Images/html5-2.svg'
import CSS from '../../Asset/Images/css-3.svg'
import SCSS from '../../Asset/Images/sass-1.svg'
import BOOSTRAP from '../../Asset/Images/bootstrap-5-1.svg'
import GIT from '../../Asset/Images/git.svg'
import GITHUB from '../../Asset/Images/github-icon-1.svg'
import NGINX from '../../Asset/Images/nginx-1.svg'
import EC2 from '../../Asset/Images/aws-ec2.svg'
import MUI from '../../Asset/Images/material-ui-1.svg'
import FIREBASE from '../../Asset/Images/firebase-1.svg'
import UBUNTU from '../../Asset/Images/ubuntu-4.svg'
import HANDLEBARS from '../../Asset/Images/handlebars-1.svg'
import CHAKRA from '../../Asset/Images/chakra.svg'
import DEGITALOCIAN from '../../Asset/Images/digitalocean.svg'
import { isMobile } from 'react-device-detect'
function Skillset() {
  let Skilles=[
    {
      name:'nodejs',
      link:NODE
    },
    {
      name:'expressjs',
      link:EXPRESS
    },
    {
      name:'reactjs',
      link:REACT
    },
    {
      name:'mongoDB',
      link:MONGO
    },
    {
      name:'typeScript',
      link:TYPESCTIPT
    },
    {
      name:'javascript',
      link:JAVASCRIPT
    },
    {
      name:'html',
      link:HTML
    },
    {
      name:'css',
      link:CSS
    },
    {
      name:'scss',
      link:SCSS
    }
    ,
    {
      name:'Boostrap',
      link:BOOSTRAP
    },
    {
      name:'chakra',
      link:CHAKRA
    },

    {
      name:'handlebars',
      link:HANDLEBARS
    },
    {
      name:'git',
      link:GIT
    },
    {
      name:'github',
      link:GITHUB
    },
    {
      name:'nginx',
      link:NGINX
    },
    {
      name:'ec2',
      link:EC2
    },
    {
      name:'degitalOcian',
      link:DEGITALOCIAN
    },
    {
      name:'firebase',
      link:FIREBASE
    },
    {
      name:'ubuntu',
      link:UBUNTU
    }
    

  ]
  return (
    <Box width={'100%'} padding='8px'  bgColor='#c3c7c4'> 
       
        <Box className='skillsetBoxes'>
                {Skilles&&Skilles.map((skill)=>{
                  return <Img className={isMobile?'skill-Logo-Mobile':'skill-logo'} key={skill.name}  src={skill.link}></Img>
                })}
        </Box>

    </Box>
  )
}

export default Skillset