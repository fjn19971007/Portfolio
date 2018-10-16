import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


const styles = {
  root: {

  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5vw 7vw',
  },
  navButton: {
    fontSize: '20px',
    color: '#aaa',
    padding: '3vh',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  title: {
    fontSize: '42px',
    fontWeight: 700,
    color: '#222',
    letterSpacing: '2px',
    '@media (max-width: 600px)': {
      margin: '30px auto'
    }
  },
  largeMenu: {
    display: 'block',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      display: 'none',
    }
  },
  smallMenu: {
    display: 'none',
    textAlign: 'center',
    listStyle: 'none',
    '@media (max-width: 600px)': {
      display: 'block',
    }
  },
  smallMenuList: {
    overflow: 'hidden',
    margin: '0 1em',
    borderBottom: '1px solid #ddd',
  },
  list: {
    textDecoration: 'none !important',
    letterSpacing: '1px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      display: 'block',
    }
  },
  element: {
    textDecoration: 'none !important',
    marginRight: '30px',
    fontSize: '15px',
    color: '#999',
    lineHeight: '2em',
    padding: '2px',
    "&:hover": {
      color: "#111",
    }
  },
  activeLink: {
    color: '#111',
  }
}


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { classes } = this.props;

    const menu =
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
      </ul>;

    return (
      <div className={classes.root}>
        <div className={classes.smallMenu}>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
          >
            {this.state.showMenu ? (
              <div key={1} className={classes.smallMenuList}>
                {menu}
              </div>
          ) : null}
          </CSSTransitionGroup>
          <div
            className={classes.navButton}
            onClick={this.handleClick}
          >
            MENU
          </div>
        </div>
        <div className={classes.nav}>
          <div className={classes.title}>
            RAY FANG
          </div>
          <div className={classes.largeMenu}>
            {menu}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
