import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Icon = (name: string): em.Icon => {
  const theme = useContext(ThemeContext);
  switch(name) {
    case 'artboard':
      return {
        name: 'artboard',
        fill: 'M12.4743416,2.84188612 L12.859,3.99988612 L21,4 L21,15 L22,15 L22,16 L16.859,15.9998861 L18.4743416,20.8418861 L17.5256584,21.1581139 L16.805,18.9998861 L7.193,18.9998861 L6.47434165,21.1581139 L5.52565835,20.8418861 L7.139,15.9998861 L2,16 L2,15 L3,15 L3,4 L11.139,3.99988612 L11.5256584,2.84188612 L12.4743416,2.84188612 Z M15.805,15.9998861 L8.193,15.9998861 L7.526,17.9998861 L16.472,17.9998861 L15.805,15.9998861 Z M20,5 L4,5 L4,15 L20,15 L20,5 Z',
        opacity: null
      }
    case 'rectangle':
      return {
        name: 'rectangle',
        fill: 'M4,4 L19.999,4 C19.9995523,4 20,4.00044772 20,4.001 L20,20 L20,20 L4,20 L4,4 Z',
        opacity: null
      }
    case 'rounded':
      return {
        name: 'rounded',
        fill: 'M7.55555556,4 L16.4444444,4 C18.4081236,4 20,5.59187645 20,7.55555556 L20,16.4444444 C20,18.4081236 18.4081236,20 16.4444444,20 L7.55555556,20 C5.59187645,20 4,18.4081236 4,16.4444444 L4,7.55555556 C4,5.59187645 5.59187645,4 7.55555556,4 Z',
        opacity: null
      }
    case 'ellipse':
      return {
        name: 'ellipse',
        fill: 'M12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z',
        opacity: null
      }
    case 'star':
      return {
        name: 'star',
        fill: 'M12,17.9252329 L6.4376941,21 L7.5,14.4875388 L3,9.8753882 L9.21884705,8.92523292 L11.9990948,3.00192861 C11.9993294,3.00142866 11.9999249,3.0012136 12.0004249,3.00144827 C12.0006362,3.00154743 12.0008061,3.00171735 12.0009052,3.00192861 L14.7811529,8.92523292 L14.7811529,8.92523292 L21,9.8753882 L16.5,14.4875388 L17.5623059,21 L12,17.9252329 Z',
        opacity: null
      }
    case 'polygon':
      return {
        name: 'polygon',
        fill: 'M12.0006071,3.00046375 L20.9994457,9.87496475 C20.9997787,9.87521916 20.9999178,9.87565424 20.9997941,9.87605465 L17.5625237,20.9992952 C17.5623942,20.9997142 17.5620068,21 17.5615683,21 L6.43843174,21 C6.43799318,21 6.4376058,20.9997142 6.43747632,20.9992952 L3.00020594,9.87605465 C3.00008221,9.87565424 3.00022128,9.87521916 3.0005543,9.87496475 L11.9993929,3.00046375 C11.9997513,3.00018996 12.0002487,3.00018996 12.0006071,3.00046375 Z',
        opacity: null
      }
    case 'line':
      return {
        name: 'line',
        fill: 'M18.7928932,3.79289322 C19.1834175,3.40236893 19.8165825,3.40236893 20.2071068,3.79289322 C20.5675907,4.15337718 20.5953203,4.72060824 20.2902954,5.11289944 L20.2071068,5.20710678 L5.20710678,20.2071068 C4.81658249,20.5976311 4.18341751,20.5976311 3.79289322,20.2071068 C3.43240926,19.8466228 3.40467972,19.2793918 3.70970461,18.8871006 L3.79289322,18.7928932 L18.7928932,3.79289322 Z',
        opacity: null
      }
    case 'text':
      return {
        name: 'text',
        fill: 'M12.84,18.999 L12.84,6.56 L12.84,6.56 L16.92,6.56 L16.92,5 L7.08,5 L7.08,6.56 L11.16,6.56 L11.16,19 L12.839,19 C12.8395523,19 12.84,18.9995523 12.84,18.999 Z',
        opacity: null
      }
    case 'image':
      return {
        name: 'image',
        fill: theme.name === 'dark' ? 'M21,4 L21,20 L3,20 L3,4 L21,4 Z M20,5 L4,5 L4,14.916 L7.55555556,11 L12.7546667,16.728 L16,13.6703297 L20,17.44 L20,5 Z M16.6243657,6.71118154 C16.9538983,6.79336861 17.2674833,6.9606172 17.5297066,7.21384327 C18.3242674,7.98114172 18.3463679,9.24727881 17.5790695,10.0418396 C16.811771,10.8364004 15.5456339,10.8585009 14.7510731,10.0912025 C14.4888499,9.8379764 14.3107592,9.53041925 14.21741,9.2034121 C14.8874902,9.37067575 15.6260244,9.1851639 16.1403899,8.65252287 C16.6547553,8.11988184 16.8143797,7.37532327 16.6243657,6.71118154 Z' : 'M21,4 L21,20 L3,20 L3,4 L21,4 Z M20,5 L4,5 L4,14.916 L7.55555556,11 L12.7546667,16.728 L16,13.6703297 L20,17.44 L20,5 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z',
        opacity: null
      }
    case 'subtract':
      return {
        name: 'subtract',
        fill: 'M7,9.001 L7,17 L7,17 L15,17 L15,21 L3.001,21 C3.00044772,21 3,20.9995523 3,20.999 L3,9 L3,9 L6.999,9 C6.99955228,9 7,9.00044772 7,9.001 Z',
        opacity: 'M9,3 L21,3.001 L21,15 L9.001,14.9990001 C9.00044775,14.999 9.00000008,14.9985523 9,14.998 L9,3 L9,3 Z'
      }
    case 'intersect':
      return {
        name: 'intersect',
        fill: 'M9,9 L15,9.001 L15,15 L9.001,14.9990002 C9.00044778,14.9989999 9.00000017,14.9985522 9,14.998 L9,9 L9,9 Z',
        opacity: 'M7,9 L7,17 L15,17 L15,21 L3.001,21 C3.00044772,21 3,20.9995523 3,20.999 L3,9 L3,9 L7,9 Z M21,3 L21,15 L17,15 L17,7 L9,7 L9,3 L21,3 Z'
      }
    case 'tweens':
      return {
        name: 'tweens',
        fill: 'M20,2 C21.1045695,2 22,2.8954305 22,4 C22,5.1045695 21.1045695,6 20,6 C19.198685,6 18.5074366,5.52874899 18.1882777,4.84826986 C14.5079434,5.67662984 11.6831421,7.17519855 9.70198469,9.33775263 C7.69282622,11.5308716 6.12101186,14.5044994 4.99180281,18.2624097 C5.59467168,18.6083555 6,19.256843 6,20 C6,21.1045695 5.1045695,22 4,22 C2.8954305,22 2,21.1045695 2,20 C2,18.9456382 2.81587779,18.0818349 3.85073766,18.0054857 L4.02725117,18.0001819 C5.19720815,14.0937278 6.8415122,10.9797594 8.96462952,8.66224737 C11.1005861,6.33072053 14.1181111,4.73384315 18.0052695,3.86490437 C18.0736125,2.82366656 18.9406174,2 20,2 Z M4,19 C3.44771525,19 3,19.4477153 3,20 C3,20.5522847 3.44771525,21 4,21 C4.55228475,21 5,20.5522847 5,20 C5,19.4477153 4.55228475,19 4,19 Z M20,3 C19.4477153,3 19,3.44771525 19,4 C19,4.55228475 19.4477153,5 20,5 C20.5522847,5 21,4.55228475 21,4 C21,3.44771525 20.5522847,3 20,3 Z',
        opacity: null
      }
    case 'insert':
      return {
        name: 'insert',
        fill: 'M13,4 L12.999,11 L19.999,11 C19.9995523,11 20,11.0004477 20,11.001 L20,13 L20,13 L12.999,13 L13,20 L11,20 L10.999,12.999 L4,13 L4,11 L10.999,10.999 L11,4 L13,4 Z',
        opacity: null
      }
    case 'exclude':
      return {
        name: 'exclude',
        fill: 'M7,9 L7,17 L15,17 L15,21 L3,21 L3,9 L7,9 Z M21,3.001 L21,15 L21,15 L17,15 L17,7 L9,7 L9,3 L20.999,3 C20.9995523,3 21,3.00044772 21,3.001 Z',
        opacity: 'M9,9 L14.999,9.00099983 C14.9995522,9.00100009 14.9999998,9.00144778 15,9.002 L15,15 L15,15 L9,14.999 L9,9 Z'
      }
    case 'align-bottom':
      return {
        name: 'align-bottom',
        fill: 'M21,19 L21,20 L3,20 L3,19 L21,19 Z M15,5 L15,17 L9,17 L9,5 L15,5 Z',
        opacity: null
      }
    case 'align-center':
      return {
        name: 'align-center',
        fill: 'M12,3 L12,9 L17.999,9 C17.9995523,9 18,9.00044772 18,9.001 L18,15 L18,15 L12,15 L12,21 L11,21 L11,15 L5,15 L5,9 L11,9 L11,3 L12,3 Z',
        opacity: null
      }
    case 'align-left':
      return {
        name: 'align-left',
        fill: 'M5,3 L5,21 L4,21 L4,3 L5,3 Z M19,9 L19,15 L7,15 L7,9 L19,9 Z',
        opacity: null
      }
    case 'align-middle':
      return {
        name: 'align-middle',
        fill: 'M15,5.001 L15,10.999 L15,10.999 L21,11 L21,12 L15,11.999 L15,18 L9,18 L9,12 L3,12 L3,11 L9,11 L9,5 L14.999,5 C14.9995523,5 15,5.00044772 15,5.001 Z',
        opacity: null
      }
    case 'align-right':
      return {
        name: 'align-right',
        fill: 'M20,3 L20,21 L19,21 L19,3 L20,3 Z M17,9 L17,15 L5,15 L5,9 L17,9 Z',
        opacity: null
      }
    case 'align-top':
      return {
        name: 'align-top',
        fill: 'M15,7 L15,19 L9,19 L9,7 L15,7 Z M21,4 L21,5 L3,5 L3,4 L21,4 Z',
        opacity: null
      }
    case 'group':
      return {
        name: 'group',
        fill: 'M5,2 L5,3 L19,3 L19,2 L22,2 L22,5 L21,5 L21,19 L22,19 L22,22 L19,22 L19,21 L5,21 L5,22 L2,22 L2,19 L3,19 L3,5 L2,5 L2,2 L5,2 Z M19,4 L5,4 L5,5 L4,5 L4,19 L5,19 L5,20 L19,20 L19,19 L20,19 L20,5 L19,5 L19,4 Z M17,10 L17,17 L10,17 L10,10 L17,10 Z M14,7 L14,9 L9,9 L9,14 L7,14 L7,7 L14,7 Z',
        opacity: null
      }
    case 'ungroup':
      return {
        name: 'ungroup',
        fill: 'M13,11 L13,12 L18,12 L18,11 L20,11 L20,13 L19,13 L19,18 L20,18 L20,20 L18,20 L18,19 L13,19 L13,20 L11,20 L11,18 L12,18 L12,13 L11,13 L11,11 L13,11 Z M6,4 L6,5 L11,5 L11,4 L13,4 L13,6 L12,6 L12,10 L10,10 L10,12 L6,12 L6,13 L4,13 L4,11 L5,11 L5,6 L4,6 L4,4 L6,4 Z',
        opacity: null
      }
    case 'mask':
      return {
        name: 'mask',
        fill: 'M16.0566792,20.6980024 L16.3546361,21.6525817 C15.847026,21.8109856 15.3228978,21.9186671 14.7880039,21.973513 L14.3849047,22.0047076 L14.2171817,22.0117647 L14.1856696,21.0122613 L14.3325688,21.0060781 C14.8118374,20.9809607 15.2773132,20.9082021 15.7246478,20.7926318 L16.0566792,20.6980024 Z M10.3532316,20.0120132 C10.8264008,20.2976977 11.3353999,20.5286987 11.8710558,20.6967565 L12.1955747,20.7899719 L11.943458,21.7576689 C11.3244785,21.5960954 10.7289235,21.3607684 10.1685017,21.0579417 L9.83655827,20.8681959 L10.3532316,20.0120132 Z M19.4250036,18.3977506 L20.2048142,19.0237662 C19.80557,19.5207976 19.3485694,19.9686742 18.8440721,20.357346 L18.5357562,20.5833641 L17.9641611,19.7628282 C18.4230149,19.4429846 18.8410556,19.0699031 19.2097655,18.6530438 L19.4250036,18.3977506 Z M7.6653983,17.0693693 C7.91084113,17.5752374 8.21510088,18.0461686 8.56885344,18.4737675 L8.78696952,18.7250598 L8.04721755,19.3979396 C7.61793,18.9263246 7.2462845,18.4052716 6.94076601,17.8456772 L6.76545803,17.5053828 L7.6653983,17.0693693 Z M20.9313679,14.7231376 L21.9264404,14.8222895 C21.8624145,15.461036 21.722005,16.0857225 21.5096386,16.685155 L21.3736192,17.0416944 L20.4482102,16.6627245 C20.6561457,16.1545199 20.8058021,15.6173329 20.8892833,15.0599329 L20.9313679,14.7231376 Z M2,16 L2,2 L16,2 L16,16 L2,16 Z M15,3 L3,3 L3,15 L6.01450559,15.0007546 C6.00487984,14.8350654 6,14.6681026 6,14.5 C6,9.80557963 9.80557963,6 14.5,6 C14.6681026,6 14.8350654,6.00487984 15.0007546,6.01450559 L15,3 Z M21.1207246,10.43219 C21.4057947,11.0006944 21.6221993,11.6022295 21.7647046,12.2262375 L21.841298,12.6032547 L20.8567349,12.7782849 C20.7568253,12.217881 20.5907997,11.6818722 20.3673577,11.1780918 L20.2264721,10.8797536 L21.1207246,10.43219 Z M17.9916771,7.10130899 C18.5424241,7.42254861 19.0528929,7.80842959 19.5119541,8.24980783 L19.7811328,8.5212213 L19.0549764,9.20875111 C18.6719511,8.80365961 18.2414791,8.44480163 17.7730536,8.14072484 L17.4875197,7.96492089 L17.9916771,7.10130899 Z',
        opacity: null
      }
    case 'masked':
      return {
        name: 'masked',
        fill: 'M17.3507957,16.5606602 L17.3507957,15.5606602 L13.3535534,15.5606602 C12.5591397,15.5606602 11.9313732,15.0626291 11.8602672,14.4604145 L11.8535534,14.3463745 L11.853,5.91466017 L15,9.06066017 L15.7071068,8.35355339 L11.3535534,4 L7,8.35355339 L7.70710678,9.06066017 L10.853,5.91466017 L10.8535534,14.3463745 C10.8535534,15.536138 11.8958722,16.4791276 13.1841832,16.5556445 L13.3535534,16.5606602 L17.3507957,16.5606602 Z',
        opacity: null
      }
    case 'start-recording':
      return {
        name: 'start-recording',
        fill: 'M12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 Z',
        opacity: 'M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 Z'
      }
    case 'stop-recording':
      return {
        name: 'stop-recording',
        fill: 'M9,8 L15,8 C15.5522847,8 16,8.44771525 16,9 L16,15 C16,15.5522847 15.5522847,16 15,16 L9,16 C8.44771525,16 8,15.5522847 8,15 L8,9 C8,8.44771525 8.44771525,8 9,8 Z',
        opacity: 'M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 Z'
      }
    case 'preview':
      return {
        name: 'preview',
        fill: 'M19.5,12 L6.5,20 L6.5,4.00178956 C6.5,4.00123728 6.50044772,4.00078956 6.501,4.00078956 C6.50118506,4.00078956 6.50136649,4.00084092 6.5015241,4.00093791 L19.5,12 L19.5,12 Z',
        opacity: null
      }
    case 'rewind':
      return {
        name: 'rewind',
        fill: 'M21,6 L18.8666667,6 L18.8666667,10.8689927 C18.8666667,11.4042237 18.4548905,11.8453526 17.9243959,11.9056403 L17.8,11.9126618 L6.798,11.913 L10,8.48679212 L8.60987928,7 L3,13 L8.60987928,19 L10,17.5132079 L6.716,14 L17.8,14 C19.5041929,14 20.8972383,12.6965408 20.9945678,11.0529632 L21,10.8689927 L21,6 Z',
        opacity: null
      }
    case 'right-sidebar':
      return {
        name: 'right-sidebar',
        fill: 'M15.001,8 L21,8 L21,8 L21,21 L15,21 L15,8.001 C15,8.00044772 15.0004477,8 15.001,8 Z',
        opacity: 'M14,8 L14,21 L3,21 L3,8 L14,8 Z M21,3 L21,7 L3,7 L3,3.001 C3,3.00044772 3.00044772,3 3.001,3 L21,3 L21,3 Z'
      }
    case 'chevron-down':
      return {
        name: 'chevron-down',
        fill: 'M7 10l5 5 5-5H7z',
        opacity: null
      }
    case 'chevron-right':
      return {
        name: 'chevron-right',
        fill: 'M10 17l5-5-5-5v10z',
        opacity: null
      }
    case 'unite':
      return {
        name: 'unite',
        fill: 'M21,3 L21,15 L15,15 L15,21 L3,21 L3,9 L9,9 L9,3 L21,3 Z',
        opacity: null
      }
    case 'zoom-in':
      return {
        name: 'zoom-in',
        fill: 'M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M13,6 L11,6 L11,11 L6,11 L6,13 L11,13 L11,18 L13,18 L13,13 L18,13 L18,11 L13,11 L13,6 Z',
        opacity: null
      }
    case 'zoom-out':
      return {
        name: 'zoom-out',
        fill: 'M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M18,11 L6,11 L6,13 L18,13 L18,11 Z',
        opacity: null
      }
    case 'vertical-flip':
      return {
        name: 'vertical-flip',
        fill: 'M20,13 L4,19 L4.99603067,13 L20,13 Z M20,11 L5,11 L4,5 L20,11 Z',
        opacity: null
      }
    case 'horizontal-flip':
      return {
        name: 'horizontal-flip',
        fill: 'M13,4 L19,20 L13,19.0039693 L13,4 Z M11,4 L11,19 L5,20 L11,4 Z',
        opacity: null
      }
    case 'distribute-vertically':
      return {
        name: 'distribute-vertically',
        fill: 'M21,19 L21,20 L3,20 L3,19 L21,19 Z M18,9 L18,15 L6,15 L6,9 L18,9 Z M21,4 L21,5 L3,5 L3,4 L21,4 Z',
        opacity: null
      }
    case 'distribute-horizontally':
      return {
        name: 'distribute-horizontally',
        fill: 'M5,3 L5,21 L4,21 L4,3 L5,3 Z M20,3 L20,21 L19,21 L19,3 L20,3 Z M15,6 L15,18 L9,18 L9,6 L15,6 Z',
        opacity: null
      }
    case 'trash-can':
      return {
        name: 'trash-can',
        fill: 'M19,8 L17.5555556,20 L7.44444444,20 L6,8 L19,8 Z M16,10 L15,10 L15,18 L16,18 L16,10 Z M13,10 L12,10 L12,18 L13,18 L13,10 Z M10,10 L9,10 L9,18 L10,18 L10,10 Z M6,7 L6,6 L10,6 L10,4 L15,4 L15,6 L19,6 L19,7 L6,7 Z M14,5 L11,5 L11,6 L14,6 L14,5 Z',
        opacity: null
      }
    case 'justify-left':
      return {
        name: 'justify-left',
        fill: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
        opacity: null
      }
    case 'justify-center':
      return {
        name: 'justify-center',
        fill: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
        opacity: null
      }
    case 'justify-right':
      return {
        name: 'justify-right',
        fill: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
        opacity: null
      }
    case 'select-chevron':
      return {
        name: 'select-chevron',
        fill: 'M17.9221027,7.65690583 L11.9999918,13.935 L6.07789728,7.65690583 C5.89831309,7.46652977 5.60230705,7.44684832 5.39909894,7.61177252 L4.68491362,8.19140709 C4.45910436,8.37467444 4.43674641,8.71124816 4.63633033,8.92277357 L11.6363303,16.341597 C11.7119065,16.421695 11.8112262,16.4740318 11.9191557,16.4917589 L12.0014807,16.4984579 C12.1391366,16.4984579 12.2707002,16.4416915 12.36516,16.3415592 L19.3637053,8.92273584 C19.5632531,8.7112047 19.5408797,8.37466147 19.3150864,8.19140709 L18.6009011,7.61177252 C18.397693,7.44684832 18.1016869,7.46652977 17.9221027,7.65690583 Z',
        opacity: null
      }
    case 'switch-on':
      return {
        name: 'switch-on',
        fill: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        opacity: null
      }
    case 'switch-off':
      return {
        name: 'switch-off',
        fill: 'M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
        opacity: null
      }
    case 'move-forward':
      return {
        name: 'move-forward',
        fill: 'M11.5,20 L7.62371165,15.5586636 L8.37628835,14.900159 L11.0002883,17.8997074 L11,8.00029613 L4,8 L4,4 L19,4 L19,8 L12,8.00029613 L12.0002883,17.8997074 L14.6237117,14.900159 L15.3762883,15.5586636 L11.5,20 Z M13,13 L13,10 L19,10 L19,13 L13,13 Z M4,13 L4,10 L10,10 L10,13 L4,13 Z',
        opacity: null
      }
    case 'move-backward':
      return {
        name: 'move-backward',
        fill: 'M11.5,4 L15.3762883,8.44133642 L14.6237117,9.09984103 L11.9997117,6.10029259 L12,15.9997039 L19,16 L19,20 L4,20 L4,16 L11,15.9997039 L10.9997117,6.10029259 L8.37628835,9.09984103 L7.62371165,8.44133642 L11.5,4 Z M10,11 L10,14 L4,14 L4,11 L10,11 Z M19,11 L19,14 L13,14 L13,11 L19,11 Z',
        opacity: null
      }
    case 'stroke-cap-butt':
      return {
        name: 'stroke-cap-butt',
        fill: 'M18,14 L18,21 L7,21 L7,16 L13,16 L13,14 L18,14 Z M12,9 L12,11 L18,11 L18,13 L12,13 L12,15 L6,15 L6,9 L12,9 Z M10,11 L8,11 L8,13 L10,13 L10,11 Z M18,3 L18,10 L13,10 L13,8 L7,8 L7,3 L18,3 Z',
        opacity: null
      }
    case 'stroke-cap-round':
      return {
        name: 'stroke-cap-round',
        fill: 'M21,3 L21,10 L16,10 L16,8 L9,8 C8.48716416,8 8.06449284,8.38604019 8.00672773,8.88337887 L8,9 L8,15 C8,15.5128358 8.38604019,15.9355072 8.88337887,15.9932723 L9,16 L16,16 L16,14 L21,14 L21,21 L12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 L21,3 Z M15,9 L15,11 L21,11 L21,13 L15,13 L15,15 L9,15 L9,9 L15,9 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z',
        opacity: null
      }
    case 'stroke-cap-square':
      return {
        name: 'stroke-cap-square',
        fill: 'M21,3 L21,10 L16,10 L16,8 L8,8 L8,16 L16,16 L16,14 L21,14 L21,21 L3,21 L3,3 L21,3 Z M15,9 L15,11 L21,11 L21,13 L15,13 L15,15 L9,15 L9,9 L15,9 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z',
        opacity: null
      }
    case 'stroke-join-miter':
      return {
        name: 'stroke-join-miter',
        fill: 'M21,14 L21,21 L14,21 L14,16 L16,16 L16,14 L21,14 Z M21,3 L21,10 L16,10 L16,8 L8,8 L8,16 L10,16 L10,21 L3,21 L3,3 L21,3 Z M15,9 L15,11 L21,11 L21,13 L15,13 L15,15 L13,15 L13,21 L11,21 L11,15 L9,15 L9,9 L15,9 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z',
        opacity: null
      }
    case 'stroke-join-round':
      return {
        name: 'stroke-join-round',
        fill: 'M21,14 L21,21 L14,21 L14,16 L16,16 L16,14 L21,14 Z M21,3 L21,10 L16,10 L16,8 L8,8 L8,16 L10,16 L10,21 L3,21 L3,8 C3,5.23857625 5.23857625,3 8,3 L21,3 Z M15,9 L15,11 L21,11 L21,13 L15,13 L15,15 L13,15 L13,21 L11,21 L11,15 L9,15 L9,9 L15,9 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z',
        opacity: null
      }
    case 'stroke-join-bevel':
      return {
        name: 'stroke-join-bevel',
        fill: 'M21,14 L21,21 L14,21 L14,16 L16,16 L16,14 L21,14 Z M21,3 L21,10 L16,10 L16,8 L8,8 L8,16 L10,16 L10,21 L3,21 L3,8.00529368 L8,3 L21,3 Z M15,9 L15,11 L21,11 L21,13 L15,13 L15,15 L13,15 L13,21 L11,21 L11,15 L9,15 L9,9 L15,9 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z',
        opacity: null
      }
    case 'gear':
      return {
        name: 'gear',
        fill: 'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z',
        opacity: null
      }
  }
}

export default Icon;