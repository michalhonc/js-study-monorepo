import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoList from './VideoList';
// import VideoItem from './VideoItem';

class Video extends Component {

   render() {
      console.log(this.props.videos.items)
      return (
         <div>
            <ul>
               {this.props.videos && <VideoList list={this.props.videos.items.map(item => item)} />}
            </ul>
            {/* // <VideoItem /> */}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      videos: state.videos
   };
}

export default connect(mapStateToProps)(Video);
