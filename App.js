

import './App.css';
import React, { useState } from 'react';
import TodoBoard from './component/TodoBoard';
import TodoItem from './component/TodoItem';
// 1. 아이템이 true 면 
// 2. 클리어 버튼, 클릭 -> 삭제 

// 1. 아이템의 값 만들기
// 2. 아이템의 값 전달하기 


  //   setInputValue([
  //     {complete:false, id:1 , task:"할 일1"},
  //   {complete:false, id:2 , task:"할 일2"},
  // {complete:false, id:3 , task:"할 일3"}]);

function App() {

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const additem = () => {
    setTodoList([...todoList, inputValue])
    setInputValue("")
  }

// const delelteClick = (key) => {
//   setTodoList(
//     todoList.filter((one, delkey) => (delkey !==key));
//   )}


  return (
    <div>
        
      <TodoBoard todoList={todoList}></TodoBoard>
      <div>
      <button vlaue="Clear Completed">Clear Completed</button><p/>
          <input value={inputValue}
            type="text"
            placeholder='Enter task...'
            onChange={(event) => setInputValue(event.target.value)} />
            
          <button onClick={additem}>Submit</button>
    
      </div>
    </div>
  );
}

export default App;

