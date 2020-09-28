import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers';
import { toggleTweenDrawerThunk } from '../store/actions/documentSettings';
import { TweenDrawerTypes } from '../store/actionTypes/tweenDrawer';
import TopbarButton from './TopbarButton';

interface TweensButtonProps {
  isTweenDrawerOpen: boolean;
  toggleTweenDrawerThunk(): TweenDrawerTypes;
}

const TweensButton = (props: TweensButtonProps): ReactElement => {
  const { isTweenDrawerOpen, toggleTweenDrawerThunk } = props;

  const handleTweensClick = () => {
    toggleTweenDrawerThunk();
  }

  return (
    <TopbarButton
      label='Events'
      onClick={handleTweensClick}
      icon='tweens'
      isActive={isTweenDrawerOpen} />
  );
}

const mapStateToProps = (state: RootState): {
  isTweenDrawerOpen: boolean;
} => {
  const { documentSettings } = state;
  const isTweenDrawerOpen = documentSettings.view.tweenDrawer.isOpen;
  return { isTweenDrawerOpen };
};

export default connect(
  mapStateToProps,
  { toggleTweenDrawerThunk }
)(TweensButton);