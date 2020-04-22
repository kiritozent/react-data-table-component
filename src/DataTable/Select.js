import React from 'react';
import styled from 'styled-components';
import DropDownIcon from '../icons/Dropdown';

const SelectControl = styled.select`
  cursor: pointer;
  height: 24px;
  min-width: 24px;
  user-select: none;
  paddingRight: 24px;
  padding-left: 8px;
  box-sizing: content-box;
  font-size: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:disabled::-ms-expand {
    background: #f60;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  font-size: inherit;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: inherit;
    fill: currentColor;
    position: absolute;
    right: 0px;
    width: 24px;
    height: 24px;
    user-select: none;
    pointer-events: none;
  }
`;

const Select = props => (
  <SelectWrapper>
    <SelectControl {...props} />
    <DropDownIcon />
  </SelectWrapper>
);

export default Select;
