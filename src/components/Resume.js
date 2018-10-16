import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    margin: '0 8vw',
    paddingBottom: '10vh',
    textAlign: 'left',
    fontWeight: 300,
  },
  title: {
    fontSize: '35px',
    marginBottom: '50px',
    textAlign: 'center',
    fontWeight: '400',
  },
  caption: {
    fontSize: '30px',
    color: 'black',
    margin: '0.4em 0'
  },
  subtitle: {
    fontWeight: '600',
    marginBottom: 0,
    marginBottom: '0.3em',
    lineHeight: '1.48em',
  },
  paragraph: {
    lineHeight: '1.48em',
    marginTop: 0,
    width: '50%',
    '@media (max-width: 600px)': {
      width: '100%'
    }
  }
}


class Resume extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.title}>Resume</div>
        <div className={classes.caption}>EDUCATION</div>
        <p className={classes.paragraph}>
          University of Minnesota - Twin Cities <br/>
          B.S. in Computer Science <br/>
          Sep 2015 - May 2019 <br/>
          Technical GPA: 3.6 <br/>
        </p>
        <div className={classes.caption}>TECHNICAL SKILLS</div>
          <p className={classes.subtitle} >Languages:</p>
            <p className={classes.paragraph}>
              JavaScript(3yrs) • HTML(3yrs) • CSS(3yrs) • Java(2yrs) •<br/>
              Python(2yrs) • PHP • C • C++ <br/>
            </p>
          <p className={classes.subtitle}>Tools & Frameworks:</p>
            <p className={classes.paragraph}>
              Node.js • React • Redux • AWS • GraphQL • WordPress •<br/>
              MySQL • Bootstrap • Twilio • Material Design • Git
            </p>
        <div className={classes.caption}>EXPERIENCES</div>
          <p className={classes.subtitle}>Full-Stack Software Development Intern</p>
            <p className={classes.paragraph}>Dose Health<br/>
              May 2018 - Aug 2018</p>
            <p className={classes.paragraph}>
              Constructed a Medication Reminder System that automatically reminds clients to take their medication by
              phone call, text message and IoT product helping people stay on track with their pills. <br/>
              Implemented server-less lambda functions instead of backend server. <br/>
              Designed and implemented a web application that can simply manage data in Medication Reminder System simplifying step of adding and editing users. <br/>
              Developed 70% of the entire system which became the 2nd key product of the company.
            </p>
          <p className={classes.subtitle}>Research Tech Assistant</p>
            <p className={classes.paragraph}>University of Minnesota<br/>
              Jan 2018 - May 2018
            </p>
            <p className={classes.paragraph}>
              Designed and developed website for Small Island Climate & Health Laboratory (SICHL) department under College of Public
              Health in University of Minnesota, gained popularity and awareness for their projects. <br/>
              Embedded Google Map API in the website that marks research details on a global map based on their areas.
            </p>
        <div className={classes.caption}>PROJECTS</div>
          <p className={classes.subtitle}>Metro Food Access Network Website</p>
            <p className={classes.paragraph}>
              August 2018 - Present
            </p>
            <p className={classes.paragraph}>
              Redesigning and rebuilding Metro Food Access Network (MFAN) Website using modern web technology. <br/>
              The loading performance of new web application was reduced from seconds to milliseconds.
            </p>
          <p className={classes.subtitle}>Weather Forecast Web App</p>
            <p className={classes.paragraph}>
              March - April 2018
            </p>
            <p className={classes.paragraph}>
              Developed a weather forecast website in which users can get weather data from different cities they want. <br/>
              Charts of temperature, pressure and humidity related to each city will display in the website.
            </p>
          <p className={classes.subtitle}>Cryptocurrency Statistic Website</p>
            <p className={classes.paragraph}>
              Dec 2017
            </p>
            <p className={classes.paragraph}>
              Developed and designed a website which displays market data and charts of Market Price of Bitcoin, Litecoin,
              Ethereum and Bitcoin Cash. <br/>
              Integrated with Google Chart API and multiple Cryptocurrency Market Price APIs.
              </p>
    </div>
    );
  }
}

export default withStyles(styles)(Resume);
