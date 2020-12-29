import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Experience extends React.Component {
  render() {
    const expKey = this.props.expKey;
    const { company, title, start, end, location, desc } = this.props.expItem;

    return (
      <div className="exp-item">

        <div className="first">
          <div className="dates">
            <ToggleTagInput item={start} />
            <span>-</span>
            <ToggleTagInput item={end} />
          </div>
          <ToggleTagInput item={title} />
        </div>

        <div className="second">
          <ToggleTagInput item={company} />
          <ToggleTagInput item={location} />
          <ToggleTagInput item={desc} type="desc" />
        </div>

        <div className="third">
          <span onClick={() => this.props.deleteExp('experiences', expKey)}>x</span>
        </div>


      </div>
    )
  }
}

export default Experience;
