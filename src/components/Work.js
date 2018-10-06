import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Dose_Remind from '../img/Dose_Remind.png';

const styles = {
  container: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  item: {
    padding: '1vw',
    position: 'relative',
    '&:hover $image': {
      opacity: 0,
      cursor: 'pointer',
    }
  },
  image: {
    position: 'relative',
    width: '100%',
    zIndex: 300,
    opacity: 1,
    transition: 'opacity 1000ms cubic-bezier(.33,0,.2,1)',
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
      <Grid className={classes.item} item xs={6}>
        <Link to='/work/dose_health'>
          <img src={Dose_Remind} className={classes.image}/>
          <div className={classes.title}><p className={classes.p}>Dose Health</p></div>
        </Link>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container spacing={16}>
        {this.renderPreview()}
        {this.renderPreview()}
        {this.renderPreview()}
        {this.renderPreview()}
      </Grid>
    );
  }
}

export default withStyles(styles)(Work);
