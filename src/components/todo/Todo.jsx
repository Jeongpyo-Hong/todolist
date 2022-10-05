import React from 'react'
import './style.css'

const Todo = ({todo, onRemoveHandler, onEditHandler}) => {
  return (
    <div className='todo-container'>
      <div>
        <h2 className='todo-title'>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <button
        onClick={() => onRemoveHandler(todo.id)}
        className='todo-btn1'
        >
          DELETE
      </button>
      <button
        onClick={() => onEditHandler(todo.id)}
        className='todo-btn2'
        >
        {todo.isDone ? '취소' : '완료'}
      </button>
    </div>
  )
}

export default Todo
