import Logo from "./Logo"; // 내보내진 Logo component를 불러오기.

// Logo함수 component
// Logo.jsx로 보냄.
// function Logo() {
//   return <img src="/react.svg" alt="리액트" />;
// }

// App함수 component
function App() {
  return (
    <>
      <Logo />
      <Logo />
      <Logo />
    </>
  );
}

export default App; // 내보내기로 App component를 내보내기.
