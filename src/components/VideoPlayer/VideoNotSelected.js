import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #0D0D0D;
  height: 300px;
  background: rgba(0, 0, 0, .02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    font-size: 3.2rem;
    margin: 20px;
    font-weight: 500;
  }
  & h4 {
    font-size: 2.6rem;
    margin: 0;
    font-weight: 500;
  }
`;

const VideoNotSelected = () => (
  <Wrapper>
    <h2>Video not selected :(</h2>
    <h4>Please click on video from the list --&gt</h4>
  </Wrapper>
);

export default VideoNotSelected;
