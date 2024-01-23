import Logo from "./Logo"; // 내보내진 Logo component를 불러오기.
import './App.css' // css코드를 불러온다.


// App함수 component
function App() {
  const list = Array(3).fill(null); // [null, null, null]

  return (
    <div className="App">
      {list.map((_, index) => (
        <Logo key={index} />
      ))}
    </div>
  );
}

export default App; // 내보내기로 App component를 내보내기.
