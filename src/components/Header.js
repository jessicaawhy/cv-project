import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="normal-view">
          <h1>{this.props.details.name}</h1>
          <h2>{this.props.details.title}</h2>        
          <p>{this.props.details.desc}</p>
        </div>
      </div>
    )
  }
}

export default Header;
