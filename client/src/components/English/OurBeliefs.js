import React, { useEffect, useState } from 'react';
import {
  Typography,
  Paper,
  Box,
  MobileStepper,
  Button,
  styled,
  Grid,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BibleImg from '../../img/bible.jpg';

const images = [
  {
    label: 'God',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    text: 'Our Beliefs on God',
  },
  {
    label: 'Holy Spirit',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    text: 'Our Beliefs on Holy Spirit',
  },
  {
    label: 'Trinity',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    text: 'Our Beliefs on Trinity',
  },
  {
    label: 'The Bible',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    text: 'Our Beliefs on The Bible',
  },
];
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '100px 0',
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '25px',
}));
const BeliefText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 30,
}));
const HeaderGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${BibleImg})`,
  backgroundSize: '100% 400px',
  height: '40vh',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '120px',
  letterSpacing: '5px',
  color: 'white',
  justifyContent: 'center',
}));
const MyButton = styled(Button)(({ theme }) => ({
  color: theme.primary.main,
}));
export default function OurBeliefs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [beliefs, setBeliefs] = useState(images[0].text);
  const maxSteps = images.length;
  const handleNext = () => {
    if (activeStep + 1 === maxSteps) {
      setActiveStep(-1);
      setBeliefs(images[0].text);
    } else {
      setBeliefs(images[activeStep + 1].text);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep <= 0) {
      setActiveStep(maxSteps);
      setBeliefs(images[maxSteps - 1].text);
    } else {
      console.log('what up');
      setBeliefs(images[activeStep - 1].text);
    }
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
    console.log('awdfkhASDkfgSDkhfSDhf');
  };
  return (
    <div>
      <HeaderGrid container>
        <Headers>Our Beliefs</Headers>
      </HeaderGrid>
      <LiveGrid container>
        <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            <Text>Our Beliefs on...</Text>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <Grid
                key={step.label}
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: 255,
                  maxWidth: 600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography style={{ fontSize: '50px' }}>
                    {step.label}
                  </Typography>
                ) : null}
              </Grid>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <MyButton size="small" onClick={handleNext}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </MyButton>
            }
            backButton={
              <MyButton size="small" onClick={handleBack}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </MyButton>
            }
            sx={{
              '& .MuiMobileStepper-dotActive': {
                backgroundColor: '#751E25',
                borderRadius: '3px',
              },
            }}
          />
        </Box>
        {beliefs && <BeliefText>{beliefs}</BeliefText>}
      </LiveGrid>
    </div>
  );
}
