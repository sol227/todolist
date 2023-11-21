import React from "react";
import styled from "styled-components";

const Lists = styled.ul`
  font-size: 1rem;
  padding: 20px;
`;
const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const Btn = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: khaki;
  color: darkblue;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  border-radius: 15px;

  &:hover {
    border-radius: 15px;
  }
`;

const TodosList = ({ todos, setTodos }) => {
  const handleDelete = (index) => {
    // 삭제 로직 추가
    const updatedToDos = [...todos];
    updatedToDos.splice(index, 1);
    setTodos(updatedToDos);
  };
  return (
    <>
      <Lists>
        {todos.map((item, index) => (
          <List key={index}>
            🙂 {item} <Btn onClick={() => handleDelete(index)}>del</Btn>
          </List>
        ))}
      </Lists>
    </>
  );
};

export default TodosList;
