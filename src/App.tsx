import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

import './App.scss';
import Header from './Components/Header/Header';
import shafeeque from './Asset/Images/sh.png'
import { isMobile } from 'react-device-detect';
import Skillset from './Components/Skillset/Skillset';
import PortFolio from './Components/Portfolio/PortFolio';
function App() {
  return (
    <div className="App">
      
      <Box   className={isMobile?"face_section_mobile":'face_section'}>
        <Img src={shafeeque}/>
        {/* className={isMobile?'face-Text_box_mobile':'face-Text_box' */}
        <Box className='face-Text_box'>
          <Text  fontSize={isMobile?'17px':'55px'}   >MUHAMMED SHAFEEQUE P</Text>
          <Text fontSize={isMobile?'10px':'40px'} >MERN Stack Devoloper</Text>
        </Box>


      </Box>
      <Skillset/>
      <PortFolio/>  
    </div>
  );
}

export default App;
