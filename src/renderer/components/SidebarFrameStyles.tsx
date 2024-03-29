import React, { ReactElement } from 'react';
import SidebarPositionStyles from './SidebarPositionStyles';
import SidebarSizeStyles from './SidebarSizeStyles';
import SidebarRotationStyles from './SidebarRotationStyles';
import SidebarFlippedStyles from './SidebarFlippedStyles';
import SidebarSectionWrap from './SidebarSectionWrap';
import SidebarSection from './SidebarSection';
import SidebarSectionRow from './SidebarSectionRow';
import SidebarSectionColumn from './SidebarSectionColumn';

const SidebarFrameStyles = (): ReactElement => {
  return (
    <SidebarSectionWrap bottomBorder whiteSpace>
      <SidebarSection>
        <SidebarSectionRow>
          <SidebarSectionColumn width={'66%'}>
            <SidebarPositionStyles />
            <SidebarSizeStyles />
          </SidebarSectionColumn>
          <SidebarSectionColumn width={'33%'}>
            <SidebarRotationStyles />
            <SidebarFlippedStyles />
          </SidebarSectionColumn>
        </SidebarSectionRow>
      </SidebarSection>
    </SidebarSectionWrap>
  );
}

export default SidebarFrameStyles;