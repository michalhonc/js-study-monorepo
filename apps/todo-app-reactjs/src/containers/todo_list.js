import React from 'react';
import { connect } from 'react-redux';

import { removeTodo, changeStatus } from '../actions/index';
import { bindActionCreators } from 'redux';

class TodoList extends React.Component {

   removeTodo(item) {
      this.props.removeTodo(this.props.todo, item);
   }

   changeStatus(item) {
      this.props.changeStatus(this.props.todo, item);
   }

   renderList() {
         return this.props.todo.map(item =>{
            const className = item.active ? 'active' : 'inactive';
            return (
               <li className={className} key={item.id}>
                  <label className="item">{item.payload}</label>
                  <input className="change" type="button" value="Done" onClick={() => this.changeStatus(item)}/>
                  <input className="delete" type="button" value="Del" onClick={() => this.removeTodo(item)}/>
               </li>
            );
         })
      
   }

   render() {
      return(
         <div className="todo-list">
            <ul className="">
               {this.renderList()}
            </ul>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return ({ todo: state.todo });
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ removeTodo, changeStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);