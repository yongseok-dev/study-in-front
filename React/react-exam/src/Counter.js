import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCRENENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
function myReducer1(fuc, obj) {
  const state = { ...obj };
  const newFun = (params) => {
    let newState = fuc(state, params);
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
    return state;
  };
  return [state, newFun];
}
function myReducer2(fuc, state, set) {
  const newFun = (params) => {
    set(fuc(state, params));
  };
  return newFun;
}
const Counter = () => {
  // const [state, dispatch] = useReducer(reducer, { value: 0 });
  // const [state, dispatch] = myReducer1(reducer, { value: 0 });
  // useReucer 구현해 보기, state는 유사하게 구현했으나, 리랜더 할 수 있도록 체크가 제한됨.
  const [state, setState] = useState({ value: 0 });
  const dispatch = myReducer2(reducer, state, setState);
  // 상태를 useState를 사용하고 dispatch의 동작만 구현 -> set useState를 구현하면 useReducer 구현이 가능
  useEffect(() => {
    console.log(dispatch);
  });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCRENENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
