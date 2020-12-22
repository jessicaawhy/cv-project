import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="header">
          <h1>{this.props.details.name}</h1>
          <button>edit</button>
        </div>
        <p className="person-title">{this.props.details.title}</p>
        <p className="person-desc">{this.props.details.desc}</p>
      </div>
    )
  }
}

export default Introduction;
