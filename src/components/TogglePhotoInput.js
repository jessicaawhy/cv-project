import React from 'react';

class TogglePhotoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item,
      editing: false,
   }
  }

  toggleStatus = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }));
  }

  handleEdit = (e) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      if (e.target.value === '') {
        alert('Please prove a value!');
      } else {
        this.setState({value: e.target.value});
        this.toggleStatus();
      }
    } else if (e.key === 'Escape') {
      this.toggleStatus();
    }
  }

  render() {
    return (
      this.state.editing
      ? <React.Fragment>
          <img 
            id="portrait" 
            src={this.state.value} 
            alt="profile-pic" 
          />
          <div id="portrait-url">
            URL:
            <input
              id="portrait-url"
              onBlur={this.handleEdit} 
              onKeyDown={this.handleEdit} 
              autoFocus 
              defaultValue={this.state.value} >
            </input>
          </div>
        </React.Fragment>
      : <img 
          id="portrait" 
          src={this.state.value} 
          alt="profile-pic" 
          onClick={this.toggleStatus}
        />
    )
  }
}

export default TogglePhotoInput;
