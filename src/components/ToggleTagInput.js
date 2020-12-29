import React from 'react';

class RenderExperience extends React.Component {
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
    const EditTag = this.props.type === 'desc' ? 'textarea' : 'input';

    return (
      this.state.editing
      ? <EditTag
          id={this.props.id} 
          className={this.props.className} 
          onBlur={this.handleEdit} 
          onKeyDown={this.handleEdit} 
          autoFocus 
          defaultValue={this.state.value} >
        </EditTag>
      : <p
          id={this.props.id} 
          className={this.props.className} 
          onClick={this.toggleStatus} >
          {this.state.value}
        </p>  
    )
  }
}

export default RenderExperience;
