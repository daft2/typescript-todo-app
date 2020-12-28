import React from 'react';
import './App.css';

type Place = 'home' | 'work' | { custom: string }

type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place?: Place
}>

type CompletedTodo = Todo & {
  readonly done: true
}

const items = [
  {
    id: 1,
    text: "First Todo",
    done: false
  },
  {
    id: 2,
    text: "Second Todo",
    done: false
  }
]

function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}

function placeToString(place: Place): string{
  if (place === 'home') {
    return "🏠 Home"
  }else if (place === 'work') {
    return "💼 Work"
  }else {
    return '📍' + place.custom
  }
}

function App() {
  return (
    <>
      {items.map(item => (
        <div>
          <input type="checkbox" id="checkboxName" />
          <label htmlFor="checkboxName">{item.text}</label>
        </div>
      ))}
      <input type="button" value="mark all" />
    </>
  );
}

export default App;
