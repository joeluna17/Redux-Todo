import {ADD_TODO} from '../actions'


const intialState = {
    todos: [
            {
                id: 1,
                value: 'Walk the dog.',
                completed: false
            },

            {
            id: 2,
            value: 'Take out Trash',
            completed: false
            }
    ]
}


const rootReducer = (state = intialState, action) => {

    switch(action.type){
        case ADD_TODO: 
            return {
                todos: [...state.todos, action.payLoad  ]
        }

        default: return state;
    }
}



export default rootReducer;