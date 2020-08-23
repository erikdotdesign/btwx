import React, { ReactElement } from 'react';
import SidebarSectionWrap from './SidebarSectionWrap';
import SidebarSection from './SidebarSection';
import SidebarSectionRow from './SidebarSectionRow';
import SidebarSectionColumn from './SidebarSectionColumn';
import SidebarSectionHead from './SidebarSectionHead';
import IconButton from './IconButton';

interface SidebarCollapseSectionProps {
  header: string;
  collapsed: boolean;
  onClick(): void;
  actions?: ReactElement | ReactElement[];
  children: ReactElement | ReactElement[];
}

const SidebarCollapseSection = (props: SidebarCollapseSectionProps): ReactElement => {
  const { header, actions, children, onClick, collapsed } = props;

  return (
    <SidebarSectionWrap bottomBorder whiteSpace>
      <SidebarSection>
        <SidebarSectionRow>
          <SidebarSectionColumn width='50%'>
            <SidebarSectionRow>
              <SidebarSectionHead text={header} />
            </SidebarSectionRow>
          </SidebarSectionColumn>
          <SidebarSectionColumn width='50%'>
            <SidebarSectionRow justifyContent='flex-end'>
              <>
                { actions }
                <IconButton
                  onClick={onClick}
                  variant='small'
                  icon={collapsed ? 'thicc-chevron-right' : 'thicc-chevron-down'} />
              </>
            </SidebarSectionRow>
          </SidebarSectionColumn>
        </SidebarSectionRow>
        <SidebarSection>
          {
            !collapsed
            ? <>
                { children }
              </>
            : null
          }
        </SidebarSection>
      </SidebarSection>
    </SidebarSectionWrap>
  );
}

export default SidebarCollapseSection;