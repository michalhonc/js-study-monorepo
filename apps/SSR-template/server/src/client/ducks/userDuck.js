import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

export default function reducer (state = [], action) {
   switch (action.type) {
      case FETCH_USERS:
         return action.payload.data;
   
      default:
         return state;
   }
}

export const fetchUsers = () => async dispatch => {
   const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

   dispatch({
      type: FETCH_USERS,
      payload: res
   });
}