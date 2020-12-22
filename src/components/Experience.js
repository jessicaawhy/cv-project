import React from 'react';

class Experience extends React.Component {
  render() {
    const { company, title, start, end, location, desc } = this.props.details;
    return (
      <li className="item">

        <div className="first">
          <p className="dates">{start}-{end}</p>
          <p className="title">{title}</p>
        </div>
        
        <div className="second">
          <div className="details">
            <div>
              <p className="company">{company}</p>
              <p className="location">{location}</p>
            </div>
            <div className="btn-container">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
          <p className="job-desc">{desc}</p>
        </div>
      </li>
    )
  }
}

export default Experience;
