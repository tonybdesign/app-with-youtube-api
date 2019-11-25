import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 99999999;
  position: fixed;
  top: 0;
  left: 0;  
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
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
  outline: none;
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
  font-size: 1.6rem;
  line-height: 2.4rem;
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

const SearchBar = ({ handleSearchSubmit, intl }) => {
  const submitHandler = (event) => {
    const { value } = event.target.search;
    event.preventDefault();

    if (event.target.search.value !== '') {
      handleSearchSubmit(value);
    }
  };
  return (
    <Wrapper>
      <Form id="search-form" onSubmit={submitHandler}>
        <InputWrapper>
          <SearchInput name="search" type="text" placeholder={intl.formatMessage(messages.searchInput)} />
        </InputWrapper>
        <Button for="search-form" type="submit">
          <FaSearch size={14} />
        </Button>
      </Form>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(SearchBar);
