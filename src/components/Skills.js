import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <li className="item">
        <p>{this.props.details}</p>
      </li>
    )
  }
}

export default Skills;
