import React from 'react';

class Education extends React.Component {
  render() {
    const { school, degree, start, end, location } = this.props.details;
    return (
      <div className="ed-item">
        <div>
          <p className="dates">{start}-{end}</p>
          <p className="degree">{degree}</p>
        </div>
        <div>
          <p className="school">{school}</p>
          <p className="location">{location}</p>
        </div>
      </div>
    )
  }
}

export default Education;
