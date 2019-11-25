import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  color: #fff;
  line-height: 2.6rem;
  font-size: 2.4rem;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  margin-bottom: 40px;
`;

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Roller = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    animation: ${Animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0 0 -4px;
    }
  }

& div:nth-child(1) {
  animation-delay: -0.036s;
}
& div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
& div:nth-child(2) {
  animation-delay: -0.072s;
}
& div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
& div:nth-child(3) {
  animation-delay: -0.108s;
}
& div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
& div:nth-child(4) {
  animation-delay: -0.144s;
}
& div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
& div:nth-child(5) {
  animation-delay: -0.18s;
}
& div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
& div:nth-child(6) {
  animation-delay: -0.216s;
}
& div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
& div:nth-child(7) {
  animation-delay: -0.252s;
}
& div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
& div:nth-child(8) {
  animation-delay: -0.288s;
}
& div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
`;

const DataLoading = () => (
  <Wrapper>
    Data loading...
    <Roller class="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Roller>
  </Wrapper>
);

export default DataLoading;