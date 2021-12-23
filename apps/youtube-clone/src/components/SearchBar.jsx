import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSearch } from '../reducers/searchBarDuck';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {
   constructor(props) {
      super(props);

      this.state = { term: '' };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);

      this.props.onSearch('Sting');
   }

   handleSubmit(e) {
      e.preventDefault();
      this.props.onSearch(this.state.term);
   }

   onInputChange(e) {
      this.setState({ term: e.target.value });
   }

   render() {
      return (
         <div className="search-bar">
            <form onSubmit={this.handleSubmit} className="search-bar__form">
               <input  
                  type="text"
                  className="search-bar__input"
                  onChange={this.onInputChange}
                  value={this.state.term}
                  placeholder="find an interesting video.." 
               />
               <input 
                  type="submit" 
                  className="search-bar__submit"
                  value="search" 
               />
            </form>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);



// const mapStateToProps = state => {
//   return {
//      videos: state.videos
//   };
// }