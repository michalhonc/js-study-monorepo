import React from 'react';
import Board from './containers/board';
import AddBoard from './containers/add_board';
export default () => {
   return(
      <div className="app">
         <AddBoard />
         <Board />
      </div>
   );
}