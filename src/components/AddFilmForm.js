import React from 'react';


class AddFilmForm extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      url: ''
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleTitle(event){
    this.setState({name: event.target.value});
  }
  
  handleUrl(event){
    this.setState({url: event.target.value});
  }
  
  handleSubmit(event){
    event.preventDefault();
    if (!this.state.name.trim() || !this.state.url.trim()){
      return
    }
    this.props.onFilmSubmit(this.state)
    this.setState({name: '', url: ''})
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter title..."
        value={this.state.name} onChange={this.handleTitle}/>
        
        <input type="text" placeholder="IMDB url"
        value={this.state.url} onChange={this.handleUrl}/>
        
        <input type="submit" value="Add Film"/>
      </form>
    )
  }
  
}

export default AddFilmForm;
