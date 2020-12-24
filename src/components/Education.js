import React from 'react';
import RenderEducation from './RenderEducation';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.sectionObj;
  }

  render() {
    return (
      <div className="section">

        <div className="header">
          <h2>{this.props.section.toUpperCase()}</h2>
          <div className="btn-container">
            <button>Add</button>
          </div>
        </div>

        <ul className={this.props.section}>
          {Object.keys(this.state).map(
            key => <RenderEducation
              key={key}
              section={this.props.section}
              itemKey={key}
              itemObj={this.state[key]}
              enableEdit={this.props.enableEdit}
              handleEdit={this.props.handleEdit}
            />
          )}
        </ul>

      </div>
    )
  }
}

export default Education;
