import React from 'react';
import Skill from './Skill'

class Skills extends React.Component {
  render() {
    return (
      <div className="section">

        <div className="header">
          <h2>SKILLS</h2>
          <span className="add-button" onClick={this.props.addSkill}>+</span>
        </div>

        <ul>
          {Object.keys(this.props.skills)
            .map(key => 
              <Skill 
                key={key} 
                skillKey={key} 
                skillItem={this.props.skills[key]} 
                deleteSkill={this.props.deleteSkill} 
              />
          )}
        </ul>

      </div>
    )
  }
}

export default Skills;
