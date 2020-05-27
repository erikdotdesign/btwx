import React, { useContext, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { evaluate } from 'mathjs';
import SidebarInput from './SidebarInput';
import { RootState } from '../store/reducers';
import { SetLayerStrokeDashArrayPayload, LayerTypes } from '../store/actionTypes/layer';
import { setLayerStrokeDashArray } from '../store/actions/layer';
import { getPaperLayer } from '../store/selectors/layer';

interface StrokeDashInputProps {
  selected?: string[];
  dashArrayValue?: number[];
  setLayerStrokeDashArray?(payload: SetLayerStrokeDashArrayPayload): LayerTypes;
}

const StrokeDashInput = (props: StrokeDashInputProps): ReactElement => {
  const { selected, setLayerStrokeDashArray, dashArrayValue } = props;
  const [dash, setDash] = useState<string | number>(dashArrayValue[0]);

  useEffect(() => {
    setDash(dashArrayValue[0]);
  }, [dashArrayValue, selected]);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setDash(target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const paperLayer = getPaperLayer(selected[0]);
    paperLayer.dashArray = [evaluate(`${dash}`), dashArrayValue[1]];
    setLayerStrokeDashArray({id: selected[0], strokeDashArray: [evaluate(`${dash}`), dashArrayValue[1]]});
    setDash(evaluate(`${dash}`));
  }

  return (
    <SidebarInput
      value={dash}
      onChange={handleChange}
      onSubmit={handleSubmit}
      blurOnSubmit
      disabled={selected.length > 1 || selected.length === 0} />
  );
}

const mapStateToProps = (state: RootState) => {
  const { layer } = state;
  const selected = layer.present.selected;
  const dashArrayValue = (() => {
    switch(layer.present.selected.length) {
      case 0:
        return '';
      case 1:
        return layer.present.byId[layer.present.selected[0]].style.strokeOptions.dashArray;
      default:
        return '';
    }
  })();
  return { selected, dashArrayValue };
};

export default connect(
  mapStateToProps,
  { setLayerStrokeDashArray }
)(StrokeDashInput);