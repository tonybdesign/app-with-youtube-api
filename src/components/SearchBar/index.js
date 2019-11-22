import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 0 16px;
`;

const Form = styled.form`
  max-width: 640px;
  width: 640px;
  height: 30px;
  display: flex;
`;

const Button = styled.button`
  width: 56px;
  background: rgb(248, 248, 248);
  border-color: rgb(209, 209, 209);
  border-left: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
    height: 100%;
    display: inline-block;
    background: transparent;
    box-sizing: border-box;
    padding: 2px 36px 2px 6px;
    border: none;
    outline: none;
`;

const InputWrapper = styled.div` 
  flex: 1;
  height: 30px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
  border: 1px solid rgb(209, 209, 209);
  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.1);

  &:focus-within {
    border-color: #1c62b9;
  }
`;

const SearchBar = () => {

  return (
    <Wrapper>
      <Form>
        <InputWrapper>
          <SearchInput name="search" type="text" placeholder="Search" />
        </InputWrapper>
        <Button>Search</Button>
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
