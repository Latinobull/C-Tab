import React, { useEffect, useRef } from 'react';
import { Typography, styled, Grid } from '@mui/material';
import Header from '../components/Header';
import Cross from '../img/TheCross.png';

const Belief = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  padding: '100px 0px',
}));
const BeliefContent = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  alignContent: 'center',
  width: '50%',
}));
const BeliefHeader = styled(Typography)(({ theme }) => ({
  fontSize: '120px',
}));
const BeliefText = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontSize: '44px',
}));

export default function OurBeliefs() {
  const allBeliefs = [
    {
      title: 'God',
      text: 'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words.',
    },
    {
      title: 'Jesus',
      text: 'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words.',
    },
    {
      title: ' the Holy Spirit',
      text: 'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words.',
    },
    {
      title: 'the Bible',
      text: 'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words.',
    },
    {
      title: 'Water Baptisms',
      text: 'He is our father, the great creator of the universe. This is where we wll include what we believe about him and add some bible verse to prove what we believe in him. These are just filler words.',
    },
  ];

  const beliefRefs = allBeliefs.map(() => useRef(null));

  // Function to log "hello" when Belief section becomes visible
  const logHello = index => {
    if (beliefRefs[index].current) {
      console.log(beliefRefs[index].current);
      beliefRefs[index].current.style = `
      animation: fadeIn 2s linear;
      `;
    }
  };

  useEffect(() => {
    // Create an Intersection Observer for each Belief section
    const observers = beliefRefs.map((ref, index) => {
      return new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Belief section is in the viewport, call logHello with index
          logHello(index);
        }
      });
    });

    // Start observing each Belief section
    beliefRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    // Cleanup the observers when component unmounts
    return () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <div>
      <Header text={'Our Beliefs'} image={Cross} />

      <Grid>
        {allBeliefs.map((belief, idx) => (
          <Belief
            container
            key={idx}
            sx={{
              color: theme =>
                idx % 2 === 0 ? theme.primary.main : theme.secondary.main,
              backgroundColor: theme =>
                idx % 2 === 0 ? 'white' : theme.primary.main,
            }}
            ref={beliefRefs[idx]}
          >
            <BeliefHeader>
              {' '}
              <b>{'0' + (idx + 1)}</b>
            </BeliefHeader>
            <BeliefContent container>
              <BeliefHeader>About {belief.title}</BeliefHeader>
              <BeliefText variant="h6">{belief.text}</BeliefText>
            </BeliefContent>
          </Belief>
        ))}
      </Grid>
    </div>
  );
}
