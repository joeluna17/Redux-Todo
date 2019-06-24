import React from 'react'


const TodoList = props =>{

    return(

        <div>
            <ul>
                {
                    props.todoList.map(todo => {
                      return  <li key = {todo.id}>
                            {todo.value}
                        </li>
                    })
                }
            </ul>

        </div>

    )

}

export default TodoList;