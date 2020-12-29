import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Education extends React.Component {
  render() {
    const edKey = this.props.edKey;
    const { school, degree, start, end, location } = this.props.edItem;

    return (
      <div>
        <ToggleTagInput item={school} />
        <ToggleTagInput item={degree} />
        <ToggleTagInput item={start} />
        <ToggleTagInput item={end} />
        <ToggleTagInput item={location} />
        <span onClick={() => this.props.deleteEd('educations', edKey)}>x</span>
      </div>
    )
  }
}

export default Education;
