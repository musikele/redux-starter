//State argument is not application state, 
// only the state this reducer il responsible
//for. 
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED': 
      return action.payload;
  }
  return state;
}