import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper';

const ButtonOne = (props) => {
  return (
    <button style={props._styles}>buttonOne</button>
  )
}

export default stylesWrapper(ButtonOne);