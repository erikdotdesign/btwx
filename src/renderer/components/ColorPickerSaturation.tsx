/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { ReactElement, useRef, useState, useEffect } from 'react';
import tinyColor from 'tinycolor2';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

interface ColorPickerSaturationProps {
  hue: number | 'multi';
  saturation: number | 'multi';
  lightness: number | 'multi';
  colorValues: {
    [id: string]: Btwx.Color;
  };
  setHex(hex: string | 'multi'): void;
  setSaturation(saturation: number | 'multi'): void;
  setLightness(lightness: number | 'multi'): void;
  setRed(red: number | 'multi'): void;
  setGreen(green: number | 'multi'): void;
  setBlue(blue: number | 'multi'): void;
  onChange(colors: { [id: string]: { [P in keyof Btwx.Color]?: Btwx.Color[P] } }): void;
}

const ColorPickerSaturation = (props: ColorPickerSaturationProps): ReactElement => {
  const { hue, saturation, lightness, setHex, setSaturation, setLightness, setRed, setGreen, setBlue, onChange, colorValues } = props;
  const pointerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const createDraggable = (): globalThis.Draggable[] => {
    if (Draggable.get(pointerRef.current)) {
      Draggable.get(pointerRef.current).kill();
    }
    const dragger = Draggable.create(pointerRef.current, {
      type: 'x,y',
      zIndexBoost: false,
      bounds: containerRef.current,
      onPress: function() {
        setDragging(true);
      },
      onDragStart: function() {
        document.body.style.cursor = 'grabbing';
      },
      onDrag: function() {
        const s = this.x / this.maxX;
        const v = 1 - (this.y / this.maxY);
        const l = (2 - s) * v / 2;
        const sat = s < 0 ? 0 : s > 1 ? 1 : s;
        const lit = l < 0 ? 0 : l > 1 ? 1 : l;
        let hex: string | 'multi';
        let red: number | 'multi';
        let green: number | 'multi';
        let blue: number | 'multi';
        const newColors = Object.keys(colorValues).reduce((result, current, index) => {
          const colorInstance = tinyColor({h: colorValues[current].h, s: sat, l: lit});
          const newHex = colorInstance.toHex();
          const rgb = colorInstance.toRgb();
          if (index === 0) {
            hex = newHex;
            red = rgb.r;
            green = rgb.g;
            blue = rgb.b;
          } else {
            if (hex !== 'multi' && hex !== newHex) {
              hex = 'multi';
            }
            if (red !== 'multi' && red !== rgb.r) {
              red = 'multi';
            }
            if (green !== 'multi' && green !== rgb.g) {
              green = 'multi';
            }
            if (blue !== 'multi' && blue !== rgb.b) {
              blue = 'multi';
            }
          }
          return {
            ...result,
            [current]: { s: sat, l: lit }
          };
        }, {});
        setHex(hex);
        setSaturation(sat);
        setLightness(lit);
        setRed(red);
        setGreen(green);
        setBlue(blue);
        onChange(newColors);
      },
      onRelease: function() {
        setDragging(false);
        document.body.style.cursor = 'auto';
      }
    });
    return dragger;
  }

  const updateDraggable = (draggable) => {
    const colorInstance = tinyColor({h: hue !== 'multi' ? hue : 0, s: saturation !== 'multi' ? saturation : 0, l: lightness !== 'multi' ? lightness : 0});
    const hsv = colorInstance.toHsv();
    gsap.set(pointerRef.current, {
      x: draggable.maxX * (hsv.s),
      y: draggable.maxY * (1 - hsv.v)
    });
    Draggable.get(pointerRef.current).update();
  }

  const handleMouseDown = (event: any) => {
    if (
      !dragging && pointerRef.current
      // && Draggable.get(pointerRef.current)
    ) {
      const boundingBox = containerRef.current.getBoundingClientRect();
      const x = event.clientX - boundingBox.left;
      const y = event.clientY - boundingBox.top;
      const s = x / boundingBox.width;
      const v = 1 - (y / boundingBox.height);
      const l = (2 - s) * v / 2;
      const sat = s < 0 ? 0 : s > 1 ? 1 : s;
      const lit = l < 0 ? 0 : l > 1 ? 1 : l;
      setDragging(true);
      let hex: string | 'multi';
      let red: number | 'multi';
      let green: number | 'multi';
      let blue: number | 'multi';
      const newColors = Object.keys(colorValues).reduce((result, current, index) => {
        const colorInstance = tinyColor({h: colorValues[current].h, s: sat, l: lit});
        const newHex = colorInstance.toHex();
        const rgb = colorInstance.toRgb();
        if (index === 0) {
          hex = newHex;
          red = rgb.r;
          green = rgb.g;
          blue = rgb.b;
        } else {
          if (hex !== 'multi' && hex !== newHex) {
            hex = 'multi';
          }
          if (red !== 'multi' && red !== rgb.r) {
            red = 'multi';
          }
          if (green !== 'multi' && green !== rgb.g) {
            green = 'multi';
          }
          if (blue !== 'multi' && blue !== rgb.b) {
            blue = 'multi';
          }
        }
        return {
          ...result,
          [current]: { s: sat, l: lit }
        };
      }, {});
      setHex(hex);
      setSaturation(sat);
      setLightness(lit);
      setRed(red);
      setGreen(green);
      setBlue(blue);
      onChange(newColors);
      gsap.set(pointerRef.current, {x, y});
      const newDragger = createDraggable();
      newDragger[0].startDrag(event);
    }
  }

  useEffect(() => {
    if (!dragging && pointerRef.current && Draggable.get(pointerRef.current)) {
      const draggable = Draggable.get(pointerRef.current);
      updateDraggable(draggable);
    }
  }, [saturation, lightness]);

  useEffect(() => {
    if (pointerRef.current) {
      const draggable = createDraggable()[0];
      updateDraggable(draggable);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className='c-color-picker-saturation'>
      <div
        className='c-color-picker-saturation__color'
        style={{
          background: `hsl(${ hue !== 'multi' ? hue : 0 },100%, 50%)`
        }} />
      <div className='c-color-picker-saturation__white' />
      <div className='c-color-picker-saturation__black' />
      <div
        ref={pointerRef}
        className={`c-color-picker-saturation__pointer${
          dragging
          ? `${' '}c-color-picker-saturation__pointer--dragging`
          : ''
        }`}>
        <div className='c-color-picker-saturation__circle' />
      </div>
    </div>
  );
}

export default ColorPickerSaturation;