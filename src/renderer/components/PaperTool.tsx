/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, ReactElement, useState } from 'react';
import { paperMain } from '../canvas';

export interface PaperToolProps {
  tool?: paper.Tool;
  keyDownEvent?: paper.KeyEvent;
  keyUpEvent?: paper.KeyEvent;
  moveEvent?: paper.ToolEvent;
  downEvent?: paper.ToolEvent;
  dragEvent?: paper.ToolEvent;
  upEvent?: paper.ToolEvent;
  altModifier?: boolean;
  shiftModifier?: boolean;
}

interface EventProps {
  all?: boolean;
  keyDown?: boolean;
  keyUp?: boolean;
  mouseMove?: boolean;
  mouseDown?: boolean;
  mouseDrag?: boolean;
  mouseUp?: boolean;
}

const PaperToolWrap = (Component: any, events: EventProps): () => ReactElement => {
  const PaperTool = (): ReactElement => {
    const [tool, setTool] = useState<paper.Tool>(null);
    const [keyDownEvent, setKeyDownEvent] = useState<paper.KeyEvent>(null);
    const [keyUpEvent, setKeyUpEvent] = useState<paper.KeyEvent>(null);
    const [moveEvent, setMoveEvent] = useState<paper.ToolEvent>(null);
    const [downEvent, setDownEvent] = useState<paper.ToolEvent>(null);
    const [dragEvent, setDragEvent] = useState<paper.ToolEvent>(null);
    const [upEvent, setUpEvent] = useState<paper.ToolEvent>(null);

    const handleKeyDown = (e: paper.KeyEvent): void => {
      setKeyDownEvent(e);
    }

    const handleKeyUp = (e: paper.KeyEvent): void => {
      setKeyUpEvent(e);
    }

    const handleMouseMove = (e: paper.ToolEvent): void => {
      setMoveEvent(e);
    }

    const handleDownEvent = (e: paper.ToolEvent): void => {
      if ((e as any).event && (e as any).event.which !== 3) {
        setDownEvent(e);
      }
    }

    const handleDragEvent = (e: paper.ToolEvent): void => {
      setDragEvent(e);
    }

    const handleUpEvent = (e: paper.ToolEvent): void => {
      setUpEvent(e);
    }

    useEffect(() => {
      paperMain.projects[0].activate();
      const newTool = new paperMain.Tool();
      newTool.minDistance = 1;
      newTool.onKeyDown = events.all || events.keyDown ? handleKeyDown : null;
      newTool.onKeyUp = events.all || events.keyUp ? handleKeyUp : null;
      newTool.onMouseMove = events.all || events.mouseMove ? handleMouseMove : null;
      newTool.onMouseDown = events.all || events.mouseDown ? handleDownEvent : null
      newTool.onMouseDrag = events.all || events.mouseDrag ? handleDragEvent : null;
      newTool.onMouseUp = events.all || events.mouseUp ? handleUpEvent : null;
      setTool(newTool);
      paperMain.tool = null;
    }, []);

    return (
      <Component
        tool={tool}
        keyDownEvent={keyDownEvent}
        keyUpEvent={keyUpEvent}
        moveEvent={moveEvent}
        downEvent={downEvent}
        dragEvent={dragEvent}
        upEvent={upEvent} />
    );
  }
  return PaperTool;
}

export default PaperToolWrap;