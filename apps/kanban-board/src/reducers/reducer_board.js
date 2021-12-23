import { FETCH_BOARD, ADD_STORY, ADD_BOARD, MOVE_STORY, DELETE_STORY, DELETE_BOARD } from '../actions/index';
import shortid from 'shortid';

export default function(state = [], action) {
   switch (action.type) {
      case FETCH_BOARD:
            return state;
   
      case ADD_STORY:
            const ticket = {
                  id: shortid.generate(),
                  name: action.payload.request.storyName,
                  desc: action.payload.request.storyDesc,
                  status: 'New',
                  type: action.payload.request.storyType
               }
           
            const payload = state.map(i => {
                  if(i.title === action.payload.title) {
                        return {
                              tickets: i.tickets.concat(ticket),
                              title: i.title,
                              order: i.order
                        };
                  }
                  return i;
            });

            return payload;

      case ADD_BOARD: {

            const payload = state.concat([{
                  order: state.length,
                  title: action.payload,
                  tickets: []
               }]);
            return payload;
      }

      case MOVE_STORY: {
            const id = action.payload.id;
            const type = action.payload.type;
            const parent = action.payload.parent;
            
            state[parent].tickets.map((item, index) => {
                  if(item.id === id) {
                        if(type === 'right' && state[parent+1] != null) {
                              state[parent+1].tickets.push(item);
                              state[parent].tickets.splice(index, 1);
                        } else if(type === 'left' && state[parent-1] != null) {
                              state[parent-1].tickets.push(item);
                              state[parent].tickets.splice(index, 1);
                        }
                  }
                  return item;
            });
            
            return [ ...state ];
      }
      case DELETE_STORY: {
            const parent = action.payload.parent;
            const id = action.payload.id;

            state[parent].tickets.splice(id,1);
            return [ ...state ]; 
      }
      case DELETE_BOARD: {
            state.splice(action.payload, 1);
            
            // Order has to start with 0 and be incrementaly added
            state.forEach((item, index) => {
                  return item.order = index;
            })
            return [ ...state ];
      }
      default:
         return state;
   }
}