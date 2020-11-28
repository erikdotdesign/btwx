/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import paper from 'paper';
import { RootState } from '../store/reducers';
import { uiPaperScope } from '../canvas';
import { setCanvasDrawing } from '../store/actions/canvasSettings';
import { addTextThunk } from '../store/actions/layer';
import { AddTextPayload } from '../store/actionTypes/layer';
import { toggleTextToolThunk } from '../store/actions/textTool';
import { openTextEditor } from '../store/actions/textEditor';
import { OpenTextEditorPayload, TextEditorTypes } from '../store/actionTypes/textEditor';
import { TextSettingsState } from '../store/reducers/textSettings';
import { DEFAULT_TEXT_VALUE, DEFAULT_TRANSFORM, DEFAULT_STYLE } from '../constants';
import { getLayerPaperScopes } from '../store/selectors/layer';
import SnapTool from './SnapTool';
import PaperTool, { PaperToolProps } from './PaperTool';

interface TextToolStateProps {
  isEnabled?: boolean;
  scope?: string[];
  textSettings?: TextSettingsState;
  paperScope?: number;
  layerPaperScopes?: {
    [id: string]: paper.PaperScope;
  };
}

interface TextToolDispatchProps {
  addTextThunk?(payload: AddTextPayload): Promise<Btwx.Text>;
  openTextEditor?(payload: OpenTextEditorPayload): TextEditorTypes;
  toggleTextToolThunk?(): void;
}

type TextToolProps = (
  TextToolStateProps &
  TextToolDispatchProps &
  PaperToolProps
);

const TextTool = (props: TextToolProps): ReactElement => {
  const { isEnabled, tool, moveEvent, downEvent, paperScope, layerPaperScopes, openTextEditor, textSettings, scope, addTextThunk, toggleTextToolThunk } = props;
  const [snapBounds, setSnapBounds] = useState<paper.Rectangle>(null);
  const [toBounds, setToBounds] = useState<paper.Rectangle>(null);

  const resetState = () => {
    setToBounds(null);
    setSnapBounds(null);
  }

  const handleSnapToolUpdate = (snapToolBounds: paper.Rectangle, xSnapPoint: Btwx.SnapPoint, ySnapPoint: Btwx.SnapPoint): void => {
    setToBounds(snapToolBounds);
  }

  useEffect(() => {
    if (moveEvent && isEnabled) {
      const nextSnapBounds = new uiPaperScope.Rectangle({
        from: new uiPaperScope.Point(moveEvent.point.x - 0.5, moveEvent.point.y - 0.5),
        to: new uiPaperScope.Point(moveEvent.point.x + 0.5, moveEvent.point.y + 0.5)
      });
      setSnapBounds(nextSnapBounds);
    }
  }, [moveEvent])

  useEffect(() => {
    if (downEvent && isEnabled) {
      const paperLayer = new uiPaperScope.PointText({
        point: toBounds.center,
        content: DEFAULT_TEXT_VALUE,
        ...textSettings,
        insert: false
      });
      const parentItem = Object.keys(layerPaperScopes).reduce((result, current, index) => {
        const paperScope = layerPaperScopes[current];
        if (paperScope.project) {
          const hitTest = paperScope.project.getItem({
            data: (data: any) => {
              return data.id === 'artboardBackground';
            },
            overlapping: paperLayer.bounds
          });
          return hitTest && scope[scope.length - 1] === 'page' ? { id: hitTest.parent.data.id, paperScope: index + 1, paperLayer: hitTest.parent } : result;
        } else {
          return result;
        }
      }, {
        id: scope[scope.length - 1],
        paperScope: paperScope,
        paperLayer: paper.PaperScope.get(paperScope).project.getItem({ data: { id: scope[scope.length - 1] }})
      });
      addTextThunk({
        layer: {
          text: DEFAULT_TEXT_VALUE,
          name: DEFAULT_TEXT_VALUE,
          parent: parentItem.id,
          frame: {
            x: parentItem.id === 'page' ? paperLayer.position.x : paperLayer.position.x - parentItem.paperLayer.position.x,
            y: parentItem.id === 'page' ? paperLayer.position.y : paperLayer.position.y - parentItem.paperLayer.position.y,
            width: paperLayer.bounds.width,
            height: paperLayer.bounds.height,
            innerWidth: paperLayer.bounds.width,
            innerHeight: paperLayer.bounds.height
          },
          transform: DEFAULT_TRANSFORM,
          style: {
            ...DEFAULT_STYLE,
            fill: {
              ...DEFAULT_STYLE.fill,
              color: textSettings.fillColor
            },
            stroke: {
              ...DEFAULT_STYLE.stroke,
              enabled: false
            }
          },
          textStyle: {
            fontSize: textSettings.fontSize,
            leading: textSettings.leading,
            fontWeight: textSettings.fontWeight,
            fontFamily: textSettings.fontFamily,
            justification: textSettings.justification
          }
        }
      }).then((textLayer) => {
        // get new layer bounds
        const topLeft = uiPaperScope.view.projectToView(paperLayer.bounds.topLeft);
        const topCenter = uiPaperScope.view.projectToView(paperLayer.bounds.topCenter);
        const topRight = uiPaperScope.view.projectToView(paperLayer.bounds.topRight);
        // open text editor with new text layer props
        openTextEditor({
          layer: textLayer.id,
          paperScope: parentItem.paperScope,
          x: ((): number => {
            switch(textSettings.justification) {
              case 'left':
                return topLeft.x;
              case 'center':
                return topCenter.x;
              case 'right':
                return topRight.x;
            }
          })(),
          y: ((): number => {
            switch(textSettings.justification) {
              case 'left':
                return topLeft.y;
              case 'center':
                return topCenter.y;
              case 'right':
                return topRight.y;
            }
          })()
        });
        toggleTextToolThunk();
        resetState();
      });
    }
  }, [downEvent]);

  useEffect(() => {
    if (isEnabled) {
      if (tool) {
        tool.activate();
      }
    } else {
      if (tool && uiPaperScope.tool && (uiPaperScope.tool as any)._index === (tool as any)._index) {
        uiPaperScope.tool = null;
        resetState();
      }
    }
  }, [isEnabled]);

  return (
    isEnabled
    ? <SnapTool
        bounds={snapBounds}
        snapRule={'move'}
        hitTestZones={{center: true, middle: true}}
        onUpdate={handleSnapToolUpdate}
        toolEvent={moveEvent} />
    : null
  );
}

const mapStateToProps = (state: RootState): TextToolStateProps => {
  const { textTool, textSettings, layer } = state;
  const isEnabled = textTool.isEnabled;
  const scope = layer.present.scope;
  const paperScope = layer.present.paperScope;
  const layerPaperScopes = getLayerPaperScopes(state);
  return {
    isEnabled,
    textSettings,
    scope,
    paperScope,
    layerPaperScopes
  };
};

const mapDispatchToProps = {
  addTextThunk,
  setCanvasDrawing,
  toggleTextToolThunk,
  openTextEditor
};

export default PaperTool(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TextTool),
  {
    mouseMove: true,
    mouseDown: true
  }
);