import React from 'react';
import styled from 'styled-components';

const Icon = (props) => {
  const SVG = props.el;
  return (
    <SVG viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
      <use xlinkHref={`../static/icons/icons.svg#icon-${props.icon}`} />
    </SVG>
  )
}

export default Icon;