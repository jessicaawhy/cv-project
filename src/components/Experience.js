import React from 'react';

class Experience extends React.Component {
  render() {
    const { company, title, start, end, location, desc } = this.props.details;
    return (
      <div className="exp-item">
        <div className="first">
          <p className="dates">{start}-{end}</p>
          <p className="title">{title}</p>
        </div>
        <div>
          <p className="company">{company}</p>
          <p className="location">{location}</p>
          <p className="job-desc">{desc}</p>
        </div>
      </div>
    )
  }
}

export default Experience;
