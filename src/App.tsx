import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

import './App.scss';
import Header from './Components/Header/Header';
import shafeeque from './Asset/Images/sh.png'
import { isMobile } from 'react-device-detect';
import Skillset from './Components/Skillset/Skillset';
import PortFolio from './Components/Portfolio/PortFolio';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">

      <Box className={isMobile ? "face_section_mobile" : 'face_section'}>
        <Img src={shafeeque} />
        {/* className={isMobile?'face-Text_box_mobile':'face-Text_box' */}
        <Box className='face-Text_box'>
          <Text fontSize={isMobile ? '.9rem' : '4rem'}   >MUHAMMED SHAFEEQUE P</Text>
          <Text fontSize={isMobile ? '.5rem' : '3rem'} >MERN Stack Developer</Text>
        </Box>
      </Box>
      <Skillset />
      <PortFolio />
      <Contact />
    </div>
  );
}

export default App;
