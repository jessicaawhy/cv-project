import React from 'react';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.sectionObj;
  }

  selectTag = (obj) => {
    const section = this.props.section;
    const key1 = Object.keys(obj)[0];
    const data = obj[key1]['data'];
    const editing = obj[key1]['editing'];

    console.log(obj)

    if (editing === true) {
      return <input 
        data-section={section} 
        data-key1={key1} 
        autoFocus 
        onBlur={this.props.handleEdit} 
        onKeyDown={this.props.handleEdit} 
        defaultValue={data}>   
      </input>
    } else {
      return <p 
        data-section={section} 
        data-key1={key1} 
        onClick={this.props.enableEdit}>
        {data}
      </p>
    }
  }

  render() {
    let { name, title, desc, portrait } = this.state;
    return (
      <div id="introduction">
        <img 
          data-section="introduction" 
          data-key1="portrait" 
          id="portrait" 
          src={portrait.data} 
          alt="profile-pic" 
          // onClick={this.props.enableEdit}
        />
        <div id="person-text">
          <div id="person-name">
            {this.selectTag({name})}
          </div>

          <div id="person-title">
            {this.selectTag({title})}
          </div>

          <div id="person-bio">
            {this.selectTag({desc})}
          </div>

        </div>

      </div>
    )
  }
}

export default Introduction;
