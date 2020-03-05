const initialState = {
   items: [] 
}

export default function items(state = initialState, action) {
  console.log(state.items)
   switch (action.type) {
     case 'ADD_ITEM':
       return {
         items: [...state.items, {
          id: Math.random(),
          text: action.text,
        }]
      }
     default:
       return state;
   }
}