import React, { useContext, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { evaluate } from 'mathjs';
import SidebarInput from './SidebarInput';
import { RootState } from '../store/reducers';
import { SetLayersYPayload, LayerTypes } from '../store/actionTypes/layer';
import { setLayersY } from '../store/actions/layer';
import { getLayerScope, getPositionInArtboard } from '../store/selectors/layer';

interface YInputProps {
  selected?: string[];
  yValue?: number;
  setLayersY?(payload: SetLayersYPayload): LayerTypes;
}

const YInput = (props: YInputProps): ReactElement => {
  const { selected, setLayersY, yValue } = props;
  const [y, setY] = useState(props.yValue);

  useEffect(() => {
    setY(yValue);
  }, [yValue, selected]);

  const handleChange = (e: any) => {
    const target = e.target;
    setY(target.value);
  };

  const handleSubmit = (e: any) => {
    try {
      const nextY = evaluate(`${y}`);
      if (nextY !== yValue && !isNaN(nextY)) {
        setLayersY({layers: selected, y: nextY});
        setY(nextY);
      } else {
        setY(yValue);
      }
    } catch(error) {
      setY(yValue);
    }
  }

  return (
    <SidebarInput
      value={y}
      onChange={handleChange}
      onSubmit={handleSubmit}
      submitOnBlur
      label={'Y'} />
  );
}

const mapStateToProps = (state: RootState) => {
  const { layer } = state;
  const selected = layer.present.selected;
  const artboardParents = selected.reduce((result: em.Artboard[], current: string) => {
    const layerScope = getLayerScope(layer.present, current);
    if (layerScope.some((id: string) => layer.present.allArtboardIds.includes(id))) {
      const artboard = layerScope.find((id: string) => layer.present.allArtboardIds.includes(id));
      result = [...result, layer.present.byId[artboard] as em.Artboard];
    } else {
      result = [...result, null];
    }
    return result;
  }, []);
  const yValues = selected.reduce((result: number[], current: string, index: number) => {
    const layerItem = layer.present.byId[current];
    const parent = artboardParents[index];
    if (parent) {
      result = [...result, getPositionInArtboard(layerItem, parent).y];
    } else {
      result = [...result, Math.round(layerItem.frame.y)];
    }
    return result;
  }, []);
  const yValue = (() => {
    if (yValues.every((value: number) => value === yValues[0])) {
      return yValues[0];
    } else {
      return 'multi';
    }
  })();
  return { selected, yValue };
};

export default connect(
  mapStateToProps,
  { setLayersY }
)(YInput);