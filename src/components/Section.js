import React from "react";
import styled from "styled-components";

export default function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <TextItem>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextItem>

      <Buttons>
        <ButtonSet>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonSet>
        <ArrowDown src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
`;
const TextItem = styled.div`
  padding-top: 20vh;
  text-align: center;
  font-size: 18px;
  // z-index: -1;
`;

const ButtonSet = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const ArrowDown = styled.img`
  height: 40px;

  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;
const Buttons = styled.div``;
