import './App.css';
import React, { useState } from 'react';
import TodoBoard from './component/TodoBoard';
import TodoItem from './component/TodoItem';
function App() {

  const [inputValue, setInputValue] = useState("")
  const [todoList, setTodoList] = useState([])

  const additem = () => {
    setTodoList([...todoList, {id:todoList.length, task:inputValue, complete: false} ])
    setInputValue("")
  }

  // const oninsertToggle = ()=> {
  //   todoList.map((item.complete) =>{...item, complete : !item.complete})
  // }

  // const filterTodos = todoList.filter(todoList => todoList.complete === true); ... .. .
const onRemove = (complete) => {
  setTodoList(todoList.filter((item) => 
    item.complete === !complete
  ))
      }
    
  

 

  return (
    <div>
      <TodoBoard todoList={todoList} inputValue={inputValue} setTodoList={setTodoList}></TodoBoard>
      <div>
        
        <button onClick={onRemove}>Clear Completed</button><p/>
  
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

// onClick={()=>{
//         const chtrue = []
//         //prosp.item.comlete
//         for( var i = 0; i < todoList.length; i++)
//         if(TodoItem.complete(true) ===  TodoItem.complete(true)) {
//           // 스타일 적용 -> 까먹음 그 중간 줄 긋기
//           chtrue.push()

//         }





//투두 removeBTN 

// const removeTodo = id => {
//   const removeArr = [...todoList].filter(todoList => todoValue.id !== id );
// }