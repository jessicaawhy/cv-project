import React from 'react';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';


class Section extends React.Component {
  render() {

    const map = {
      contact: Contact,
      skills: Skills,
      education: Education,
      experience: Experience,
    }

    const Tag = map[this.props.item];

    return (
      <div className="section">
        <div className="header">
          <h2>{this.props.item.toUpperCase()}</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>
        <ul className={this.props.item}>
          {Object.keys(this.props.details).map(key => <Tag key={key} details={this.props.details[key]}/>)}
        </ul>
      </div>
    )
  }
}

export default Section;
