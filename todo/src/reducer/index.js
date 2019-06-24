import {ADD_TODO, TOGGLE_COMPLETE} from '../actions'

// intialize a default state for redux store
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

// the reducer function that handles the types of actions that get triggered by the user this exports to the "createStore" method that gets called in the <Provider> component that wraps the <APP/> component
// the reducer is always watching the for actions to be triggers and case matches the "action type" to actually copy, mutate, then update the new state
const rootReducer = (state = intialState, action) => {
    switch(action.type){
        case ADD_TODO: 
            return {
                todos: [...state.todos, action.payload]
        }

        case TOGGLE_COMPLETE:
            return{
               
                todos: state.todos.map(todo => todo.id === action.payload? {...todo, completed: !todo.completed } : todo)                                            
            }

        default: return state;
    }
}



export default rootReducer;