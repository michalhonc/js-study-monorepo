import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS } from '../actions/index';
import shortid from 'shortid';

export default function(state = [], action) {
      
   switch (action.type) {
      case ADD_TODO: {
            const payload = {
                  id: shortid.generate(),
                  payload: action.payload,
                  active: true
            };
            return [ payload, ...state ];
      }
      
      case REMOVE_TODO: {
            const payload = action.payload.filter(i => i.id !== action.toDelete.id)
            return payload;
      }

      case CHANGE_STATUS: {
            const payload = action.payload.map(i => {
                  if(i.id === action.toChange.id) {
                        if(i.active) {
                              i.active = false;
                        } else {
                              i.active = true;
                        }
                  }
                  return i;
               })
            
            return payload;
      }

      default:
         return state;
   }
}