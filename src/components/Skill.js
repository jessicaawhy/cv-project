import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Skill extends React.Component {
  render() {
    const skillKey = this.props.skillKey;
    const value = this.props.skillItem;

    return (
      <div>
        <ToggleTagInput item={value} />
        <span onClick={() => this.props.deleteSkill('skills', skillKey)}>x</span>
      </div>
    )
  }
}

export default Skill;
