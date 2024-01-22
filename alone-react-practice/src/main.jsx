import ReactDOM from 'react-dom/client'; // reactDOM 불러오기.
import App from './App'; // 내보내진 App component를 불러오기.


// Logo함수 component
// App.jsx로 옮김
// function Logo() {
//   return <img src="/react.svg" alt="리액트" />;
// }

// App 함수 component
// function App() {
//   return (
//     <div className='App'>
//       <Logo />
//     </div>
//   )
// }

ReactDOM.createRoot(document.getElementById("root"))
  .render(<App />);

// ReactDOM.createRoot(document.getElementById("root"))
//   .render(<img src="/react.svg" alt="리액트" />);