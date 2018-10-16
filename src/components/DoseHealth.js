import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import dose_health_logo from '../img/logoGrey.jpeg';
import login_page from '../img/login.png';
import user_list from '../img/user-list.png';
import user_medtime from '../img/user-medtime.png';
import medtime_detail from '../img/medtime-detail.png';


const styles = {
  root: {
    margin: '0 6vw',
    paddingBottom: '10vh',
  },
  intro: {
    margin: '0 auto',
    padding: '0 5vw',
    textAlign: 'left',
    fontSize: '0.8em',
    lineHeight: '1.5em',
    letterSpacing: '0.4px',
    fontWeight: '300',
  },
  title: {
    fontSize: '1.8em',
    margin: '3vh 0',
    color: '#2196f3',
  },
  section: {
    margin: '10vh 0',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '100%',
  }
};


class DoseHealth extends Component {

  renderSection({ title, img, description }) {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <div className={classes.title}>{title}</div>
        <div><img className={classes.img} src={img}></img></div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} style={{marginBottom: '8vh'}}>
          <Grid item sm={6} xs={12}>
            <div><img className={classes.img} src={dose_health_logo}></img></div>
          </Grid>
          <Grid className={classes.item} item sm={6} xs={12}>
            <p className={classes.intro}>
              Dose Health is a tech-driven startup trying to improve medication
              adherence. We have a smart pillbox that can automatically dispense
              medications and alert to help people stick to their medications. I was
              in charge of developing Medication Reminder System which improve people's
              health by keep them on track with their pills. The system is not disclosed
              to public so I can only provide some UI samples.
            </p>
          </Grid>
        </Grid>
        <div>
          {this.renderSection({ title: 'Login', img: login_page })}
          {this.renderSection({ title: 'User List', img: user_list })}
          {this.renderSection({ title: 'User Medtime', img: user_medtime })}
          {this.renderSection({ title: 'User Medtime Detail', img: medtime_detail })}

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DoseHealth);
