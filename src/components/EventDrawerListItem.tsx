import React, { ReactElement, useRef } from 'react';
import { ipcRenderer } from 'electron';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { setEventDrawerEventThunk, setEventDrawerEventHoverThunk } from '../store/actions/eventDrawer';
import { setLayerHover, setActiveArtboard, selectLayerEvents, deselectLayerEvents } from '../store/actions/layer';
import { DEFAULT_TWEEN_EVENTS } from '../constants';
import EventDrawerListItemEdit from './EventDrawerListItemEdit';
import EventDrawerListItemRemove from './EventDrawerListItemRemove';
import SidebarLayerIcon from './SidebarLayerIcon';
import ListItem from './ListItem';
import ListGroup from './ListGroup';

interface EventDrawerListItemProps {
  id: string;
}

const EventDrawerListItem = (props: EventDrawerListItemProps): ReactElement => {
  const actionsContainerRef = useRef(null);
  const { id } = props;
  // const activeArtboard = useSelector((state: RootState) => state.layer.present.activeArtboard);
  const instanceId = useSelector((state: RootState) => state.session.instance);
  const selectedEvents = useSelector((state: RootState) => state.layer.present.events.selected);
  const event = useSelector((state: RootState) => state.layer.present.events.byId[id]);
  const artboard = useSelector((state: RootState) => state.layer.present.byId[event.artboard]);
  const artboardName = artboard.name;
  const layerItem = useSelector((state: RootState) => state.layer.present.byId[event.layer]);
  const destination = useSelector((state: RootState) => state.layer.present.byId[event.destinationArtboard]);
  const destinationName = destination.name;
  const eventDisplayName = DEFAULT_TWEEN_EVENTS.find((defaultEvent) => defaultEvent.event === event.event).titleCase;
  const hovering = useSelector((state: RootState) => state.eventDrawer.eventHover === id);
  const isSelected = useSelector((state: RootState) => state.layer.present.events.selected.includes(id));
  const dispatch = useDispatch();

  const handleMouseEnter = (): void => {
    // if (activeArtboard !== tweenEvent.artboard) {
    //   setActiveArtboard({id: tweenEvent.artboard});
    // }
    dispatch(setEventDrawerEventHoverThunk({id}));
  }

  const handleMouseLeave = (): void => {
    dispatch(setEventDrawerEventHoverThunk({id: null}));
  }

  const handleMouseDown = (e: any): void => {
    if (e.metaKey) {
      if (isSelected) {
        dispatch(deselectLayerEvents({events: [id]}));
      } else {
        dispatch(selectLayerEvents({events: [id]}));
      }
    } else {
      if (!isSelected) {
        dispatch(selectLayerEvents({events: [id], newSelection: true}));
      }
    }
  }

  const handleDoubleClick = (e: any): void => {
    // ignore clicks on edit / remove buttons
    // if (!actionsContainerRef.current.contains(e.target)) {
    //   dispatch(setEventDrawerEventThunk({id}));
    //   dispatch(setLayerHover({id: null}));
    // }
    dispatch(setEventDrawerEventThunk({id}));
    dispatch(setLayerHover({id: null}));
  }

  const handleContextMenu = (e: any): void => {
    ipcRenderer.send('openEventContextMenu', JSON.stringify({
      instanceId,
      template: [
        ...selectedEvents.length === 1
        ? [{
            label: 'Edit Event...',
            click: {
              id: 'setEventDrawerEventThunk',
              params: { id }
            }
          }]
        : [],
        ...selectedEvents.length > 0
        ? [{
            label: `Remove ${selectedEvents.length === 1 ? 'Event' : `${selectedEvents.length} Events`}`,
            click: {
              id: 'removeLayersEvent',
              params: {
                events: selectedEvents
              }
            }
          }]
        : []
      ]
    }));
  }

  return (
    <ListItem
      interactive
      hovering={hovering}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleContextMenu}
      isActive={isSelected}
      onMouseDown={handleMouseDown}
      style={{
        padding: 0
      }}>
      <ListGroup horizontal>
        <ListItem
          flush>
          <SidebarLayerIcon
            id={layerItem.id}
            isSelected={isSelected} />
          <ListItem.Body>
            <ListItem.Text size='small'>
              {layerItem.name}
            </ListItem.Text>
          </ListItem.Body>
        </ListItem>
        <ListItem
          flush>
          <ListItem.Body>
            <ListItem.Text size='small'>
              { eventDisplayName }
            </ListItem.Text>
          </ListItem.Body>
        </ListItem>
        <ListItem
          flush>
          <ListItem.Body>
            <ListItem.Text size='small'>
              { artboardName }
            </ListItem.Text>
          </ListItem.Body>
        </ListItem>
        <ListItem
          flush>
          <ListItem.Body>
            <ListItem.Text size='small'>
              { destinationName }
            </ListItem.Text>
          </ListItem.Body>
        </ListItem>
      </ListGroup>
    </ListItem>
  );
}

export default EventDrawerListItem;