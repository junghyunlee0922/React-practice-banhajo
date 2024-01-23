import './Logo.css'

const logoImage = {
  src: "/react.svg",
  alt: "리액트",
};

// Logo함수 component
function Logo() {
  const onlyRenderImage = false; // 거짓일때 조건문 작동 안함.

  const handleEnter = (e) => {
    // console.log(e.currentTarget);
    const element = e.currentTarget;
    element.style.scale = 1.5;
  };

  const handleLeave = (e) => {
    const element = e.currentTarget;
    element.style.scale = 1;
  }

  return (
    <figure className="Logo" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img src={logoImage.src} alt="" />
      {onlyRenderImage || <figcaption>{logoImage.alt}</figcaption>}
    </figure>
  );
}

export default Logo;