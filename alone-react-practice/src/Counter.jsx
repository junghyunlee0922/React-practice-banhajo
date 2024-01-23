import './Counter.css';


function Counter(props) {


  return (
    <button type="button" className="Counter" onClick={props.onCountUp}>
      {props.count}
    </button>
  );
}

export default Counter;

// 첫번째가 상태값 두번째가 그 상태를 업데이트를 할 수 있는 함수.
// 첫번째 - count
// 두번째 - setCount