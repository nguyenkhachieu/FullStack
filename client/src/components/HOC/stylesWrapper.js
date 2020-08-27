import React from 'react';

const styles = {
  default: {
    backgroundColor: 'red',
  },
  disable: {
    backgroundColor: 'e9e9e9',
    opacity: '0.5'
  }
}

const translateProps = (props) => {
  let _styles = {...styles.default};
  if (props.disable) {
    _styles = {...styles, ...styles.disable}
  }

  const newProps = {...props, _styles: _styles}
  return newProps;
}
const stylesWrapper = (WrappedComponent) => {
  return function wrappedRender(args) {
    return WrappedComponent(translateProps(args));
  }
}

export default stylesWrapper;