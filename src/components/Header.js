import { styled, Typography, Grid } from '@mui/material';
import React from 'react';

const MyGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.primary.main,
  alignContent: 'center',
  justifyContent: 'center',
  height: '1000px',
  backgroundSize: 'cover',
}));
const MyHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: '150px',
  color: theme.secondary.main,
}));
export default function Header({ text, image, children }) {
  return (
    <MyGrid
      id="header"
      container
      sx={{
        backgroundImage: image ? `url(${image})` : '',
        backgroundColor: image && 'black',
      }}
    >
      <MyHeader id="text">
        {text}
        {children ? <p>{children}</p> : ''}
      </MyHeader>
    </MyGrid>
  );
}
