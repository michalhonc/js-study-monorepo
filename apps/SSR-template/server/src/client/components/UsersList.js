import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../ducks/userDuck';

function mapStateToProps(state) {
   return { users: state.users };
}

function loadData(store) {
   return store.dispatch(fetchUsers());
}

class UsersList extends Component {
   componentDidMount() {
      this.props.fetchUsers();
   }

   renderUsers() {
      return this.props.users.map(user => {
         return <li key={user.id}>{user.name}</li>;
      });
   }

   render() {
      return (
         <div>
            Users:
            <ul>{this.renderUsers()}</ul>
         </div>
      )
   }
}

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);