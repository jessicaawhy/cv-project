import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.details.name}</h1>
        <p className="title">{this.props.details.title}</p>
        <p className="desc">{this.props.details.desc}</p>
      </div>
    )
  }
}

export default Header;
