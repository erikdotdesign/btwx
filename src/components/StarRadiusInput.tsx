/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement, useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { paperMain } from '../canvas';
import { RootState } from '../store/reducers';
import { setStarsRadiusThunk } from '../store/actions/layer';
import { getPaperLayer, getSelectedProjectIndices, getSelectedStarRadius, getSelectedById } from '../store/selectors/layer';
import { clearLayerTransforms, applyLayerTransforms } from '../store/utils/paper';
import SidebarSectionRow from './SidebarSectionRow';
import SidebarSectionColumn from './SidebarSectionColumn';
import PercentageFormGroup from './PercentageFormGroup';
import Form from './Form';

const StarRadiusInput = (): ReactElement => {
  // const isMac = remote.process.platform === 'darwin';
  const formControlRef = useRef(null);
  const formControlSliderRef = useRef(null);
  const selected = useSelector((state: RootState) => state.layer.present.selected);
  const selectedProjectIndices = useSelector((state: RootState) => getSelectedProjectIndices(state));
  const radiusValue = useSelector((state: RootState) => getSelectedStarRadius(state));
  const selectedById = useSelector((state: RootState) => getSelectedById(state));
  const [radius, setRadius] = useState(radiusValue);
  const dispatch = useDispatch();

  // const debounceRadius = useCallback(
  //   debounce((radius: number) => {
  //     dispatch(setStarsRadiusThunk({layers: selected, radius: radius}));
  //   }, 150),
  //   []
  // );

  useEffect(() => {
    setRadius(radiusValue);
  }, [radiusValue, selected]);

  const handleSliderChange = (newRadius: number): void => {
    setRadius(newRadius);
    Object.keys(selectedById).forEach((key) => {
      const layerItem = selectedById[key];
      const isMask = layerItem.type === 'Shape' && (layerItem as Btwx.Shape).mask;
      const paperLayerCompound = getPaperLayer(layerItem.id, selectedProjectIndices[layerItem.id]) as paper.CompoundPath;
      const paperLayer = paperLayerCompound.children[0] as paper.Path;
      const startPosition = paperLayer.position;
      clearLayerTransforms({
        layerType: 'Shape',
        paperLayer,
        transform: layerItem.transform
      });
      const maxDim = Math.max(paperLayer.bounds.width, paperLayer.bounds.height);
      const newShape = new paperMain.Path.Star({
        center: paperLayer.bounds.center,
        radius1: maxDim / 2,
        radius2: (maxDim / 2) * newRadius,
        points: (layerItem as Btwx.Star).points,
        insert: false
      });
      newShape.bounds.width = paperLayer.bounds.width;
      newShape.bounds.height = paperLayer.bounds.height;
      applyLayerTransforms({
        paperLayer: newShape,
        transform: layerItem.transform
      });
      newShape.position = startPosition;
      paperLayer.pathData = newShape.pathData;
      if (isMask) {
        const maskGroup = paperLayerCompound.parent;
        const mask = maskGroup.children[0] as paper.Path;
        mask.pathData = newShape.pathData;
      }
    });
  };

  const handleSliderSubmit = (e: any): void => {
    if (e.target.value !== radiusValue) {
      dispatch(setStarsRadiusThunk({layers: selected, radius: e.target.value}));
      // buildRadiusTouchBar(e.target.value);
    }
  }

  const handleControlSubmitSuccess = (nextRadius: any): void => {
    dispatch(setStarsRadiusThunk({layers: selected, radius: nextRadius}));
    // buildRadiusTouchBar(nextRadius);
  }

  // const buildRadiusTouchBar = (opt = radius) => {
  //   if (isMac) {
  //     const { TouchBarSlider } = remote.TouchBar;
  //     const radiusSlider = new TouchBarSlider({
  //       label: 'Radius',
  //       value: opt !== 'multi' ? parseInt(opt * 100) : 0,
  //       minValue: 0,
  //       maxValue: 100,
  //       change: (newValue) => {
  //         const newRadius = Math.round(newValue) / 100;
  //         handleSliderChange(newRadius);
  //         debounceRadius(newRadius);
  //       }
  //     });
  //     const newTouchBar = new remote.TouchBar({
  //       items: [radiusSlider]
  //     });
  //     remote.getCurrentWindow().setTouchBar(newTouchBar);
  //   }
  // }

  // const handleSliderFocus = () => {
  //   buildRadiusTouchBar();
  // }

  return (
    <SidebarSectionRow>
      <SidebarSectionColumn width={'66.66%'}>
        <Form inline>
          <Form.Group controlId='control-star-radius-slider'>
            <Form.Control
              ref={formControlSliderRef}
              as='input'
              value={radius !== 'multi' ? radius : 0}
              type='range'
              step={0.01}
              min={0}
              max={1}
              size='small'
              onChange={(e: any) => handleSliderChange(e.target.value)}
              onMouseUp={handleSliderSubmit}
              // onFocus={handleSliderFocus}
              required />
          </Form.Group>
        </Form>
      </SidebarSectionColumn>
      <SidebarSectionColumn width={'33.33%'}>
        <PercentageFormGroup
          ref={formControlRef}
          controlId='control-star-radius'
          value={radius}
          size='small'
          label='Radius'
          onSubmitSuccess={handleControlSubmitSuccess}
          submitOnBlur
          canvasAutoFocus />
      </SidebarSectionColumn>
    </SidebarSectionRow>
  );
}

export default StarRadiusInput;