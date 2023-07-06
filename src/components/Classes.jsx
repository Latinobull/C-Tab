import { Grid, Typography, styled, Box } from '@mui/material';
import Bible from '../img/BIBLE GRAPHIC.png';

const ClassesHeader = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: theme.primary.main,
  padding: '80px 0 110px',
}));
const ZoomClass = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  backgroundSize: 'cover',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0,0,0, 0.3)',
  backgroundBlendMode: 'multiply',
}));
const ZoomText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '4em',
  maxWidth: '70%',
}));
const ZoomTextBold = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '1em',
  maxWidth: '70%',
  fontWeight: 800,
}));
export default function Classes() {
  return (
    <>
      <ClassesHeader container>
        <img src={Bible} alt="bible" width={200} height={200} />
        <Typography variant="h4" sx={{ fontSize: '140px' }}>
          Learn With Us
        </Typography>
        <Typography variant="h4" sx={{ fontSize: '60px' }}>
          Join us every Sunday
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 800 }}>
          CLASS INFO DOWN BELOW
        </Typography>
      </ClassesHeader>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: '400px 500px',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateAreas: `'men men men woman woman woman'
      'youngM youngM youngF youngF kid kid'
      `,
        }}
      >
        <ZoomClass sx={{ gridArea: 'men' }}>
          <ZoomText>Men's Class</ZoomText>
          <ZoomText sx={{ fontSize: '1.4em' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'woman' }}>
          <ZoomText>Woman's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'youngM' }}>
          <ZoomText>Young Men's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'youngF' }}>
          <ZoomText>Young Woman's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              12:00pm
            </Box>
          </ZoomTextBold>
        </ZoomClass>
        <ZoomClass sx={{ gridArea: 'kid' }}>
          <ZoomText>Kid's Class</ZoomText>
          <ZoomText sx={{ fontSize: '23px' }} variant={'h6'}>
            We aim to equip men to be who God has called them to be in their
            homes and in their community
          </ZoomText>
          <ZoomTextBold variant="h6">
            Meeting ID:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              123 456 7890
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Password:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              234
            </Box>
          </ZoomTextBold>
          <ZoomTextBold variant="h6">
            Time:{' '}
            <Box component={'span'} sx={{ fontWeight: 400 }}>
              11:30am
            </Box>
          </ZoomTextBold>
        </ZoomClass>
      </Box>
    </>
  );
}
