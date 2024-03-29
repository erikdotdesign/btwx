import React, { ReactElement, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { setLayersSlowTweenPower } from '../store/actions/layer';
import { getSelectedSlowTweensPower } from '../store/selectors/layer';
import Form from './Form';
import MathFormGroup from './MathFormGroup';

interface EaseEditorSlowPowerInputProps {
  setParamInfo(paramInfo: Btwx.ParamInfo): void;
}

const EaseEditorSlowPowerInput = (props: EaseEditorSlowPowerInputProps): ReactElement => {
  const formControlRef = useRef(null);
  const { setParamInfo } = props;
  // const id = useSelector((state: RootState) => state.easeEditor.tween);
  const selectedTweens = useSelector((state: RootState) => state.layer.present.tweens.selected.allIds);
  const power = useSelector((state: RootState) => getSelectedSlowTweensPower(state));
  // const disabled = useSelector((state: RootState) => state.easeEditor.tween ? state.layer.present.tweens.byId[state.easeEditor.tween].ease !== 'slow' : true);
  const dispatch = useDispatch();

  const handleSubmitSuccess = (newPower: any): void => {
    if (newPower < 0) {
      newPower = 0;
    }
    dispatch(setLayersSlowTweenPower({
      tweens: selectedTweens,
      power: newPower
    }));
  }

  const handleFocus = (e: any): void => {
    setParamInfo({
      type: 'Number',
      description: 'Determines the strength of the ease at each end.'
    });
  }

  const handleBlur = (e: any): void => {
    setParamInfo(null);
  }

  return (
    <MathFormGroup
      ref={formControlRef}
      controlId='control-ee-slow-power'
      value={power}
      // disabled={disabled}
      size='small'
      label='Power'
      min={0}
      onSubmitSuccess={handleSubmitSuccess}
      onBlur={handleBlur}
      onFocus={handleFocus}
      submitOnBlur />
  );
}

export default EaseEditorSlowPowerInput;