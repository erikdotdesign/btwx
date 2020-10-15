import React, { useContext, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/reducers';
import { ThemeContext } from './ThemeProvider';

interface SidebarLayerBackgroundProps {
  layer: string;
  isSelected?: boolean;
  isHovering?: boolean;
  isArtboard?: boolean;
  dragGhost?: boolean;
  editing?: boolean;
}

interface BackgroundProps {
  dragGhost: boolean;
  isSelected: boolean;
  editing: boolean;
  isArtboard: boolean;
  isHovering: boolean;
}

const Background = styled.div<BackgroundProps>`
  background: ${
    props => (props.isSelected || props.editing) && !props.dragGhost
    ? props.theme.palette.primary
    : props.isArtboard && !props.dragGhost
      ? props.theme.name === 'dark' ? props.theme.background.z3 : props.theme.background.z0
      : 'none'
  };
  box-shadow: 0 0 0 1px ${
    props => (props.isSelected || props.isHovering) && !props.dragGhost
    ? props.theme.palette.primary
    : props.isArtboard && !props.dragGhost
      ? props.theme.name === 'dark'
        ? props.theme.background.z4
        : props.theme.background.z5
      : 'none'
  } inset;
`;

const SidebarLayerBackground = (props: SidebarLayerBackgroundProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const { layer, isHovering, isSelected, isArtboard, dragGhost, editing } = props;

  // useEffect(() => {
  //   console.log('BACKGROUND');
  // }, []);

  return (
    <Background
      dragGhost={dragGhost}
      isSelected={isSelected}
      editing={editing}
      isArtboard={isArtboard}
      isHovering={isHovering}
      theme={theme}
      className='c-layers-sidebar-layer-item__background' />
  );
}

const mapStateToProps = (state: RootState, ownProps: SidebarLayerBackgroundProps): {
  isSelected: boolean;
  isHovering: boolean;
  isArtboard: boolean;
  editing: boolean;
} => {
  const { layer, leftSidebar } = state;
  const hover = layer.present.hover;
  const layerItem = layer.present.byId[ownProps.layer];
  const isSelected = layerItem.selected;
  const isHovering = hover === ownProps.layer;
  const isArtboard = layerItem.type === 'Artboard';
  const editing = leftSidebar.editing === ownProps.layer;
  return { isSelected, isHovering, isArtboard, editing };
};

export default connect(
  mapStateToProps
)(SidebarLayerBackground);