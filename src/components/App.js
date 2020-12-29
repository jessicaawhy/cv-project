import React from 'react';
import Introduction from './Introduction';
import Contacts from './Contacts';
import Skills from './Skills';
import Educations from './Educations';
import Experiences from './Experiences';
import sample from '../sample-data';

class App extends React.Component {
  state = sample;

  addSkill = () => {
    const skills = {...this.state.skills};
    skills[`skills${Date.now()}`] = 'Skill';
    this.setState({skills});
  }

  addContact = () => {
    const contacts = {...this.state.contacts};
    contacts[`contacts${Date.now()}`] = {
      'type': 'contact'
    }
    this.setState({contacts});
  }

  addEducation = () => {
    const educations = {...this.state.educations};
    educations[`educations${Date.now()}`] = {
      school: 'University',
      degree: 'Degree',
      start: 'Start',
      end: 'End',
      location: 'Location, State',
    }
    this.setState({educations});
  }

  addExperience = () => {
    const experiences = {...this.state.experiences};
    experiences[`experiences${Date.now()}`] = {
      company: 'Company',
      title: 'Title',
      start: 'Start',
      end: 'End',
      location: 'Location, State',
      desc: 'Description'
    }
    this.setState({experiences});
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
          <Contacts 
            contacts={this.state.contacts} 
            addContact={this.addContact}  
            deleteContact={this.delete} 
          />
          <Skills 
            skills={this.state.skills} 
            addSkill={this.addSkill} 
            deleteSkill={this.delete} 
          />
        </div>

        <div className="main">
          <Educations 
            educations={this.state.educations} 
            addEd={this.addEducation} 
            deleteEd={this.delete} 
          />
          <Experiences 
            experiences={this.state.experiences} 
            addExp={this.addExperience} 
            deleteExp={this.delete} 
          />
        </div>
      </div>
    );
  }
}

export default App;
