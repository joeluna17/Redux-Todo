import React from 'react';
import './App.css';
import MainForm from './components/MainForm';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {toggleCompleted} from './actions'

class App extends React.Component {

toggleCompletedClassMethod=(e,id)=>{
    e.preventDefault()
    console.log(e, id)
    this.props.toggleCompleted(id)
   
}

  render(){
        return (
              <div className="App">
                  <h1>Todo App</h1>
                  <h3>With Redux</h3>
                  <MainForm />
                  <TodoList todoList={this.props.todos} toggleCompleted={this.toggleCompletedClassMethod} />
              </div>
        );
     }
}

const mapStateToProps = (state) => {
    console.log('This is in the map to state func', state.todos)
      return {todos: state.todos}
        
};

export default connect(mapStateToProps,{toggleCompleted})(App);

