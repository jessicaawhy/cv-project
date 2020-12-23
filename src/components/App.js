import React from 'react';
import Introduction from './Introduction';
import Section from './Section';

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

    skills:  {
      item1: 'Skill 1',
      item2: 'Skill 2',
      item3: 'Skill 3',
      item4: 'Skill 4',
    },

    education: {
      item1: {
        school: 'Second University',
        degree: 'M.S. in Second Degree',
        start: 'Sept 2016',
        end: 'May 2018',
        location: 'Location, State',
      },
      item2: {
        school: 'First University',
        degree: 'B.S. in First Degree',
        start: 'Sept 2012',
        end: 'May 2016',
        location: 'Location, State',
      },
    },

    experience: {
      item1: {
        company: 'Second Company',
        title: 'Second Job Title',
        start: 'Oct 2019',
        end: 'Present',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      item2: {
        company: 'First Company',
        title: 'First Job Title',
        start: 'July 2018',
        end: 'Aug 2019',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    },
  }

  render() {
    return (
      <div className="app">
        <Introduction className="introduction section" details={this.state.header}/>
        <div className="sidebar">
          <Section className="contact" item="contact" details={this.state.contact}/>
          <Section item="skills" details={this.state.skills}/>
        </div>
        <div className="main">
          <Section className="education" item="education" details={this.state.education}/>
          <Section className="experience" item="experience" details={this.state.experience}/>
        </div>
      </div>
    );
  }
}

export default App;
