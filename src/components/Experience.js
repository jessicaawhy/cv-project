import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.experienceItem;
  }

  render() {
    const { company, title, start, end, location, desc } = this.state;

    return (
      <div>
        <ToggleTagInput item={company} />
        <ToggleTagInput item={title} />
        <ToggleTagInput item={start} />
        <ToggleTagInput item={end} />
        <ToggleTagInput item={location} />
        <ToggleTagInput item={desc} type="desc" />
      </div>
    )
  }
}

export default Experience;
