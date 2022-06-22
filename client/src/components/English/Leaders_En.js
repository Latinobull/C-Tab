import React from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  // root: {
  //   width: 600,
  //   maxWidth: '100vw',
  // },
  // cardAction: {
  //   justifyContent: 'center',
  // },
  // media: {
  //   height: 400,
  // },
  // allCards: {
  //   marginBottom: 150,
  // },
  // list: {
  //   width: '100%',
  //   maxWidth: '700px',
  //   backgroundColor: theme.palette.background.paper,
  // },
  // avatar: {
  //   width: 200,
  //   height: 200,
  // },
  // divider: {
  //   backgroundColor: 'black',
  // },
}));
export default function Leaders_En() {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center">
        <h1> The Pastors of Christian Tabernacle</h1>
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
                  Pastor Damaris Torres
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
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
                  Pastor Huey Perez
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
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
                  Co-Pastor Edward Guadalupe
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid md="6" xs="12">
          <Typography variant="h3" align="center">
            Deacons
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="placeholder"
                  src="https://via.placeholder.com/250"
                  className={classes.avatar}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h4">John Doe</Typography>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="placeholder"
                  src="https://via.placeholder.com/250"
                  className={classes.avatar}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h4">Bob Ross</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid md="6" xs="12">
          <Typography variant="h3" align="center">
            Prophets
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="placeholder"
                  src="https://via.placeholder.com/250"
                  className={classes.avatar}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h4">David Melendez</Typography>
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="placeholder"
                  src="https://via.placeholder.com/250"
                  className={classes.avatar}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h4">Moriama Rosa</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
