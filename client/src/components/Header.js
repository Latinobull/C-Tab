import { styled, Typography } from '@mui/material';
import React from 'react';

const MyHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  padding: '70px 0px',
  fontSize: '80px',
  color: theme.secondary.main,
  backgroundColor: theme.primary.main,
}));
export default function Header({ text }) {
  return <MyHeader>{text}</MyHeader>;
}
