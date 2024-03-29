import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { closeEaseEditor } from '../store/actions/easeEditor';
import IconButton from './IconButton';

const EaseEditorCloseButton = (): ReactElement => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeEaseEditor());
  }

  return (
    <IconButton
      iconName='close'
      onClick={handleClick}
      label='close' />
  );
}

export default EaseEditorCloseButton;