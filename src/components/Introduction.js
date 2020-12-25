import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.intro;
  }

  render() {

    return (
      <div id="introduction">
        <img 
          id="portrait" 
          src={this.state.portrait} 
          alt="profile-pic" 
        />
        <div id="person-text">
          <ToggleTagInput className="name" item={this.state.name} />
          <ToggleTagInput className="title" item={this.state.title} />
          <ToggleTagInput className="desc" item={this.state.desc} type="desc" />
        </div>
      </div>
    )
  }
}

export default Introduction;
