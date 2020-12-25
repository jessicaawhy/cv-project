import React from 'react';
import Experience from './Experience'

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.experiences;
  }

  render() {
    return (
      <div className="experience">

        <div className="header">
          <h2>EXPERIENCE</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.state).map(
            key => <Experience key={key} experienceItem={this.state[key]} />
          )}
        </ul>

      </div>
    )
  }
}

export default Experiences;
