import { styled, Typography, Grid } from '@mui/material';
import React from 'react';

const MyGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  alignContent: 'center',
  justifyContent: 'center',
  height: '550px',
}));
const MyHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '150px',
  color: theme.secondary.main,
}));
export default function Header({ text, image }) {
  return (
    <MyGrid
      container
      sx={{
        backgroundImage: image ? `url(${image})` : '',
        backgroundColor: image && 'black',
      }}
    >
      <MyHeader>{text}</MyHeader>
    </MyGrid>
  );
}
