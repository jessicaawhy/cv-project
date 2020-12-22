import React from 'react';

class Education extends React.Component {
  render() {
    const { school, degree, start, end, location, gpa } = this.props.details;
    return (
      <div>
        <p>{school}</p>
        <p>{degree}</p>
        <p>{start}-{end}</p>
        <p>{location}</p>
        <p>{gpa}</p>
      </div>
    )
  }
}

export default Education;
