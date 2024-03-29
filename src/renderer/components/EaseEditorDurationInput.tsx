import React, { ReactElement, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { setLayersTweenDuration } from '../store/actions/layer';
import { getSelectedTweensDuration, getSelectedTweensLongestDelay, getSelectedTweensLongestRepeat } from '../store/selectors/layer';
import { MAX_TWEEN_DURATION } from '../constants';
import MathFormGroup from './MathFormGroup';

const EaseEditorDurationInput = (): ReactElement => {
  const formControlRef = useRef(null);
  const selectedTweens = useSelector((state: RootState) => state.layer.present.tweens.selected.allIds);
  const duration = useSelector((state: RootState) => getSelectedTweensDuration(state));
  const longestDelay = useSelector((state: RootState) => getSelectedTweensLongestDelay(state));
  const longestRepeat = useSelector((state: RootState) => getSelectedTweensLongestRepeat(state));
  const dispatch = useDispatch();

  const handleSubmitSuccess = (newDuration: any): void => {
    if (((newDuration + (newDuration * longestRepeat)) + longestDelay) > MAX_TWEEN_DURATION) {
      let currentDuration = newDuration;
      while((((currentDuration + (currentDuration * longestRepeat)) + longestDelay) > MAX_TWEEN_DURATION) && currentDuration > 0) {
        currentDuration = Math.round(((currentDuration - 0.01) + Number.EPSILON) * 100) / 100;
        newDuration = currentDuration;
      }
    }
    if (newDuration < 0.04) {
      newDuration = 0.04;
    }
    dispatch(setLayersTweenDuration({
      tweens: selectedTweens,
      duration: newDuration
    }));
  }

  return (
    <MathFormGroup
      ref={formControlRef}
      controlId='control-ee-duration'
      value={duration}
      size='small'
      label='Duration'
      min={0}
      // max={MAX_TWEEN_DURATION - longestDelay}
      onSubmitSuccess={handleSubmitSuccess}
      submitOnBlur />
  );
}

export default EaseEditorDurationInput;