import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 545,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          title="Solana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Solana
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Based in Switzerland, Solana is one of the fastest and cheapest blockchains out there.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    
    </>
  )}
