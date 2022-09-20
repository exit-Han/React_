import React, {useState} from 'react';
import TodoItem from './TodoItem';
import App from '../App';

function TodoBoard({setTodoList, todoList}) {
// console.log("todoBoard", props.todoList, props.item)

 
    return (
        <div>
        <h1>To Do List</h1>
        {todoList.map((item)=><TodoItem 
        item={item} key={item.id} 
        setTodoList={setTodoList} 
        todoList={todoList}/>
        )}
        </div>
    );
}

export default TodoBoard;

// ...ooo,
// complete:true


// 알아낸 결론 결국 item에 값 = 키 를 추가해야 된다. 

//id:todoList.length, task:inputValue, complete:false


// const changeContents = () => {
//     setContents(prev => prev === item.comp ? "this is react!" : "this is hook")
// }