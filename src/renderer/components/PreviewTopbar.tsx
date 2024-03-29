import React, { ReactElement } from 'react';
import { PREVIEW_TOPBAR_HEIGHT } from '../constants';
import PreviewRewindButton from './PreviewRewindButton';
import PreviewAutoplayButton from './PreviewAutoplayButton';
import PreviewTouchCursorButton from './PreviewTouchCursorButton';
import PreviewRecordButton from './PreviewRecordButton';
import PreviewDeviceSelector from './PreviewDeviceSelector';
import PreviewDeviceOrientationButton from './PreviewDeviceOrientationButton';

interface PreviewTopbarProps {
  touchCursor: boolean;
  setTouchCursor(touchCursor: boolean): void;
}

const PreviewTopbar = ({
  touchCursor,
  setTouchCursor
}: PreviewTopbarProps): ReactElement => (
  <div
    id='preview-topbar'
    className='c-preview-topbar'
    style={{
      height: PREVIEW_TOPBAR_HEIGHT
    }}>
    <PreviewRewindButton />
    <PreviewAutoplayButton />
    <PreviewDeviceSelector />
    <PreviewDeviceOrientationButton />
    <PreviewTouchCursorButton
      touchCursor={touchCursor}
      setTouchCursor={setTouchCursor} />
    <PreviewRecordButton />
  </div>
);

export default PreviewTopbar;