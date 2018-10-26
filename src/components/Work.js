import React, { Component } from 'react';
import _ from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import dose_health_logo from '../img/logoGrey.jpeg';
import sichl_logo_red from '../img/LogoSichl-Red.png';
import mfan_logo from '../img/logo_mfan.png';
import crypto_logo from '../img/crypto-dash.png';
import weather_logo from '../img/weather-logo.png';

const styles = {
  container: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    paddingBottom: '5vw',
  },
  item: {
    overflow: 'hidden',
  },
  link: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    position: 'relative',
    '&:hover $imgContainer': {
      opacity: 0,
      cursor: 'pointer',
    }
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    height: '30vh',
    width: '100%',
    height: '100%',
    zIndex: 300,
    opacity: 1,
    transition: 'opacity 600ms cubic-bezier(.33,0,.2,1)',
    '@media (max-width: 600px)': {
      height: '40vw'
    }
  },
  image: {
    position: 'relative',
    '@media (max-width: 600px)': {

    }
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

  renderLink = ({ img, title, width, url }) => {
    const { classes } = this.props;

    return (
      <Grid className={classes.item} item xs={12} sm={6}>
        <Link className={classes.link} to={url}>
          <div className={classes.imgContainer}>
            <img src={img} style={{ width }} className={classes.image}/>
          </div>
          <div className={classes.title}><p className={classes.p}>{title}</p></div>
        </Link>
      </Grid>
    );
  }

  renderAnchor = ({ img, title, width, url }) => {
    const { classes } = this.props;

    return (
      <Grid className={classes.item} item xs={12} sm={6}>
        <a className={classes.link} target='_blank' href={url}>
          <div className={classes.imgContainer}>
            <img src={img} style={{ width }} className={classes.image}/>
          </div>
          <div className={classes.title}><p className={classes.p}>{title}</p></div>
        </a>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container spacing={24}>
        {this.renderLink({ img: dose_health_logo, title: 'Dose Health', width: '80%', url: '/work/dose_health' })}
        {this.renderAnchor({ img: sichl_logo_red, title: 'University of Minnesota', width: '80%', url: 'https://sichl.dash.umn.edu' })}
        {this.renderAnchor({ img: mfan_logo, title: 'MFAN', width: '50%', url: 'https://floydchenchen.github.io/MFAN-REACT/' })}
        {this.renderAnchor({ img: crypto_logo, title: 'Crypto Dashboard', width: '30%', url: 'https://fjn19971007.github.io/CryptoDashboard/'})}
        {this.renderAnchor({ img: crypto_logo, title: 'Old Crypto Stats', width: '30%', url: 'http://www-users.cselabs.umn.edu/~fangx205/bitcoin/BitcoinStat.php'})}
        {this.renderAnchor({ img: weather_logo, title: 'Weather Forecast', width: '30%', url: 'https://fjn19971007.github.io/WeatherForecast-React/'})}

      </Grid>
    );
  }
}

export default withStyles(styles)(Work);
