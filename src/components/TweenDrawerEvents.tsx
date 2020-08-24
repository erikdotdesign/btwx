import React, { useContext, ReactElement, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import TweenDrawerEventsItems from './TweenDrawerEventsItems';
import TweenDrawerEventsHeader from './TweenDrawerEventsHeader';

const TweenDrawerEvents = (): ReactElement => {
  const theme = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={`c-tween-drawer-events`}>
      <TweenDrawerEventsHeader
        scrolled={scrolled} />
      <TweenDrawerEventsItems
        scrolled={scrolled}
        setScrolled={setScrolled} />
    </div>
  );
}

export default TweenDrawerEvents;