import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Dose_Health from '../img/logoGrey.jpeg';

const styles = {
  container: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    paddingBottom: '5vw',
  },
  link: {
    display: 'inline-block',
    position: 'relative',
    '&:hover $imgContainer': {
      opacity: 0,
      cursor: 'pointer',
    }
  },
  imgContainer: {
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
    zIndex: 300,
    opacity: 1,
    transition: 'opacity 1000ms cubic-bezier(.33,0,.2,1)',
  },
  image: {
    position: 'relative',
    width: '80%',
  },
  title: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    fontSize: '27px',
    fontWeight: 400,
  },
};


class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: 0
    }
  }

  renderPreview = () => {
    const { classes } = this.props;

    return (
      <Grid item xs={6}>
        <Link className={classes.link} to='/work/dose_health'>
          <div className={classes.imgContainer}>
            <img src={Dose_Health} className={classes.image}/>
          </div>
          <div className={classes.title}><p className={classes.p}>Dose Health</p></div>
        </Link>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container spacing={24}>
        {this.renderPreview()}
        {this.renderPreview()}
        {this.renderPreview()}
        {this.renderPreview()}
      </Grid>
    );
  }
}

export default withStyles(styles)(Work);
