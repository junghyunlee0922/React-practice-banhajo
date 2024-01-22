import Logo from "./Logo"; // 내보내진 Logo component를 불러오기.
import './App.css' // css코드를 불러온다.

// Logo함수 component
// Logo.jsx로 보냄.
// function Logo() {
//   return <img src="/react.svg" alt="리액트" />;
// }

// App함수 component
function App() {
  return (
    <div className="App">
      <Logo />
      <Logo />
      <Logo />
    </div>
  );
}

export default App; // 내보내기로 App component를 내보내기.
