
// create the actions 
export const ADD_TODO = 'ADD_TODO';




// create the action creators

export const addTodo = (todo) => {
    return ({
        type: ADD_TODO,
        payLoad: todo
    })
}