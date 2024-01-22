const logoImage = {
  src: "/react.svg",
  alt: "리액트",
};

const figureStyle = {marginBlock: 0, display: "flex", alignItems: "center", gap: 12}
const figcaptionStyle = { whiteSpace: "nowrap" }

// Logo함수 component
function Logo() {
  return (
    <figure style={figureStyle}>
      <img src={logoImage.src} alt="" />
      <figcaption style={figcaptionStyle}>{logoImage.alt}</figcaption>
    </figure>
  );
}

export default Logo;

// 인라인 style을 설정하는 style prop의 경우
// 바깥의 중괄호는 데이터를 연결시켜주기위한 JSX의 중괄호 구문이고
// 안쪽은 중괄호는 자바스크립트의 style객체이다.