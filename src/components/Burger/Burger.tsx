import React from 'react'

import  bool, func  from 'prop-types';
import  BurgStyle  from './BurgStyle';

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <BurgStyle aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </BurgStyle>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};


const Burger = () => {
  return (
    <div>Burger</div>
  )
}

export default Burger;