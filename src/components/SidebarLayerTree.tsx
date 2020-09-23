import React, { ReactElement, useState } from 'react';
import { RootState } from '../store/reducers';
import { connect } from 'react-redux';
import SidebarDropzone from './SidebarDropzone';
import SidebarLayer from './SidebarLayer';
import SidebarLayerDragGhosts from './SidebarLayerDragGhosts';
import SidebarLeftSearchEmptyState from './SidebarLeftSearchEmptyState';

interface SidebarLayerTreeProps {
  search: string;
  searchActive: boolean;
  page?: em.Group;
  layers?: string[];
}

const SidebarLayerTree = (props: SidebarLayerTreeProps): ReactElement => {
  const [dragging, setDragging] = useState(false);
  const [dragLayers, setDragLayers] = useState<string[]>(null);
  const { page, layers, search } = props;

  return (
    <>
      {
        dragging
        ? <SidebarDropzone
            layer={page}
            depth={0}
            dragLayers={dragLayers}
            setDragging={setDragging}
            setDragLayers={setDragLayers} />
        : null
      }
      {
        layers.length > 0
        ? layers.map((layer: string, index: number) => (
            <SidebarLayer
              key={index}
              layer={layer}
              dragLayers={dragLayers}
              setDragLayers={setDragLayers}
              dragging={dragging}
              setDragging={setDragging}
              depth={0} />
          ))
        : <SidebarLeftSearchEmptyState searchText={search} />
      }
      {
        dragLayers
        ? <SidebarLayerDragGhosts
            dragLayers={dragLayers}
            dragging={dragging} />
        : null
      }
    </>
  )
}

const mapStateToProps = (state: RootState, ownProps: SidebarLayerTreeProps) => {
  const { layer } = state;
  const page = layer.present.byId[layer.present.page];
  let layers: string[];
  if (ownProps.searchActive) {
    if (!ownProps.search || ownProps.search.replace(/\s/g, '').length === 0) {
      layers = [...page.children].reverse();
    } else {
      layers = layer.present.allIds.reduce((result, current) => {
        if (layer.present.byId[current].name.toUpperCase().includes(ownProps.search.replace(/\s/g, '').toUpperCase()) && current !== 'page') {
          return [...result, current];
        } else {
          return [...result];
        }
      }, []);
    }
  } else {
    layers = [...page.children].reverse();
  }
  return { page, layers };
};

export default connect(
  mapStateToProps
)(SidebarLayerTree);