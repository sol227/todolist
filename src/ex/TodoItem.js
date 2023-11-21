const TodoItem = ({ list, onDel, onMod }) => {
  const { id, text, isChk } = list;
  return (
    <li>
      <strong onClick={() => onMod(id)} className={isChk ? "on" : ""}>
        {text}
      </strong>
      <button className="delBtn" onClick={() => onDel(id)}>
        del
      </button>
    </li>
  );
};

export default TodoItem;
