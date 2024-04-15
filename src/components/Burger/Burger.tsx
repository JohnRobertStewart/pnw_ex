import React from 'react'
import styled from 'styled-components';
import  bool from 'prop-types';
import  func from 'prop-types';
import  BurgStyle  from './BurgStyle';

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <BurgStyle aria-label="Toggle menu" aria-expanded={isExpanded} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </BurgStyle>
  )
}

Burger.PropTypes = {
  open: bool,
  setOpen: func,
};


const Burger = () => {
  return (
    <div>Burger</div>
  )
}

export default Burger;