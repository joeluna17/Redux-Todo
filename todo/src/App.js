import React from 'react';
import './App.css';
import MainForm from './components/MainForm';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';


class App extends React.Component {

  render(){
        return (
              <div className="App">
                  <h1>Todo App</h1>
                  <h3>With Redux</h3>
                  <MainForm />
                  <TodoList todoList={this.props.todos} />
              </div>
        );
     }
}

const mapStateToProps = (state) => {
  
      return {todos: state.todos}
        
};

export default connect(mapStateToProps,{})(App);
