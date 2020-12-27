import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {skills: this.props.skills};
  }

  addSkill = () => {
    const skills = {...this.state.skills};
    skills[`skill${Date.now()}`] = 'New Skill!'
    this.setState({skills})
  }

  render() {
    return (
      <div id="skills">

        <div className="header">
          <h2>SKILLS</h2>
          <div className="btn-container">
            <button onClick={this.addSkill}>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.state.skills).map(
            key => <ToggleTagInput key={key} item={this.state.skills[key]}/>
          )}
        </ul>

      </div>
    )
  }
}

export default Skills;
