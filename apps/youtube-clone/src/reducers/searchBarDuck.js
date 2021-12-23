import axios from 'axios';

// constanty
const ON_SEARCH = 'ON_SEARCH';
const API_KEY = 'AIzaSyAtuKDGo5zxcOwK1w37XXtbRoyd_c9iXn8'; 


// reducers
export function searchBarReducer(state = {}, action) {
   switch (action.type) {
      case ON_SEARCH:
        return action.payload.data;
   
      default:
         return [ ...state ];
   }
}

// actions
export function onSearch (term) {
   const response = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=${API_KEY}`);

   return {
       type: ON_SEARCH,
       payload: response
   };
};
