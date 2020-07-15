import React, { ReactElement } from 'react';
import SidebarFrameStyles from './SidebarFrameStyles';
import SidebarContextStyles from './SidebarContextStyles';
import SidebarFillStyles from './SidebarFillStyles';
import SidebarStrokeStyles from './SidebarStrokeStyles';
import SidebarShadowStyles from './SidebarShadowStyles';
import SidebarTextStyles from './SidebarTextStyles';
import AlignDistribute from './AlignDistribute';
import FillEditor from './FillEditor';

const SidebarLayerStyles = (): ReactElement => {
  return (
    <>
      <AlignDistribute />
      <SidebarFrameStyles />
      <SidebarContextStyles />
      <SidebarTextStyles />
      <SidebarFillStyles />
      {/* <SidebarStrokeStyles /> */}
      <FillEditor />
      {/* <SidebarShadowStyles /> */}
    </>
  );
}

export default SidebarLayerStyles;