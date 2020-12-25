import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.educationItem;
  }

  render() {
    const { school, degree, start, end, location } = this.state;

    return (
      <div>
        <ToggleTagInput item={school} />
        <ToggleTagInput item={degree} />
        <ToggleTagInput item={start} />
        <ToggleTagInput item={end} />
        <ToggleTagInput item={location} />
      </div>
    )
  }
}

export default Education;
