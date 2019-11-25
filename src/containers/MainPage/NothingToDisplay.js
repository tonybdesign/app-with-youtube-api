import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { FaDizzy } from 'react-icons/fa';

import messages from './messages';

const Wrapper = styled.div`
  color: #0D0D0D;
  padding: 0 30px;
  margin: 10px 0;
  background: rgba(0, 0, 0, .02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

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

const NothingToDisplay = () => (
  <Wrapper>
    <h2>
      <FormattedMessage {...messages.nothingToShow} />
      <FaDizzy />
    </h2>
    <h4><FormattedMessage {...messages.typeName} /></h4>
  </Wrapper>
);

export default NothingToDisplay;
