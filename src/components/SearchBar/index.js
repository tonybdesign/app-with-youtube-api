import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.div`
  height: 56px;
  padding: 0 16px;
`;

const SearchBar = () => {

  return (
    <Wrapper>
      <input name="search" type="text" />
    </Wrapper>
  );
};

export default SearchBar;
