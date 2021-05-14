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
import Carousel from 'react-material-ui-carousel';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const useStyles = makeStyles({
  top: {
    flexGrow: 1,
  },
  root: {
    width: 600,
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
  carousel: {
    backgroundColor: 'black',
    height: 500,
    width: 1200,
    maxWidth: '100vw',
    marginBottom: 150,
    color: 'red',
  },
  allCards: {
    marginBottom: 150,
  },
});
export default function Main_En() {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Grid container>
        <Grid xs="12">
          <Typography variant="h4" className={classes.headline}>
            Welcome to the C-Tab, <br /> Home of the Good News Choir
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className="pleaseCenter"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '30vh' }}
      >
        <Carousel
          NextIcon={<ArrowRightIcon />}
          PrevIcon={<ArrowLeftIcon />}
          className={classes.carousel}
        >
          Test everything
        </Carousel>
      </Grid>
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
                  Ministry
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
                  <Button variant="contained">Learn More</Button>
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
                  Ministry
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
                  <Button variant="contained">Learn More</Button>
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
                  Ministry
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
                  <Button variant="contained">Learn More</Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
