import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <li className="item">
        <p>{this.props.details}</p>
        <div className="btn-container">
            <button>edit</button>
            <button>delete</button>
        </div>
      </li>
    )
  }
}

export default Skills;
