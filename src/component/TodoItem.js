import React from 'react';

function TodoItem (props) {


  return (
<div className='todo-item'>
    {props.item}
</div>
  );
};

export default TodoItem;


//아이디 ..값을 받아
// function TodoItem({ id, done, text }) {
//     return (
//         <TodoItemBlock>
//             <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
//             <Text done={done}>{text}</Text>
//             <Remove>
//                 <MdDelete />
//             </Remove>
//         </TodoItemBlock>
//     );
// }
 

// const deleteItem = (id) => {
//     const cleanToDos = todoList.filter(
//       (listItem) => listItem.id !== parseInt(id, 10),
//     );
//     window.localStorage.setItem('todoList', JSON.stringify(cleanToDos));
//     setTodoList(cleanToDos);
// };