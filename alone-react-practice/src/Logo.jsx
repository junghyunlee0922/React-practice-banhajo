const logoImage = {
  src: "/react.svg",
  alt: "리액트",
};

const figureStyle = {marginBlock: 0, display: "flex", alignItems: "center", gap: 12}
const figcaptionStyle = { whiteSpace: "nowrap" }

// Logo함수 component
function Logo() {
  const onlyRenderImage = true;
  // const onlyRenderImage = false; // 거짓일때 조건문 작동 안함.

  // if (onlyRenderImage) {
  //   return <img src={logoImage.src} alt="" />;
  // }

  // 삼항식으로 대신
  // return onlyRenderImage ? <img src={logoImage.src} alt="" /> : (
  //   <figure style={figureStyle}>
  //     <img src={logoImage.src} alt="" />
  //     <figcaption style={figcaptionStyle}>{logoImage.alt}</figcaption>
  //   </figure>
  // );

  // 논리 연산자
  return (
    <figure style={figureStyle}>
      <img src={logoImage.src} alt="" />
      {onlyRenderImage || <figcaption style={figcaptionStyle}>{logoImage.alt}</figcaption>}
    </figure>
  );

  
}

export default Logo;