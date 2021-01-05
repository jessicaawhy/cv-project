import React, { useState } from 'react';
import Introduction from './Introduction';
import Contacts from './Contacts';
import Skills from './Skills';
import Educations from './Educations';
import Experiences from './Experiences';
import sample from '../sample-data';

const App = () => {
  const [ state, setState] = useState(sample);

  const addSkill = () => {
    const skills = {...state.skills};
    skills[`skills${Date.now()}`] = 'Skill';
    setState({...state, skills});
  }

  const addContact = () => {
    const contacts = {...state.contacts};
    contacts[`contacts${Date.now()}`] = {
      'type': 'contact'
    }
    setState({...state, contacts});
  }

  const addEducation = () => {
    const educations = {...state.educations};
    educations[`educations${Date.now()}`] = {
      school: 'University',
      degree: 'Degree',
      start: 'Start',
      end: 'End',
      location: 'Location, State',
    }
    setState({...state, educations});
  }

  const addExperience = () => {
    const experiences = {...state.experiences};
    experiences[`experiences${Date.now()}`] = {
      company: 'Company',
      title: 'Title',
      start: 'Start',
      end: 'End',
      location: 'Location, State',
      desc: 'Description'
    }
    setState({...state, experiences});
  }

  const deleteItem = (section, key) => {
    const sectionObj = {...state[section]};
    delete sectionObj[key];
    setState({...state, [section]: sectionObj} );
  }

  return (
    <div className="app">

      <Introduction intro={state.introduction} />
      
      <div className="sidebar">
        <Contacts 
          contacts={state.contacts} 
          addContact={addContact}  
          deleteContact={deleteItem} 
        />
        <Skills 
          skills={state.skills} 
          addSkill={addSkill} 
          deleteSkill={deleteItem} 
        />
      </div>

      <div className="main">
        <Educations 
          educations={state.educations} 
          addEd={addEducation} 
          deleteEd={deleteItem} 
        />
        <Experiences 
          experiences={state.experiences} 
          addExp={addExperience} 
          deleteExp={deleteItem} 
        />
      </div>
    </div>
  );
}

export default App;
