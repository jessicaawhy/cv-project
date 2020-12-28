import React from 'react';
import Introduction from './Introduction';
import Contacts from './Contacts';
import Skills from './Skills';
import Educations from './Educations';
import Experiences from './Experiences';
import sample from '../sample-data';

class App extends React.Component {
  state = sample;

  add = (section) => {
    const sectionObj = {...this.state[section]};

    if (section === 'skills') {
      sectionObj[`skill${Date.now()}`] = 'New Skill!';
    }

    this.setState({[section]: sectionObj});
  }

  delete = (section, key) => {
    const sectionObj = {...this.state[section]};
    delete sectionObj[key];

    this.setState({[section]: sectionObj});
  }

  render() {
    return (
      <div className="app">

        <Introduction intro={this.state.introduction} />
        
        <div className="sidebar">
          <Contacts contacts={this.state.contacts} />
          <Skills skills={this.state.skills} addSkill={this.add} deleteSkill={this.delete}/>
        </div>

        <div className="main">
          <Educations educations={this.state.educations} />
          <Experiences experiences={this.state.experiences} />
        </div>
      </div>
    );
  }
}

export default App;
