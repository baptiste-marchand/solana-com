import styled from "styled-components";

const FadedStyleDiv = styled.div`
  position: relative;
  z-index: 20;

  & > .blur-info {
    position: relative;
    z-index: 30;
  }
`;

const FadedBlurDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  height: 100%;
  z-index: -1;

  &::before {
    position: absolute;
    inset: 0;
    content: "";
    z-index: 1;
    backdrop-filter: blur(6px);
    mask-image: linear-gradient(0deg, #000 60%, transparent);
  }
`;

const FadedBlur = ({ children }) => {
  return (
    <FadedStyleDiv>
      <FadedBlurDiv />
      <div className="blur-info">{children}</div>
    </FadedStyleDiv>
  );
};
export default FadedBlur;
