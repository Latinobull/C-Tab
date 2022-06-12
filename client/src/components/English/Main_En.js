import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import worshipImage from '../../img/worship.jpg';
const useStyles = makeStyles({
  top: {
    flexGrow: 1,
  },
  root: {
    maxWidth: 600,
    maxWidth: '100vw',
  },
  cardAction: {
    justifyContent: 'center',
  },
  media: {
    height: 200,
  },
  headline: {
    paddingBottom: 50,
    textAlign: 'center',
  },
  holder: {
    backgroundImage: `url(${worshipImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
  text: {
    color: 'white',
    paddingLeft: '200px',
  },
  button: {
    backgroundColor: 'white',
    color: 'rgb(168,19,0)',
    padding: '10px 25px',
    borderRadius: '1px',
  },
});
export default function Main_En() {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      {/* <Grid container>
        <Grid xs="12">
          <Typography variant="h4" className={classes.headline}>
            Welcome to the C-Tab, <br /> Home of the Good News Choir
          </Typography>
        </Grid>
      </Grid> */}
      <Grid
        className={classes.holder}
        container
        direction="column"
        justify="center"
      >
        <div className={classes.text}>
          <Typography style={{ fontSize: '32px' }}>A house on fire,</Typography>
          <Typography style={{ fontSize: '32px' }}>
            led by the Holy Spirit
          </Typography>
          <Button className={classes.button} variant="contained">
            Learn More
          </Button>
        </div>
      </Grid>
      <Grid container> </Grid>
      <Grid container justify="center" className={classes.allCards}>
        <Grid md="4" sm="6" xs="12">
          <Card className={classes.root}>
            <CardActionArea className={classes.cardAction}>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/250"
                title="lorem"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Leadership Team
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  lorem latin
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" href="/en/leaders">
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md="4" sm="6" xs="12">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/250"
                title="lorem"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Ministries
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  lorem latin
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" href="/en/ministries">
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md="4" sm="6" xs="12">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/250"
                title="lorem"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Social
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  lorem latin
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" href="/en/socials">
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
