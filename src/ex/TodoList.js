import TodoItem from "./TodoItem";

const TodoList = ({ data, onDel, onMod }) => {
  return (
    <ul>
      {data.map((list) => (
        <TodoItem key={list.id} list={list} onDel={onDel} onMod={onMod} />
      ))}
    </ul>
  );
};

export default TodoList;
