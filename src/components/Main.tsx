import React, { useContext, ReactElement } from 'react';
import Canvas from './Canvas';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import TweenDrawer from './TweenDrawer';
import TextEditor from './TextEditor';

interface MainProps {
  ready: boolean;
  setReady(ready: boolean): void;
}

const Main = (props: MainProps): ReactElement => {
  const { ready, setReady } = props;
  return (
    <div
      id='main'
      className='c-app__main'>
      {
        ready
        ? <SidebarLeft />
        : null
      }
      <div
        id='main-canvas'
        className='c-app__canvas'>
        <Canvas setReady={setReady} />
        {
          ready
          ? <>
              <TweenDrawer />
              <TextEditor />
            </>
          : null
        }
      </div>
      {
        ready
        ? <SidebarRight />
        : null
      }
    </div>
  );
}

export default Main;