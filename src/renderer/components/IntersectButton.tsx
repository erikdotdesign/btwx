import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { applyBooleanOperationThunk } from '../store/actions/layer';
import { canBooleanSelected } from '../store/selectors/layer';
import StackedButton from './StackedButton';
import Icon from './Icon';

const IntersectButton = (): ReactElement => {
  const canIntersect = useSelector((state: RootState) => canBooleanSelected(state));
  const dispatch = useDispatch();

  const handleIntersectClick = (): void => {
    if (canIntersect) {
      dispatch(applyBooleanOperationThunk('intersect'));
    }
  }

  return (
    <StackedButton
      label='Intersect'
      onClick={handleIntersectClick}
      disabled={!canIntersect}
      size='small'>
      <Icon
        size='small'
        name='combine-intersect' />
    </StackedButton>
  );
}

export default IntersectButton;