import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addBoard } from '../actions/index';

class AddBoard extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         term: '',
       };

      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
   }

   onFormSubmit(event) {
      event.preventDefault();
      if(this.state.term) {
         this.props.addBoard(this.state.term);
         this.setState({ term: '' });   
      } else {
         alert("Cannot add a board without a name")
      }
   }

   onInputChange(event) {
      this.setState({ term: event.target.value });
   }

   render() {
      return (
         <div className="add-board">
            <form onSubmit={this.onFormSubmit}>
               <input  
                  value={this.state.term} onChange={this.onInputChange} placeholder="Add a new board.." />
               <button className="input-add" type="submit">add</button>        
            </form>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ addBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddBoard);