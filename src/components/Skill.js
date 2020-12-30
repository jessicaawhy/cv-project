import React from 'react';
import ToggleTagInput from './ToggleTagInput'

const Skill = (props) => {
  const skillKey = props.skillKey;
  const value = props.skillItem;

  return (
    <div className="skill-item">
      <div className="first">
        <ToggleTagInput item={value} />
      </div>
      <div className="second">
        <span className="delete-button" onClick={() => props.deleteSkill('skills', skillKey)}>x</span>
      </div>
    </div>
  )
}

export default Skill;
