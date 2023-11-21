import React, { useRef, useState } from "react";

const UseRef1 = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  // 가상돔을 참조할 빈 객체로 생성
  const idFocus = useRef(null);

  const changeId = (e) => {
    const { value } = e.target;
    setUserId(value);
  };
  const changePw = (e) => {
    const { value } = e.target;
    setUserPw(value);
  };

  const onReset = () => {
    setUserId("");
    setUserPw("");

    // 랜더링이 되더라도 값을 기억하기 때문에 초기화시 커서 깜빡임
    idFocus.current.focus();
  };

  return (
    <div>
      <h2>useRef1</h2>
      <p>컴포넌트 랜더링과 상관없이 값을 보관</p>
      <ul>
        <li>DOM에 직접 접근하는 경우</li>
        <li>ref는 컴포넌트 안에서만 동작</li>
        <li>input의 focus나 scroll 이벤트, 애니메이션 사용시</li>
      </ul>
      <hr />
      <p>
        <input type="text" value={userId} onChange={changeId} ref={idFocus} />
        <input type="text" value={userPw} onChange={changePw} />
        <button onClick={onReset}>초기화</button>
      </p>
      <h3>
        id: {changeId} / pw: {changePw}
      </h3>
    </div>
  );
};

export default UseRef1;
/*
 선언
 const a = useRef();

 사용
 a.current.id = 'userID'
*/
