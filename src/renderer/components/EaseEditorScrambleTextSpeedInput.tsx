import React, { ReactElement, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { setLayersScrambleTextTweenSpeed } from '../store/actions/layer';
import { getSelectedScrambleTextTweensSpeed } from '../store/selectors/layer';
import MathFormGroup from './MathFormGroup';

interface EaseEditorScrambleTextSpeedInputProps {
  setParamInfo(paramInfo: Btwx.ParamInfo): void;
}

const EaseEditorScrambleTextSpeedInput = (props: EaseEditorScrambleTextSpeedInputProps): ReactElement => {
  const formControlRef = useRef(null);
  const { setParamInfo } = props;
  // const id = useSelector((state: RootState) => state.easeEditor.tween);
  const selectedTweens = useSelector((state: RootState) => state.layer.present.tweens.selected.allIds);
  const speed = useSelector((state: RootState) => getSelectedScrambleTextTweensSpeed(state));
  const dispatch = useDispatch();

  const handleSubmitSuccess = (newSpeed: any): void => {
    if (newSpeed < 0) {
      newSpeed = 0;
    }
    dispatch(setLayersScrambleTextTweenSpeed({
      tweens: selectedTweens,
      speed: newSpeed
    }));
  }

  const handleFocus = (e: any): void => {
    setParamInfo({
      type: 'Number',
      description: 'Controls how frequently the scrambled characters are refreshed. The default is 1 but you could slow things down by using 0.2 for example.'
    });
  }

  const handleBlur = (e: any): void => {
    setParamInfo(null);
  }

  return (
    <MathFormGroup
      ref={formControlRef}
      controlId='control-ee-st-speed'
      value={speed}
      size='small'
      label='Speed'
      min={0}
      onSubmitSuccess={handleSubmitSuccess}
      onBlur={handleBlur}
      onFocus={handleFocus}
      submitOnBlur />
  );
}

export default EaseEditorScrambleTextSpeedInput;