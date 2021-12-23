import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class AddBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = { term: '' };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ term: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      if(this.state.term !== '') {
         this.props.addTodo(this.state.term);
         this.setState({ term: ''});
      }
   }

   render() {
      return (
         <div className="add">
            <form className="form" onSubmit={this.handleSubmit}>
               <input 
                  type="text"
                  name="add"
                  placeholder="Add a new to-do"
                  className="textfield"
                  value={this.state.term}
                  onChange={this.handleChange}
               />
               <input
                  type="submit"
                  value="+"
                  className="submit"
               />
            </form>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBar)