/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, ReactElement, useRef, forwardRef, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

interface GradientSliderProps {
  stop: em.GradientStop;
  activeStopIndex: number;
  index: number;
}

const GradientSliderStop = (props: GradientSliderProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { stop, activeStopIndex, index } = props;

  return (
    <div
      id={`gradient-stop-${index}`}
      className='c-gradient-slider__pointer'>
      <div
        className='c-gradient-slider__circle'
        style={{
          boxShadow: index === activeStopIndex
          ? `0 0 0 1.5px #fff, 0 0 0 3.5px ${theme.palette.primary}, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)`
          : `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4)`,
          background: stop.color
        }} />
    </div>
  );
}

export default GradientSliderStop;