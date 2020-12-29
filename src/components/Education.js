import React from 'react';
import ToggleTagInput from './ToggleTagInput'

class Education extends React.Component {
  render() {
    const edKey = this.props.edKey;
    const { school, degree, start, end, location } = this.props.edItem;

    return (
      <div className="ed-item">
        <div className="first">
          <div className="dates">
            <ToggleTagInput item={start} />
            <span>-</span>
            <ToggleTagInput item={end} />
          </div>
          <ToggleTagInput item={degree} />
        </div>

        <div className="second">
          <ToggleTagInput item={school} />
          <ToggleTagInput item={location} />
        </div>

        <div className="third">
          <span onClick={() => this.props.deleteEd('educations', edKey)}>x</span>
        </div>
      </div>
    )
  }
}

export default Education;
