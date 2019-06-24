
// create the actions 
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETED';

// create the action creators

export const addTodo = (todo) => {
    return ({
        type: ADD_TODO,
        payload: todo
    })
}

export const toggleCompleted = (isCompleteid) => {
    console.log('in the toggle complete action creator', isCompleteid)

   return ({ 
     type: TOGGLE_COMPLETE,
     payload: isCompleteid 
    })
}