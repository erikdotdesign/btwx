import React, { useContext, ReactElement } from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from './ThemeProvider';
import { RootState } from '../store/reducers';
import { openEaseEditor } from '../store/actions/easeEditor';
import { EaseEditorTypes, OpenEaseEditorPayload } from '../store/actionTypes/easeEditor';

interface TweenDrawerEditEaseProps {
  tweenId: string;
  tween?: em.Tween;
  openEaseEditor?(payload: OpenEaseEditorPayload): EaseEditorTypes;
}

const TweenDrawerEditEase = (props: TweenDrawerEditEaseProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { tweenId, tween, openEaseEditor } = props;

  const handleClick = () => {
    openEaseEditor({tween: tweenId});
  }

  return (
    <div
      className='c-tween-drawer__icon'
      onClick={handleClick}>
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        fill: theme.text.lighter
      }}>
        <path d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11s-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16 c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12s0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8 c0-1.1,0.9-2,2-2S23,6.9,23,8z"/>
      </svg>
    </div>
  );
}

const mapStateToProps = (state: RootState, ownProps: TweenDrawerEditEaseProps) => {
  const { layer } = state;
  const tween = layer.present.tweenById[ownProps.tweenId];
  return { tween };
};

export default connect(
  mapStateToProps,
  { openEaseEditor }
)(TweenDrawerEditEase);