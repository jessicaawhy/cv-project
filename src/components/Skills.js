import React from 'react';
import Skill from './Skill'

const Skills = (props) => (
  <div className="section">

    <div className="header">
      <h2>SKILLS</h2>
      <span className="add-button" onClick={props.addSkill}>+</span>
    </div>

    <ul>
      {Object.keys(props.skills)
        .map(key => 
          <Skill 
            key={key} 
            skillKey={key} 
            skillItem={props.skills[key]} 
            deleteSkill={props.deleteSkill} 
          />
      )}
    </ul>

  </div>
)

export default Skills;
