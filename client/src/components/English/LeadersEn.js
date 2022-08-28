import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import headImg from '../../img/headShot.jpg';
const DeaconText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '400px',
  paddingBottom: '40px',
  fontWeight: 300,
  fontSize: '34px',
}));
const LeaderImg = styled('img')({});
const deacons = [
  'Luis Cruz',
  'Tony Perez',
  'Olga Torres',
  'David Melendez',
  'Manny Cancel',
  'Esperanza Cancel',
  'Alex Rodriquez',
];
const ushers = [
  'Guanchy Lopez',
  'Lucy Martinez',
  'Miguel',
  'Aurora Acevedo',
  'Diana Casanova',
  'Luis Andino',
  'Gregory Brito',
  'Amanda Beniquez',
];

const worshipTeam = [
  'Rachel Cornet',
  'Daisy Polidura',
  'Jeanette Perez',
  'Sammantha Perez',
  'Elisa Gonzalez',
  'Moyo Cintron',
];

const band = [
  'Jason Cornet',
  'Sarah Cornet',
  'Gaby Polidura',
  'DJ George',
  'Sammy Melendez',
  'Manny Polidura',
  'Caleb Beniquez',
  'Nina Cornet',
];

const prophets = ['David Melendez', 'Moriama Fernandez? idk her last name lol'];

const media = ['Jonathan Perez', 'Amelia Perez', 'Dynasty George'];
export default function Leaders_En() {
  let current = [];
  const [team, setTeam] = useState('Deacons');
  const handleChange = event => {
    setTeam(event.target.value);
  };
  if (team === 'Deacons') {
    current = deacons;
  }
  if (team === 'Ushers') {
    current = ushers;
  }
  if (team === 'Worship Team') {
    current = worshipTeam;
  }
  if (team === 'Band') {
    current = band;
  }
  if (team === 'Media Team') {
    current = media;
  }
  if (team === 'Prophets') {
    current = prophets;
  }
  return (
    <div>
      <Grid
        container
        direction={'column'}
        sx={{
          backgroundColor: theme => theme.secondary.main,
          marginBottom: '30px',
        }}
        justifyContent="space-evenly"
      >
        <Typography
          variant="h3"
          align="center"
          style={{
            padding: '100px 0px',
            fontWeight: 400,
          }}
        >
          Meet Our {team}
        </Typography>
        <FormControl variant="filled" sx={{ m: 2, width: '300px' }}>
          <InputLabel
            sx={{
              '&.Mui-focused': {
                color: theme => theme.primary.main,
              },
            }}
          >
            Team
          </InputLabel>

          <Select
            variant="filled"
            label="Team"
            value={team}
            onChange={handleChange}
            MenuProps={{ disableScrollLock: true }}
            sx={{
              ':after': { borderBottomColor: theme => theme.primary.main },
            }}
          >
            <MenuItem value="Deacons">Deacons</MenuItem>
            <MenuItem value="Worship Team">Worship Team</MenuItem>
            <MenuItem value="Ushers">Ushers</MenuItem>
            <MenuItem value="Media Team">Media Team</MenuItem>
            <MenuItem value="Band">Band</MenuItem>
            <MenuItem value="Prophets">Prophets</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container spacing={6} justifyContent="space-evenly">
        {current.map(person => (
          <Grid item key={person}>
            <LeaderImg
              src={headImg}
              style={{ width: '380px', height: '400px' }}
            />
            <DeaconText>{person}</DeaconText>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
