import React from 'react';

class Education extends React.Component {
  render() {
    const { school, degree, start, end, location } = this.props.details;
    return (
      <li className="item">
        <div className="first">
          <p className="dates">{start}{" - "}{end}</p>
          <p className="degree">{degree}</p>
        </div>

        <div className="second">
          <p className="school">{school}</p>
          <p className="location">{location}</p>
        </div>
      </li>
    )
  }
}

export default Education;
