import React from 'react';

class Experience extends React.Component {
  render() {
    const { company, start, end, location, desc } = this.props.details;
    return (
      <div>
        <p>{company}</p>
        <p>{start}-{end}</p>
        <p>{location}</p>
        <p>{desc}</p>
      </div>
    )
  }
}

export default Experience;
