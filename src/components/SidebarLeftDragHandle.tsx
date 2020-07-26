import React, { useContext, ReactElement, useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import styled from 'styled-components';
import { setLeftSidebarWidth } from '../store/actions/canvasSettings';
import { SetLeftSidebarWidthPayload, CanvasSettingsTypes } from '../store/actionTypes/canvasSettings';
import { RootState } from '../store/reducers';
import { ThemeContext } from './ThemeProvider';

gsap.registerPlugin(Draggable);

interface SidebarLeftDragHandleProps {
  sidebarWidth?: number;
  setLeftSidebarWidth?(payload: SetLeftSidebarWidthPayload): CanvasSettingsTypes;
}

interface DragHandleProps {
  dragging: boolean;
}

const DragHandle = styled.div<DragHandleProps>`
  background: ${props => props.dragging ? props.theme.palette.primary : 'none'};
  :hover {
    background: ${props => props.theme.palette.primary};
  }
`;

const SidebarLeftDragHandle = (props: SidebarLeftDragHandleProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const { sidebarWidth, setLeftSidebarWidth } = props;

  useEffect(() => {
    gsap.set(ref.current, {x: sidebarWidth});
    Draggable.create(ref.current, {
      type: 'x',
      zIndexBoost: false,
      bounds: '#main',
      onPress: function() {
        setDragging(true);
      },
      onDrag: function() {
        gsap.set('#sidebar-left', {width: this.x});
      },
      onRelease: function() {
        setLeftSidebarWidth({width: this.x});
        setDragging(false);
      }
    });
    return () => {
      if (Draggable.get(ref.current)) {
        Draggable.get(ref.current).kill();
      }
    }
  }, []);

  return (
    <DragHandle
      ref={ref}
      className='c-sidebar__drag-handle c-sidebar__drag-handle--left'
      theme={theme}
      dragging={dragging} />
  );
}

const mapStateToProps = (state: RootState) => {
  const { canvasSettings } = state;
  const sidebarWidth = canvasSettings.leftSidebarWidth;
  return { sidebarWidth };
};

export default connect(
  mapStateToProps,
  { setLeftSidebarWidth }
)(SidebarLeftDragHandle);