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
      address1: '123 Address Lane',
      address2: 'City, State, ZIP',
      phone: '555-555-555',
      email: 'yourname@website.com',
      website: 'website.com',
      linkedIn: '@linkedin.com/in/your-name',
    },

    skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],

    education: [
      {
        school: 'First University',
        degree: 'B.S. in First Degree',
        start: 'Sept 2012',
        end: 'May 2016',
        location: 'Location, State',
        gpa: '3.5',
      },
      {
        school: 'Second University',
        degree: 'M.S. in Second Degree',
        start: 'Sept 2016',
        end: 'May 2018',
        location: 'Location, State',
        gpa: '3.8',
      },
    ],

    experience: [
      {
        company: 'First Company',
        start: 'July 2018',
        end: 'August 2019',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        company: 'Second Company',
        start: 'October 2019',
        end: 'Present',
        location: 'Location, State',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  }

  render() {
    return (
      <div className="cv-app">

        <main>
          <Header details={this.state.header} />
        </main>

        <sidebar>
          <Contact details={this.state.contact} />
          <ul>
            <h2>Skills</h2>
            {this.state.skills.map(current => <Skills details={current}/>)}
          </ul>
        </sidebar>
       
        <div>
          {this.state.education.map(current => <Education details={current}/>)}
        </div>
       
        <div>
          {this.state.experience.map(current => <Experience details={current}/>)}
        </div>

      </div>
    );
  }
}

export default App;
