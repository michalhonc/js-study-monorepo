import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { moveStory, deleteStory } from '../actions/index';

class UserStory extends React.Component {
   constructor(props) {
      super(props);
      this.state = { visible: false };

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      this.setState({ visible: !this.state.visible });
   }

   render() {
      return (
         <div id={this.props.story.index} onClick={this.handleClick} 
            className={`story-item ${this.props.story.status} ${this.props.story.type}`}>
            <div className="story-item-text">
               <h4>{this.props.story.name}</h4>
               <span>{this.props.story.desc}</span>
            </div>
            <div className={`roll ${this.state.visible ? 'roll-up' : 'roll-down'}`}>
               <button className="button button-left" onClick={() => this.props.moveStory(this.props.parent, this.props.story.id, 'left')}><i className="fas fa-angle-double-left"></i></button>
               <button className="button button-delete" onClick={() => this.props.deleteStory(this.props.parent, this.props.story.index)}><i className="far fa-trash-alt fa-lg"></i></button>
               <button className="button button-right" onClick={() => this.props.moveStory(this.props.parent, this.props.story.id, 'right')}><i className="fas fa-angle-double-right"></i></button>
            </div>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ moveStory, deleteStory }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserStory);