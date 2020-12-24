import React from 'react';
import Introduction from './Introduction';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import sample from '../sample-data';

class App extends React.Component {
  state = sample;

  enableEdit = (e) => {
    const section = e.target.dataset.section;
    const key1 = e.target.dataset.key1;
    const key2 = e.target.dataset.key2;

    const sectionObj = {...this.state[section]};

    if (key1 && key2) {
      sectionObj[key1][key2]['editing'] = true;
    } else {
      sectionObj[key1]['editing'] = true;
    }

    this.setState({section: sectionObj});
  }

  handleEdit = (e) => {
    const section = e.target.dataset.section;
    const key1 = e.target.dataset.key1;
    const key2 = e.target.dataset.key2;

    const sectionObj = {...this.state[section]};

    if ((e.key === 'Enter' || e.type === 'blur')) {
      if (e.target.value === '') {
        alert('Please prove a value!');
        this.disableEdit(section, key1, key2);
      } else if (key1 && key2) {
        sectionObj[key1][key2]['data'] = e.target.value;
      } else {
        sectionObj[key1]['data'] = e.target.value;
      }

      this.setState({section: sectionObj});
      this.disableEdit(section, key1, key2);

    } else if (e.key === 'Escape') {
      this.disableEdit(section, key1, key2);
    }
  }

  disableEdit = (section, key1, key2) => {
    const sectionObj = {...this.state[section]};
    if (key1 && key2) {
      sectionObj[key1][key2]['editing'] = false;
    } else {
      sectionObj[key1]['editing'] = false;
    }
    this.setState({section: sectionObj});
  }

  render() {
    return (
      <div className="app">

        <Introduction 
          section="introduction" 
          sectionObj={this.state.introduction} 
          enableEdit={this.enableEdit} 
          handleEdit={this.handleEdit}
        />
        
        <div className="sidebar">
          <Contact 
            section="contact" 
            sectionObj={this.state.contact} 
            enableEdit={this.enableEdit} 
            handleEdit={this.handleEdit}
          />
          <Skills 
            section="skills" 
            sectionObj={this.state.skills} 
            enableEdit={this.enableEdit} 
            handleEdit={this.handleEdit}
          />
        </div>

        <div className="main">
          <Education 
            section="education" 
            sectionObj={this.state.education} 
            enableEdit={this.enableEdit} 
            handleEdit={this.handleEdit}
          />
          <Experience 
            section="experience" 
            sectionObj={this.state.experience} 
            enableEdit={this.enableEdit} 
            handleEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
