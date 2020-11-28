/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement, useCallback, useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import tinyColor from 'tinycolor2';
import { RootState } from '../store/reducers';
import { closeTextEditor } from '../store/actions/textEditor';
import { TextEditorTypes } from '../store/actionTypes/textEditor';
import { setLayerText, selectLayers } from '../store/actions/layer';
import { getPaperLayer } from '../store/selectors/layer';
import { SetLayerTextPayload, SelectLayersPayload, LayerTypes } from '../store/actionTypes/layer';
import { uiPaperScope } from '../canvas';
import { TextEditorState } from '../store/reducers/textEditor';
import { TextSettingsState } from '../store/reducers/textSettings';
import { setCanvasFocusing } from '../store/actions/canvasSettings';
import { SetCanvasFocusingPayload, CanvasSettingsTypes } from '../store/actionTypes/canvasSettings';

interface TextEditorInputProps {
  textEditor?: TextEditorState;
  textSettings?: TextSettingsState;
  layerItem?: Btwx.Text;
  canvasFocusing?: boolean;
  closeTextEditor?(): TextEditorTypes;
  setLayerText?(payload: SetLayerTextPayload): LayerTypes;
  selectLayers?(payload: SelectLayersPayload): LayerTypes;
  setCanvasFocusing?(payload: SetCanvasFocusingPayload): CanvasSettingsTypes;
}

const TextEditorInput = (props: TextEditorInputProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textSpanRef = useRef<HTMLTextAreaElement>(null);
  const { textEditor, textSettings, layerItem, closeTextEditor, setCanvasFocusing, canvasFocusing, setLayerText, selectLayers } = props;
  const [text, setText] = useState(layerItem.text);
  const [prevText, setPrevText] = useState(layerItem.text);
  const debounceText = useCallback(
    debounce((dText: string) => setLayerText({id: textEditor.layer, text: dText }), 250),
    []
  );
  const [pos, setPos] = useState({x: textEditor.x, y: textEditor.y});

  const onMouseDown = (event: any) => {
    if (event.target !== textAreaRef.current) {
      closeTextEditor();
    }
  }

  const handleTextChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setText(target.value);
  }

  const updateTextAreaSize = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.width = 'auto';
      textAreaRef.current.style.width = `${textSpanRef.current.clientWidth + 4}px`;
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }

  useEffect(() => {
    if (textAreaRef.current) {
      if (canvasFocusing) {
        setCanvasFocusing({focusing: false});
      }
      document.addEventListener('mousedown', onMouseDown);
      const paperLayer = getPaperLayer(textEditor.layer, textEditor.paperScope) as paper.PointText;
      textAreaRef.current.focus();
      textAreaRef.current.select();
      const topLeft = uiPaperScope.view.projectToView(paperLayer.bounds.topLeft);
      const topCenter = uiPaperScope.view.projectToView(paperLayer.bounds.topCenter);
      const topRight = uiPaperScope.view.projectToView(paperLayer.bounds.topRight);
      setPos({
        x: (() => {
          switch(textSettings.justification) {
            case 'left':
              return topLeft.x;
            case 'center':
              return topCenter.x;
            case 'right':
              return topRight.x;
          }
        })(),
        y: (() => {
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
      updateTextAreaSize();
    }
    return () => {
      const paperLayer = getPaperLayer(textEditor.layer, textEditor.paperScope) as paper.PointText;
      setCanvasFocusing({focusing: true});
      paperLayer.visible = true;
      selectLayers({layers: [textEditor.layer], newSelection: true });
      document.removeEventListener('mousedown', onMouseDown);
    }
  }, []);

  useEffect(() => {
    const paperLayer = getPaperLayer(textEditor.layer, textEditor.paperScope) as paper.PointText;
    paperLayer.visible = false;
  }, [layerItem.text]);

  useEffect(() => {
    updateTextAreaSize();
    if (text !== prevText) {
      debounceText(text);
      setPrevText(text);
    }
  }, [text]);

  return (
    <div
      className='c-text-editor'
      ref={containerRef}>
      {/* <div style={{
        position: 'absolute',
        top: 0,
        left: pos.x,
        height: '100%',
        width: 1,
        background: 'red'
      }} />
      <div style={{
        position: 'absolute',
        top: pos.y,
        left: 0,
        height: 1,
        width: '100%',
        background: 'red'
      }} /> */}
      <textarea
        className='c-text-editor__textarea'
        ref={textAreaRef}
        value={text}
        onChange={handleTextChange}
        rows={1}
        style={{
          left: pos.x,
          top: pos.y,
          position: 'absolute',
          fontFamily: textSettings.fontFamily,
          fontSize: textSettings.fontSize,
          minHeight: textSettings.leading,
          fontWeight: (() => {
            switch(textSettings.fontWeight) {
              case 'normal':
                return textSettings.fontWeight;
              case 'bold':
              case 'bold italic':
                return 'bold';
              case 'italic':
                return 'normal';
            }
          })(),
          fontStyle: (() => {
            switch(textSettings.fontWeight) {
              case 'normal':
              case 'bold':
                return textSettings.fontWeight;
              case 'bold italic':
              case 'italic':
                return 'italic';
            }
          })(),
          lineHeight: `${textSettings.leading}px`,
          color: tinyColor({
            h: textSettings.fillColor.h,
            s: textSettings.fillColor.s,
            l: textSettings.fillColor.l,
            a: textSettings.fillColor.a
          }).toHslString(),
          textAlign: textSettings.justification,
          transformOrigin: 'left top',
          transform: (() => {
            switch(textSettings.justification) {
              case 'left':
                return `scale(${uiPaperScope.view.zoom})`;
              case 'center':
                return `scale(${uiPaperScope.view.zoom}) translateX(-50%)`;
              case 'right':
                return `scale(${uiPaperScope.view.zoom}) translateX(-100%)`;
            }
          })()
        }} />
      <span
        className='c-text-editor__span'
        ref={textSpanRef}
        style={{
          fontFamily: textSettings.fontFamily,
          fontSize: textSettings.fontSize,
          fontWeight: (() => {
            switch(textSettings.fontWeight) {
              case 'normal':
                return textSettings.fontWeight;
              case 'bold':
              case 'bold italic':
                return 'bold';
              case 'italic':
                return 'normal';
            }
          })(),
          fontStyle: (() => {
            switch(textSettings.fontWeight) {
              case 'normal':
              case 'bold':
                return textSettings.fontWeight;
              case 'bold italic':
              case 'italic':
                return 'italic';
            }
          })(),
          lineHeight: `${textSettings.leading}px`,
          textAlign: textSettings.justification
        }}>
        {text}
      </span>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  const { textEditor, textSettings, layer, canvasSettings } = state;
  const layerItem = (layer.present.byId[textEditor.layer] as Btwx.Text);
  const canvasFocusing = canvasSettings.focusing;
  return { textEditor, textSettings, layerItem, canvasFocusing };
};

export default connect(
  mapStateToProps,
  { closeTextEditor, setLayerText, selectLayers, setCanvasFocusing }
)(TextEditorInput);