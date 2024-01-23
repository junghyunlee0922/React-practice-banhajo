import './App.css'
import { useState } from 'react';
import Counter from "./Counter";


// App함수 component
function App() {
  const list = Array(3).fill(null);

    const [count, setCount] = useState(0);

    const handleCountUp = () => setCount(count + 1);

  return (
    <div className="App">
      {list.map((_, index) => (
        <Counter key={index} count={count} onCountUp={handleCountUp} />
      ))}
    </div>
  );
}

export default App; // 내보내기로 App component를 내보내기.
