import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../assets/style/TodoStyle.css";

const Todos1 = () => {
  const [data, setData] = useState([]);
  const no = useRef(1);

  // 추가 Create
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isChk: false }]);
  };

  // 삭제 Delete
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };

  // 수정 Update(취소선)
  const onMod = (id) => {
    setData(
      data.map((list) =>
        list.id === id ? { ...list, isChk: !list.isChk } : list
      )
    );
  };

  return (
    <div className="container">
      <h2>to do list</h2>
      {/* 입력 받은 컴포넌트 */}
      <TodoForm onAdd={onAdd} />

      {/* 리스트 출력 컴포넌트(1. 출력, 2. 삭제, 3. 완료) */}
      <TodoList data={data} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todos1;
