import React, { useRef, useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const focusRef = useRef();

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 추가 함수
    if (!text) return;
    onAdd(text);
    setText("");

    focusRef.current.focus();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSubmit(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={focusRef} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
