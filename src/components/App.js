import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

class App extends React.Component {
  state = {
    header: {
      name: 'Your Name',
      title: 'Your Title',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    contact: {
      item1: {phone: '555-555-555'},
      item2: {email: 'yourname@website.com'},
      item3: {website: 'website.com'},
      item4: {linkedIn: 'linkedin.com/in/your-name'},
    },

    skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],

    education: [
      {
        school: 'First University',
        degree: 'B.S. in First Degree',
        start: 'Sept 2012',
        end: 'May 2016',
        location: 'Location, State',
      },
      {
        school: 'Second University',
        degree: 'M.S. in Second Degree',
        start: 'Sept 2016',
        end: 'May 2018',
        location: 'Location, State',
      },
    ],

    experience: [
      {
        company: 'First Company',
        title: 'First Job Title',
        start: 'July 2018',
        end: 'August 2019',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        company: 'Second Company',
        title: 'Second Job Title',
        start: 'October 2019',
        end: 'Present',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  }

  render() {
    return (
      <div className="app">

        <div className="sidebar">
          <Header className="header" details={this.state.header}/>
          
          <div className="contact">
            {Object.keys(this.state.contact).map(key => <Contact key={key} details={this.state.contact[key]}/>)}
          </div>
          
          <h2>SKILLS</h2>
          <ul className="skills">
            {this.state.skills.map(current => <Skills details={current}/>)}
          </ul>
        </div>
       
        <div className="main">
          <div className="education">
            <h2>Education</h2>
            {this.state.education.map(current => <Education details={current}/>)}
          </div>
          <div className="experience">
            <h2>Experience</h2>
            {this.state.experience.map(current => <Experience details={current}/>)}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
