import React, { useState } from 'react';
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
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
const LiveGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  backgroundColor: theme.accent.main,
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
const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '50px',
  backgroundImage: `url(${BibleImg})`,
  backgroundSize: '100% 400px',
  maxWidth: '100%',
  minHeight: '400px',
  color: 'white',
}));
const MyButton = styled(Button)(({ theme }) => ({
  color: theme.primary.main,
}));
export default function OurBeliefs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    console.log(maxSteps);
    if (activeStep + 1 === maxSteps) {
      setActiveStep(-1);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  console.log(activeStep);
  const handleBack = () => {
    if (activeStep <= 0) {
      console.log('show');
      setActiveStep(maxSteps);
    }
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <div>
      <Headers>
        Beliefs <br />
        Jesus is the foundation of our beliefs. Below you will see where else
        are beliefs stem from.
      </Headers>
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
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Typography
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 600,
                      overflow: 'hidden',
                      width: '100%',
                      backgroundImage: `url(${step.imgPath})`,
                      backgroundSize: 'cover',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
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
        <BeliefText>Here is the text for each item</BeliefText>
      </LiveGrid>
    </div>
  );
}
