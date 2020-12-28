import React from 'react';
import Skill from './Skill'

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">

        <div className="header">
          <h2>SKILLS</h2>
          <div className="btn-container">
            <button onClick={() => this.props.addSkill('skills')}>Add</button>
          </div>
        </div>

        <ul>
          {Object.keys(this.props.skills).map(
            key => <Skill key={key} skillKey={key} skillItem={this.props.skills[key]} deleteSkill={this.props.deleteSkill}/>
          )}
        </ul>

      </div>
    )
  }
}

export default Skills;
