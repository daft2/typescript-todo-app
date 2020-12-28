import React from 'react';
import './App.css';

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
}>

type CompletedTodo = Readonly<{
  id: number
  text: string
  done: true
}>

const item: Todo = {
  id: 1,
  text: "First Todo",
  done: false
}

function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  
}

function App() {
  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
