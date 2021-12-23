import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {
   state = { comment: '' };
   
   handleChange(event) {
      this.setState({ comment: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      
      this.props.saveComment(this.state.comment);
      this.setState({ comment: '' });
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit.bind(this)} >
               <h4>Add a comment</h4>
               <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
               <div>
                  <button>Submit</button>
               </div>
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
         </div>
      );
   }
}

export default connect(null, actions)(CommentBox);