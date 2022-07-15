import { Grid, Link, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import ministryStockImg from '../../img/ministryStockImg.jpg';

const Headers = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  margin: '30px 0px 10px 0px',
  fontSize: '50px',
}));
const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  textAlign: 'center',
  fontSize: '25px',
  marginBottom: 50,
}));
const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  textAlign: 'center',
  fontSize: '23px',
  lineHeight: '60px',
}));
const MinistryImg = styled('img')({});
const ministries = [
  { name: 'Good News Choir', img: `..${ministryStockImg}` },
  { name: 'Healing Rooms', img: `..${ministryStockImg}` },
  { name: 'Family Ministry', img: `..${ministryStockImg}` },
  { name: 'Kadosh', img: `..${ministryStockImg}` },
  { name: 'Other Ministry', img: `..${ministryStockImg}` },
  { name: '2nd Other Ministry', img: `..${ministryStockImg}` },
];
export default function Ministry_En() {
  const theme = useTheme();
  console.log(ministries[0].img);
  console.log(ministryStockImg);
  return (
    <div>
      <Headers>Ministries</Headers>
      <Text>
        Therefore, since through God’s mercy we have this ministry, we do not
        lose heart. 2 Cor. 4:1
      </Text>
      <Grid container spacing={5} justifyContent="space-evenly">
        {ministries.map(ministry => (
          <Grid item key={ministry.name}>
            <MinistryImg src={ministry.img} sx={{ width: 450 }} />
            <Link underline="hover" href={ministry.name}>
              <BoldText>{ministry.name}</BoldText>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
