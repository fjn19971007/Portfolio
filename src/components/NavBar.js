import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5vw',
  },
  title: {
    fontSize: '45px',
    fontWeight: 700,
    color: '#222'
  },
  list: {
    textDecoration: 'none !important',
    letterSpacing: '1px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
  },
  element: {
    textDecoration: 'none !important',
    marginRight: '30px',
    fontSize: '14px',
    color: '#999',
    "&:hover": {
      color: "#111",
    }
  },
  activeLink: {
    color: '#111',
  }
}


class NavBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          Ray Fang
        </div>
        <div>
          <ul className={classes.list}>
            <li className={classes.element}>
              <NavLink exact to='/' activeClassName={classes.activeLink}>WORK</NavLink>
            </li>
            <li className={classes.element}>
              <NavLink to='/resume' activeClassName={classes.activeLink}>RESUME</NavLink>
            </li>
            <li className={classes.element}>
              <NavLink to='/contact' activeClassName={classes.activeLink}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
