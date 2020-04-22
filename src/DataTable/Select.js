import React from 'react';
import styled from 'styled-components';
import DropDownIcon from '../icons/Dropdown';

const SelectControl = styled.select`
  cursor: pointer;
  height: 24px;
  min-width: 24px;
  user-select: none;
  padding-left: 8px;
  padding-right: 12px;
  box-sizing: content-box;
  font-size: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
  appearance: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &::-ms-expand {
    display: none;
  }

  &:disabled::-ms-expand {
    background: #f60;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  font-size: inherit;
  color: inherit;
  margin-top: 1px;

  svg {
    color: inherit;
    fill: currentColor;
    width: 24px;
    height: 24px;
    display: inline-block;
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
