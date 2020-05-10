import React, { useContext, ReactElement, useState, useLayoutEffect, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectLayer, setLayerName, deselectLayer, deselectAllLayers } from '../store/actions/layer';
import { SelectLayerPayload, DeselectLayerPayload, LayerTypes, SetLayerNamePayload } from '../store/actionTypes/layer';
import SidebarInput from './SidebarInput';
import { ThemeContext } from './ThemeProvider';

interface SidebarLayerTitleProps {
  layer: em.Layer;
  editing: boolean;
  setDraggable(draggable: boolean): void;
  setEditing(editing: boolean): void;
  selectLayer?(payload: SelectLayerPayload): LayerTypes;
  deselectLayer?(payload: DeselectLayerPayload): LayerTypes;
  deselectAllLayers?(): LayerTypes;
  setLayerName?(payload: SetLayerNamePayload): LayerTypes;
}

const SidebarLayerTitleInput = (props: SidebarLayerTitleProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const [nameInput, setNameInput] = useState(props.layer.name);
  const { layer, editing, setEditing, setLayerName, setDraggable, selectLayer, deselectLayer, deselectAllLayers } = props;

  const handleClick = (e: React.MouseEvent) => {
    if (!editing) {
      if (e.metaKey) {
        if (layer.selected) {
          deselectLayer({id: layer.id});
        } else {
          selectLayer({id: layer.id});
        }
      } else {
        selectLayer({id: layer.id, newSelection: true});
      }
    }
  }

  const handleDoubleClick = () => {
    deselectAllLayers();
    setEditing(true);
  }

  const handleSubmit = () => {
    setLayerName({id: layer.id, name: nameInput});
    selectLayer({id: layer.id, newSelection: true});
    setDraggable(true);
    setEditing(false);
  }

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNameInput((e.target as HTMLInputElement).value);
  }

  return (
    <div
      className={`
      c-sidebar-layer__name
      ${editing
        ? `c-sidebar-layer__name--editing`
        : null
      }`}
      style={{
        color: layer.selected
        ? theme.text.onPrimary
        : theme.text.base
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}>
      {
        editing
        ? <SidebarInput
            onChange={handleChange}
            value={nameInput}
            onSubmit={handleSubmit}
            selectOnMount />
        : layer.name
      }
    </div>
  );
}

export default connect(
  null,
  { setLayerName, selectLayer, deselectLayer, deselectAllLayers }
)(SidebarLayerTitleInput);