import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Skill extends React.Component {
  render() {
    const skillKey = this.props.skillKey;
    const value = this.props.skillItem;

    return (
      <div className="skill-item">
        <div className="first">
          <ToggleTagInput item={value} />
        </div>
        <div className="second">
          <span className="delete-button" onClick={() => this.props.deleteSkill('skills', skillKey)}>x</span>
        </div>
      </div>
    )
  }
}

export default Skill;
