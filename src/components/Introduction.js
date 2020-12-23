import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <div id="introduction">
        <img id="portrait" src="https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFuJTIwY2VudGVyZWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        <div id="bio">
          <div className="header">
            <h1>{this.props.details.name}</h1>
            <div className="btn-container">
              <button>edit</button>
            </div>
          </div>
          <p className="person-title">{this.props.details.title}</p>
          <p className="person-desc">{this.props.details.desc}</p>
        </div>
      </div>
    )
  }
}

export default Introduction;
