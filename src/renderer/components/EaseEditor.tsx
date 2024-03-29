import React, { ReactElement, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { MotionPathHelper } from 'gsap/MotionPathHelper';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { RootState } from '../store/reducers';
import { closeEaseEditor } from '../store/actions/easeEditor';
import { setEventDrawerTweenEditing, setEventDrawerTweenHoverThunk } from '../store/actions/eventDrawer';
import { setCanvasFocusing } from '../store/actions/canvasSettings';
import EaseEditorVisualizer from './EaseEditorVisualizer';
import EaseEditorMain from './EaseEditorMain';

gsap.registerPlugin(CustomEase, MotionPathPlugin, MotionPathHelper, DrawSVGPlugin);

const EaseEditor = (): ReactElement => {
  const editorRef = useRef<HTMLDivElement>(null);
  const tween = useSelector((state: RootState) => state.layer.present.tweens.byId[state.easeEditor.tween]);
  const canvasFocusing = useSelector((state: RootState) => state.canvasSettings.focusing);
  const easeEditor = useSelector((state: RootState) => state.easeEditor);
  const dispatch = useDispatch();

  const onMouseDown = (event: any): void => {
    const previewButton = document.getElementById('preview-button');
    if (editorRef.current && !editorRef.current.contains(event.target) && !previewButton.contains(event.target)) {
      dispatch(closeEaseEditor());
    }
  }

  useEffect(() => {
    if (canvasFocusing) {
      dispatch(setCanvasFocusing({focusing: false}));
    }
    document.addEventListener('mousedown', onMouseDown);
    dispatch(setEventDrawerTweenHoverThunk({id: tween.id}));
    dispatch(setEventDrawerTweenEditing({id: tween.id}));
    return (): void => {
      if (easeEditor.isOpen) {
        dispatch(closeEaseEditor());
      }
      dispatch(setEventDrawerTweenEditing({id: null}));
      dispatch(setCanvasFocusing({focusing: true}));
      dispatch(setEventDrawerTweenHoverThunk({id: null}));
      document.removeEventListener('mousedown', onMouseDown);
    }
  }, []);

  return (
    <div className='c-ease-editor'>
      <div
        className='c-ease-editor__content'
        ref={editorRef}>
        <EaseEditorVisualizer />
        <EaseEditorMain />
      </div>
    </div>
  );
}

export default EaseEditor;