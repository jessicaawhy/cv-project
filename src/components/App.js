import React from 'react';
import Introduction from './Introduction';
import Contacts from './Contacts';
import Skills from './Skills';
import Educations from './Educations';
import Experiences from './Experiences';
import sample from '../sample-data';

class App extends React.Component {
  state = sample;

  render() {
    return (
      <div className="app">

        <Introduction intro={this.state.introduction} />
        
        <div className="sidebar">
          <Contacts contacts={this.state.contacts} />
          <Skills skills={this.state.skills} />
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
