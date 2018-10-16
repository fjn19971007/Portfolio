import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '0 8vw',
    height: '100vh',
  },
  title: {
    fontSize: '35px',
    marginBottom: '50px',
  },
  left: {
    textAlign: 'left',
  },
  anchor: {
    '&:hover': {
      color: '#aaa'
    }
  }
}


class Contact extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>Contact</div>
        <p className={classes.left}>Email :  fangx205@umn.edu</p>
        <p className={classes.left}>Phone :  612-478-8660</p>
        <p className={classes.left}>Linkedin :
          <a className={classes.anchor} target='_blank' href='https://www.linkedin.com/in/jianan-fang/'>https://www.linkedin.com/in/jianan-fang/</a>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
