import React, { ReactElement } from 'react';
import IconButton from './IconButton';

interface StrokeOptionsToggleProps {
  styleEnabled: boolean;
  setStyleEnabled(styleEnabled: boolean): void;
}

const StyleToggle = ({
  styleEnabled,
  setStyleEnabled
}: StrokeOptionsToggleProps): ReactElement => (
  <IconButton
    onClick={() => setStyleEnabled(!styleEnabled)}
    size='small'
    isActive={styleEnabled}
    toggle
    label={styleEnabled ? 'disable' : 'enable'}
    iconName='switch-off'
    activeIconName='switch-on' />
);

export default StyleToggle;