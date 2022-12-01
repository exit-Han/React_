import React, { useState } from 'react';
import './App.css';

const Todos = ({ item }) => (
  <div className='my-todo-h'>
    <div className='my-todo'>{item.todo}</div>
  </div>
)

const App = () => {

  const [todolist, setTodolist] = useState([{
    id: 1, todo: "리액트를 배워봅시다"
  }])

  const [addval, setAddval] = useState("")


  const add = () => {
    setTodolist([...todolist,
    { id: todolist.length, todo: addval }])

  }

  return (
    <div className='todo-Header'>
      <div className='stop'>
        <div className='todo-input'><input value={addval} onChange={(event) => setAddval(event.target.value)} />
          <button onClick={add}>추가하기</button></div>
        <div className='todo-list-Header'>
          <div className='h2'><h2>Todo List</h2></div>
          <div className='todo-aa'>{todolist.map((item) => <Todos item={item} key={todolist.id} />)}</div>
        </div>
      </div>
    </div>
  )
}

export default App;
