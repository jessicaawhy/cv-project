import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Experience extends React.Component {
  render() {
    const expKey = this.props.expKey;
    const { company, title, start, end, location, desc } = this.props.expItem;

    return (
      <div>
        <ToggleTagInput item={company} />
        <ToggleTagInput item={title} />
        <ToggleTagInput item={start} />
        <ToggleTagInput item={end} />
        <ToggleTagInput item={location} />
        <ToggleTagInput item={desc} type="desc" />
        <span onClick={() => this.props.deleteExp('experiences', expKey)}>x</span>
      </div>
    )
  }
}

export default Experience;
