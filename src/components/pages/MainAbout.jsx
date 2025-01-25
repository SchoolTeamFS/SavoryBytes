import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutChef from './about';
import img from '../images/img/cuisine.jpg';

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #B55D51;
  bottom: 0;
  right: 50%;
  width: ${props => (props.startAnimation ? '50%' : '0%')};
  height: ${props => (props.startAnimation ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Center = styled.div`
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  position: absolute;
  top: 20px;
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  color: ${props => props.theme.text};
  text-align: center;
  font-family: 'Karla', sans-serif;
  transition: opacity 1s ease;
  opacity: ${props => (props.startAnimation ? 1 : 0)};
`;

const Button = styled(motion.button)`
  color: #B55D51;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1200px;
  transition: background-color 0.3s ease;

`;

const DetailsSection = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease;
  padding: 20px;
  flex-direction: row;
  text-align: left;
`;

const ChefImage = styled.img`
  height: 500px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
`;

const StoryText = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  margin: 20px 0;
  line-height: 1.6;
`;

const Main = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const detailsRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    setIsAnimatingOut(true);

    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        setTimeout(() => {
          detailsRef.current.style.opacity = '1';
        }, 500);
      }
    }, 500);
    setShowDetails(true);
  };

  return (
    <div id="test">
      {!showDetails && (
        <MainContainer>
          <DarkDiv startAnimation={startAnimation} />
          <Content startAnimation={startAnimation}>
            <motion.div
              className="MainContainer"
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <AboutChef />
            </motion.div>
          </Content>
          <Center>
            <Button
              onClick={handleScroll}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              More details
            </Button>
          </Center>
        </MainContainer>
      )}
      {showDetails && (
        <DetailsSection
          ref={detailsRef}
          id="details"
          style={{ opacity: isAnimatingOut ? '0' : '1' }}
        >
          <ChefImage src={img} alt="Chef in the Kitchen" />
          <div>
            <h2>Chef’s Journey Details</h2>
            <StoryText>
              From a young age, I was always surrounded by food and family
              gatherings. Cooking wasn't just a task but a way to express love
              and connect with others. Over the years, I honed my skills, working
              in renowned kitchens and learning from some of the best in the
              industry. But there was always a part of me that wanted to create
              something of my own.
            </StoryText>
            <StoryText>
              That's how <strong>SavoryBites</strong> came to life—born from my
              passion for transforming simple ingredients into extraordinary
              experiences. The name reflects the heart of my cooking: each bite
              should be full of flavor, warm, and comforting, but also innovative
              and exciting. I want every recipe to inspire others to embrace their
              own culinary creativity and discover the joy of cooking.
            </StoryText>
            <StoryText>
              I chose to share my journey and recipes with the world through
              SavoryBites because food has a unique way of bringing people
              together. With every dish, my aim is to create memorable moments,
              not just meals. Join me on this flavorful adventure!
            </StoryText>
          </div>
        </DetailsSection>
      )}
    </div>
  );
};

export default Main;
