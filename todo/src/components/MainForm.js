import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import { tsIndexSignature } from '@babel/types';



class MainForm extends React.Component {
     
    constructor(){
        super()
      
        this.state = {
            id: 4,
            value: "",
            completed: false
        }
    }

    changeHandler = (e) => {
         this.setState ({
                [e.target.name] : e.target.value
         })
    }

    addTodoClassMethod = (e) => {
         e.preventDefault();
        const newTodo = {
            id: this.state.id,
            value: this.state.value,
            completed: this.state.completed
        }    
         this.props.addTodo(newTodo)

         this.setState({
            id: 4,
            value: "",
            completed: false
         })
    }

    render(){
            console.log(this.props)
        return(
            <div>
                <form onSubmit={(e)=>this.addTodoClassMethod(e)}>
                    <input  name = 'value' 
                            type= 'text' 
                            value = {this.state.value} 
                            onChange = {this.changeHandler}
                            placeholder = "Add Todo" 
                    />
                    <button type="submit" >Add Todo</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    console.log(state)
    return{todos: state.todos}
}


export default connect(mapStateToProps,{addTodo})(MainForm);
