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
          September 2015 - May 2019 <br/>
          Technical GPA: 3.6/4.0 <br/>
        </p>
        <div className={classes.caption}>SKILLS</div>
          <p className={classes.subtitle} >Languages:</p>
            <p className={classes.paragraph}>
              JavaScript(3yrs), HTML(3yrs), CSS(3yrs), Python(2yrs), Java(2yrs),<br/> PHP, C, C++
            </p>
          <p className={classes.subtitle}>Tools & Frameworks:</p>
            <p className={classes.paragraph}>
              Node.js, React, Redux, MySQL, PostgreSQL, MongoDB, AWS, <br/>
              GraphQL, Bootstrap, Express, Flask, Ajax, jQuery, git
            </p>
        <div className={classes.caption}>EXPERIENCES</div>
        <p className={classes.subtitle}>Software Engineer Intern</p>
          <p className={classes.paragraph}>Sleep Number<br/>
            September 2018 - Present</p>
          <p className={classes.paragraph}>
            • Improving the Live Chat life cycle and modeling a Chat Bot for customer services team in Sleep Number. <br/>
            • Using Google Dialog Flow and machine learning technics on enormous live chat data to train the Chat Bot. <br/>
            • The improvement will affect millions of live chat conversation ongoing each year in Sleep Number. <br/>
          </p>
          <p className={classes.subtitle}>Full-Stack Software Developer Intern</p>
            <p className={classes.paragraph}>Dose Health<br/>
              May 2018 - September 2018</p>
            <p className={classes.paragraph}>
              • Developed a Medication Reminder System that automatically calls and texts users to take their medication. Designed and implemented web UI that helps co-workers easily add new users into the database. <br/>
              • Implemented 70% of the entire system front-end to back-end with JavaScript and AWS. Now the system is serving 200+ of users every day helping them keep on track of their medications. <br/>
              • Created whole server based on AWS Cloud and AWS Lambda serverless architecture which has the ability to auto scale. <br/>
            </p>
          <p className={classes.subtitle}>Research Tech Assistant</p>
            <p className={classes.paragraph}>University of Minnesota<br/>
              January 2018 - May 2018
            </p>
            <p className={classes.paragraph}>
              • Designed and developed a website for Small Island Climate & Health Laboratory (SICHL) in the University of Minnesota. <br/>
              • The laboratory has gained popularity and awareness from this website that shows geological data of their disasters projects using Google Map API and data provided from research.
            </p>
        <div className={classes.caption}>PROJECTS</div>
          <p className={classes.subtitle}>Crypto Dashboard</p>
          <p className={classes.paragraph}>
            May 2018 - Present
          </p>
          <p className={classes.paragraph}>
            • Developed a crypto dashboard that displays market data and charts of Market Price of 3000+ different types of cryptocurrencies. <br/>
            • Integrated with HighChart and CryptoCompare to pull data of thousands of crypto coins and visualize it in form of charts.<br/>
            • Used browser local storage to cache the coins picked by users and show them when user visit the page next time.
          </p>
          <p className={classes.subtitle}>Music Rating</p>
            <p className={classes.paragraph}>
              September 2018 - Present
            </p>
            <p className={classes.paragraph}>
              • Implemented a music rating web application that users can rate and comment music tracks in it. Based on users’ rating points on tracks, a recommended music list will display on users’ dashboard. <br/>
              • Used Flask to build the backend server connecting to a PostgreSQL database hosting on Heroku. <br/>
              • Used music dataset and recommender system from Last.fm API to implement the music recommendation feature.
            </p>
          <p className={classes.subtitle}>Metro Food Access Network Website</p>
            <p className={classes.paragraph}>
              August 2018 - Present
            </p>
            <p className={classes.paragraph}>
              • Redesigning and rebuilding Metro Food Access Network (MFAN) Website using modern web technology. <br/>
              • The loading performance of new web application was reduced from seconds to milliseconds.
            </p>
          <p className={classes.subtitle}>Weather Forecast Web App</p>
            <p className={classes.paragraph}>
              March - April 2018
            </p>
            <p className={classes.paragraph}>
              • Developed a weather forecast website in which users can get weather data from different cities they want. <br/>
              • Charts of temperature, pressure and humidity related to each city will display in the website.
            </p>
    </div>
    );
  }
}

export default withStyles(styles)(Resume);
