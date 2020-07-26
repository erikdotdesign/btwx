/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ThemeContext } from './ThemeProvider';
import { RootState } from '../store/reducers';
import { setTweenDrawerTweenEditing } from '../store/actions/tweenDrawer';
import { SetTweenDrawerTweenEditingPayload, TweenDrawerTypes } from '../store/actionTypes/tweenDrawer';
import { SetLayerTweenDurationPayload, SetLayerTweenDelayPayload, LayerTypes } from '../store/actionTypes/layer';
import { setLayerTweenDuration, setLayerTweenDelay } from '../store/actions/layer';

gsap.registerPlugin(Draggable);

interface TimelineTweenHandleProps {
  tweenId: string;
  tween?: em.Tween;
  tweenHover?: string;
  tweenEditing?: string;
  setLayerTweenDuration?(payload: SetLayerTweenDurationPayload): LayerTypes;
  setLayerTweenDelay?(payload: SetLayerTweenDelayPayload): LayerTypes;
  setTweenDrawerTweenEditing?(payload: SetTweenDrawerTweenEditingPayload): TweenDrawerTypes;
}

const TimelineTweenHandle = (props: TimelineTweenHandleProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { tweenId, tween, setLayerTweenDelay, setTweenDrawerTweenEditing } = props;
  const [prevDuration, setPrevDuration] = useState(tween.duration);

  useEffect(() => {
    const tweenHandleElement = document.getElementById(`${tweenId}-handle-tween`);
    const leftHandleElement = document.getElementById(`${tweenId}-handle-left`);
    const rightHandleElement = document.getElementById(`${tweenId}-handle-right`);
    const leftHandleTooltipElement = document.getElementById(`${tweenId}-tooltip-left`);
    const timelineElement = document.getElementById(`${tweenId}-timeline`);
    gsap.set(tweenHandleElement, {x: (tween.delay * 100) * theme.unit, width: (tween.duration * 100) * theme.unit});
    Draggable.create(tweenHandleElement, {
      type: 'x',
      zIndexBoost: false,
      bounds: {
        minX: 0,
        maxX: timelineElement.clientWidth - tweenHandleElement.clientWidth,
        minY: timelineElement.clientHeight,
        maxY: timelineElement.clientHeight
      },
      autoScroll: 1,
      liveSnap: {
        x: function(value): number {
          return Math.round(value / theme.unit) * theme.unit;
        }
      },
      onPress: function() {
        setTweenDrawerTweenEditing({id: tweenId});
        gsap.set(leftHandleTooltipElement, {opacity: 1});
        leftHandleTooltipElement.innerHTML = `${(gsap.getProperty(leftHandleElement, 'x') as number / 4) / 100}s`;
      },
      onRelease: function() {
        setTweenDrawerTweenEditing({id: null});
        gsap.set(leftHandleTooltipElement, {opacity: 0});
      },
      onDrag: function() {
        gsap.set([leftHandleElement, rightHandleElement], {x: `+=${this.deltaX}`});
        leftHandleTooltipElement.innerHTML = `${(gsap.getProperty(leftHandleElement, 'x') as number / 4) / 100}s`;
      },
      onDragEnd: function() {
        const distance = this.endX - this.startX;
        Draggable.get(rightHandleElement).update().applyBounds({
          minX: Draggable.get(leftHandleElement).x + distance,
          maxX: timelineElement.clientWidth - (theme.unit * 4),
          minY: timelineElement.clientHeight,
          maxY: timelineElement.clientHeight
        });
        Draggable.get(leftHandleElement).update().applyBounds({
          minX: 0,
          maxX: Draggable.get(rightHandleElement).x,
          minY: timelineElement.clientHeight,
          maxY: timelineElement.clientHeight
        });
        const leftHandlePos = Draggable.get(leftHandleElement).x;
        const delay = (leftHandlePos / 4) / 100;
        setLayerTweenDelay({id: tweenId, delay });
      }
    });
    return (): void => {
      const tweenHandleElement = document.getElementById(`${tweenId}-handle-tween`);
      if (Draggable.get(tweenHandleElement)) {
        Draggable.get(tweenHandleElement).kill();
      }
    }
  }, []);

  useEffect(() => {
    if (prevDuration !== tween.duration) {
      const tweenHandleElement = document.getElementById(`${tweenId}-handle-tween`);
      const timelineElement = document.getElementById(`${tweenId}-timeline`);
      gsap.set(tweenHandleElement, { width: (tween.duration * 100) * theme.unit });
      Draggable.get(tweenHandleElement).update().applyBounds({
        minX: 0,
        maxX: timelineElement.clientWidth - tweenHandleElement.clientWidth,
        minY: timelineElement.clientHeight,
        maxY: timelineElement.clientHeight
      });
      setPrevDuration(tween.duration);
    }
  }, [tween.duration]);

  return (
    <div
      id={`${tweenId}-handle-tween`}
      className='c-timeline-tween-handle'
      style={{
        background: theme.palette.primary
      }} />
  );
}

const mapStateToProps = (state: RootState, ownProps: TimelineTweenHandleProps): {
  tween: em.Tween;
  tweenHover: string;
  tweenEditing: string;
} => {
  const { layer, tweenDrawer } = state;
  const tween = layer.present.tweenById[ownProps.tweenId];
  const tweenHover = tweenDrawer.tweenHover;
  const tweenEditing = tweenDrawer.tweenEditing;
  return { tween, tweenHover, tweenEditing };
};

export default connect(
  mapStateToProps,
  { setLayerTweenDuration, setLayerTweenDelay, setTweenDrawerTweenEditing }
)(TimelineTweenHandle);