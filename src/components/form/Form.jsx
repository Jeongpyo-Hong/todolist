import React, { useState } from "react";
import './style.css'

// id에 넣을 number 값을 변수에 담아주기 기존에 2개 항목이 있어서 2부터 시작
let number = 3;

const Form = ({todos, setTodos}) => { // todos, setTodos를 부모 컴포넌트에서 받아오기
  const initialState = { // 초기값을 변수에 담아주기
    id: 0,
    title: '',
    body: '',
    isDone: false
  };

  const [todo, setTodo] = useState({initialState}); // todo에 초기값이 들어감

  const onChangeHandler = (e) => { // 인자로 name, value를 받아서 그것을 타겟으로 지정
    const {name, value} = e.target;
    setTodo({
      ...todo, // 기존 배열의 불변성 유지를 위해 전개연산자를 써주고
      [name]: value // input태그의 각 name의 value값을 가져옴, 대괄호인 이유는???
    });
  };
  console.log(todo);

  const onSubmitHandler = (e) => {
    e.preventDefault(); // 페이지 새로고침(?) 방지
    if (todo.title.trim() === '' || todo.body.trim() === '') return;
    // title 혹은 body가 공백이면 그대로 리턴하고 아니면 아래 코드 실행
    setTodos([...todos, {...todo, id: number}]);
    // [{기존객체}, {기존객체}, {나머진 유지하고 id에 number 값을 넣은 객체}]
    setTodo(initialState);
    // 다시 초기값을 넣어줘서 공백 상태로 만들기
    number++; // number 1 증가시키기
  };

  return (
    <form onSubmit={onSubmitHandler} className='add-form'>
      <div className='input-group'>
        <label>제목</label>
        <input
        name='title'
        value={todo.title}
        onChange={onChangeHandler}
        required='required'
        type="text" />
        <label>내용</label>
        <input
        name='body'
        value={todo.body}
        onChange={onChangeHandler}
        required='required'
        type="text" />
      </div>
      <button>작성하기</button>
    </form>
  );
};

export default Form;
