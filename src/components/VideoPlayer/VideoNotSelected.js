import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

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
    <h2><FormattedMessage {...messages.videoNotSelected} /></h2>
    <h4><FormattedMessage {...messages.clickOnVideo} /></h4>
  </Wrapper>
);

export default VideoNotSelected;
