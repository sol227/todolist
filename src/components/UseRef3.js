import styled from "styled-components";
import { useRef, useState } from "react";

const Box = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 30px;
  background-color: aquamarine;
  transition: 0.3s;
`;

const UseRef3 = () => {
  const boxRef = useRef(null);
  let [num, setNum] = useState(1);

  const nextRotate = () => {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  const prevRotate = () => {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };

  return (
    <div className="borderTop">
      <button onClick={nextRotate}>오른쪽으로</button>
      <button onClick={prevRotate}>왼쪽으로</button>

      <Box ref={boxRef}>box</Box>
    </div>
  );
};

export default UseRef3;
