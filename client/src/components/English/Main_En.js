import {
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
    maxWidth: 500,
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
    height: 400,
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
      <Carousel
        NextIcon={<ArrowRightIcon />}
        PrevIcon={<ArrowLeftIcon />}
        className={classes.carousel}
      >
        hi
      </Carousel>
      <Grid container>
        <Grid md="4" sm="6" xs="12">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/250"
                title="lorem"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
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
                <Typography gutterBottom variant="h5" component="h2">
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
                <Typography gutterBottom variant="h5" component="h2">
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
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
