import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../images/img/chef.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  display: flex;
  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
  );
  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 50%;
    border-left: 2px solid white;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  height: 365px;

  #img {
    
    transform: translateX(-50%);
    width: 55%;
    height: 434px;
    border-top: 5px solid #b55d51;
    border-right: 5px solid #b55d51;
    border-bottom: 5px solid #b55d51;
    border-left: 0px;
  }
`;

const Text = styled.div`
  color: white;
  padding: 2rem;
  left:15%;
  display: flex;
  height: 434px;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  opacity: 0;
  animation: fadeInText 3s forwards;

  border-top: 5px solid white;
  border-right: 0px solid white;
  border-bottom: 5px solid white;
  border-left: 5px solid white;

  @keyframes fadeInText {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  
`;
const Button = styled.button`
  background-color: white;  /* Couleur du fond */
  color: #B55D51;  /* Texte en blanc */
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9C4E3B;  /* Couleur du fond au survol */
  }
`;


const AboutChef = () => {
  return (
    <div>
      <Box
      initial={{ height: 0 }}
      animate={{ height: '60vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
      <Text>
        <h1>Welcome,</h1>
        <h2>Meet the Chef Behind SavoryBites,</h2>
        <h3>Every dish is a story, and I’m here to tell it.</h3> 
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          id="img"
          initial={{ opacity: 0, y: 50 }} // La div commence invisible et légèrement en dessous.
          animate={{ opacity: 1, y: 0 }} // La div devient visible et remonte.
          transition={{
            duration: 1.5, // Durée de l'animation.
            delay: 1, // Délai avant que l'animation ne commence.
          }}
        >
          <img
            className="pic"
            style={{ marginLeft: '50px', width: '100%',position:'relative',left:'21%', bottom:'10%', height:'482px' }}
            src={img}
            alt="Jenn Segal"
          />
        </motion.div>
        
      </SubBox>
    </Box>
    
    </div>
    
  );
};

export default AboutChef;
