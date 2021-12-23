import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStory } from '../actions/index';

class AddPost extends React.Component {
   //props board title;
   constructor(props) {
      super(props);
      this.state = { 
         storyName: '',
         storyDesc: '',
         storyType: 'user-story'
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onTextareaChange = this.onTextareaChange.bind(this);
      this.onSelectChange = this.onSelectChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onInputChange(event) {
      this.setState({ storyName: event.target.value });
   }

   onTextareaChange(event) {
      this.setState({ storyDesc: event.target.value });
   }

   onSelectChange(event) {
      this.setState({ storyType: event.target.value });
   }

   onSubmit(event) {
      event.preventDefault();
      if(this.state.storyName) {
            this.props.addStory(this.state, this.props.title);
            this.setState({ storyName: '' });
            this.setState({ storyDesc: '' });
      } else {
            alert("Story has to have a name");
      }
      
   }

   render() {
   
      return (
            <form className="story-form" onSubmit={this.onSubmit}>
               <select className="story-select" value={this.state.storyType} onChange={this.onSelectChange}>
                  <option value="user-story">User story</option>
                  <option value="defect">Defect</option>
                  <option value="task">Task</option>
                  <option value="feature">Feature</option>
               </select>
               <input className="add-story-button" type="submit" name="submit" value="Add new task" />
               <input className="add-story-text" placeholder="Name.." type="text" name="name" value={this.state.storyName} onChange={this.onInputChange} />
               <textarea className="add-story-text" placeholder="Description.." name="desc" value={this.state.storyDesc} onChange={this.onTextareaChange} />
            </form>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ 
      addStory
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddPost);