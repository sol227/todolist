import React, { useState } from "react";
import TodosList from "./TodosList";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px auto;
  text-align: center;
  background-color: lightgoldenrodyellow;
  padding: 20px;
  width: 500px;
`;
const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5rem;
  color: darkblue;
`;
const ToDoList = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TxtBox = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid darkblue;
  background-color: transparent;
  padding: 5px 10px;
  margin: 10px;
  width: 250px;
`;
const Btn = styled.button`
  border: 1px solid darkblue;
  padding: 5px 10px;
  background-color: darkblue;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  border-radius: 15px;

  &:hover {
    background-color: #fff;
    color: darkblue;
  }
`;

const Todos = () => {
  const [toDo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <Container>
      <Title>to do list</Title>
      {/* 입력 받는 컴포넌트 */}
      {/* 리스트 출력 컴포넌트(1. 출력, 2. 삭제, 3. 완료) */}
      <ToDoList onSubmit={onSubmit}>
        <TxtBox type="text" onChange={onChange} value={toDo} />
        <Btn>add</Btn>
      </ToDoList>
      <TodosList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default Todos;
