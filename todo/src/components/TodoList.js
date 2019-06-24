import React from 'react'


const TodoList = props =>{

    return(

        <div>
            <ul>
                {
                    props.todoList.map(todo => {
                      return  <li className={`${todo.completed?"completed" : ""}`} key={todo.id} onClick= {(e)=>props.toggleCompleted(e, todo.id)}>
                            {todo.value}
                        </li>
                    })
                }
            </ul>

        </div>

    )

}

export default TodoList;