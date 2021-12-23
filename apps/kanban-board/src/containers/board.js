import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBoard, deleteBoard } from '../actions/index';
import AddPost from '../containers/add_story';
import UserStory from '../components/user_story';


class Board extends React.Component {
   componentDidMount() {
      this.props.fetchBoard();
   }

   renderBoard(boards) {
      return boards.map(item => {
         return (
            <div key={item.order} className="story-list" id={item.order}>
            <input className="delete-board" type="submit" value="X" onClick={() => this.props.deleteBoard(item.order)} />
               <h3 className="story-header">{item.title}</h3>
               <div className="story-body">
                  {item.tickets.map((story, index) => {
                     story.index = index;
                     return (<UserStory key={story.id} story={story} parent={item.order} />);
                  })}
                  <hr />
                  <AddPost title={item.title} />
               </div>
            </div>
         );
      })
   }

   render() {
      return (
         <div className={`board board-${this.props.board.length}`}>
            {this.renderBoard(this.props.board)}
         </div>
      );
   }

}

function mapStateToProps(state) {
   return { 
      board: state.board
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ 
      fetchBoard,
      deleteBoard
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);