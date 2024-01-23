import './Counter.css';
import { useState } from 'react'; // 리액트 훅 불러오기.

function Counter() {
  const [count, setCount] = useState(0); 

  const handleCountUp = () => setCount(count + 1);

  return (
    <button type="button" className="Counter" onClick={handleCountUp}>
      {count}
    </button>
  );
}

export default Counter;

// 첫번째가 상태값 두번째가 그 상태를 업데이트를 할 수 있는 함수.
// 첫번째 - count
// 두번째 - setCount