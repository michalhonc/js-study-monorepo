import React from 'react';

import AddBar from '../containers/add_bar';
import TodoList from '../containers/todo_list';

export default class App extends React.Component {
   render() {
      return (
         <div>
            <AddBar />
            <TodoList />
         </div>
      );
   }
} 