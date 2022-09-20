import React, {useState} from 'react';
import TodoBoard from './TodoBoard';
import App from '../App';


//!item.complete  -> 토글 사용. 
//항상 뭐가 어디에 있는지 찾으면서 생각하기. 
// 어디서 뭘 변경해야 될지, 찾은 후에 거기 안에서 전환할 방법을 찾아보기. 

function TodoItem ({setTodoList, item, todoList,}) {
const {id, complete, task} = item;

const blank = () => { 
setTodoList([])

}

const onInsertToggle = (id) => {
  setTodoList(todoList.map((item) => {
    return item.id === id ? {...item, complete : !item.complete } : item;
  }))

// setTodoList(todoList.map((item) => {
//   return todoList.id === id ? {...item, complete : !item.complete} : item;
// } ))


// 원본배열.map((요소, index, 원본배열) => {return 요소});
// todoList.map((item, comlete) =>{...item, complete : !item.complete})
// 4번. 


// setTodoList(todoValue => todoValue.id === id ? {...todoValue, complete: !item.complete} : item)
// item.complete ? 
//컴플리트가 false면 true, true면 flase
// prev => !prev 이전 값의 boolean 함수 값을 반대로 바꿔주는 함수
//setTodoList(prev => !prev)

}

  return (
<div className={item.complete ? 'complete' : ""} onClick={()=> {onInsertToggle(id)}}>
    {item.task}
</div>
  );
};

export default TodoItem;


//{id:todoList.length, task:inputValue, complete: false}

//아이디 ..값을 받아
// function TodoItem({ id, completed, text }) {
//     return (
//         <TodoItemBlock>
//             <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
//             <Text done={done}>{text}</Text>
//             <Remove>
// 클릭하면 completed: true로 변경 
//true면 스타일 적용해서 줄 긋고 
//clear 버튼 누르면 삭제
//                 <MdDelete />
//             </Remove>
//         </TodoItemBlock>
//     );
// }


