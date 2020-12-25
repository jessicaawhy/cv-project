import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.skills;
  }

  render() {
    return (
      <div id="skills">

        <div className="header">
          <h2>SKILLS</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.state).map(
            key => <ToggleTagInput key={key} item={this.state[key]}/>
          )}
        </ul>

      </div>
    )
  }
}

export default Skills;
