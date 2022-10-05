import React from 'react'
import './style.css'
import Todo from "../todo/Todo";

const List = ({todos, setTodos}) => {
  // 삭제 기능을 담은 함수 만들기
  const onRemoveHandler = (id) => {
    // 클릭한 것의 id와 각 요소의 id를 비교하여 일치하지 않는 것만 담기
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos); // setTodos에 newTodos 담아주기
  }

  const onEditHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      } else {
        return {...todo};
      }
    })
    setTodos(newTodos);
  }

  return (
    <div className='list-container'>
      <h1>✍️ WORKING</h1>
      <div className='list-wraper'>
        {todos.map((todo) => {
          if (!todo.isDone) { // if문에 반드시 return 넣어주기!!!!!
            return(
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onRemoveHandler={onRemoveHandler}
                onEditHandler={onEditHandler}
              />
            )
          } else {
            return null;
          }
        })}
      </div>

      <h1>👏 DONE</h1>
      <div className='list-wraper'>
        {todos.map((todo) => {
          if (todo.isDone) { // if문에 반드시 return 넣어주기!!!!!
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onRemoveHandler={onRemoveHandler}
                onEditHandler={onEditHandler}
              />
            )
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default List
