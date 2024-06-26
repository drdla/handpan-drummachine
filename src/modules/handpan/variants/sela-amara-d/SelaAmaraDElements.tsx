import clsx from 'clsx';

interface HandpanElement {
  active?: boolean;
  className?: string;
  onClick?: Function;
}

const baseClass = 'handpan-element';

export const Border = () => (
  <g className="border">
    <path d="M340.6 680.6c-90.8 0-176.2-35.4-240.5-99.6C35.9 516.8.5 431.4.5 340.6c0-90.8 35.4-176.2 99.6-240.5C164.3 35.9 249.7.5 340.6.5c90.8 0 176.2 35.4 240.5 99.6 64.2 64.2 99.6 149.6 99.6 240.5 0 90.8-35.4 176.2-99.6 240.5-64.3 64.2-149.7 99.5-240.5 99.5z" />
    <path d="M340.6 666.3c-87 0-168.8-33.9-230.4-95.4-61.5-61.5-95.4-143.3-95.4-230.4s33.9-168.8 95.4-230.4 143.3-95.4 230.4-95.4S509.4 48.6 571 110.1c61.5 61.5 95.4 143.3 95.4 230.4S632.5 509.3 571 570.9c-61.6 61.5-143.4 95.4-230.4 95.4z" />
  </g>
);

export const Ding = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'ding', {active}, className)} onClick={() => onClick('Ding')}>
    <ellipse cx="340.7" cy="330.5" className="unplayable-area" rx="112.7" ry="143" />
    <ellipse cx="340.7" cy="330.5" className="playable-area" rx="48.2" ry="61.2" />
  </g>
);

export const Tone1 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--1', {active}, className)} onClick={() => onClick('Tone1')}>
    <path
      className="playable-area"
      d="M405.2 629c-38 0-66.8-15.7-73.4-40.1-9.1-33.5 26.6-72.4 79.5-86.7 13.1-3.5 26.2-5.3 38.9-5.3 38 0 66.8 15.7 73.4 40.1 4.4 16.2-1.4 34.1-16.4 50.5-15 16.4-37.4 29.3-63.1 36.2-13.1 3.5-26.2 5.3-38.9 5.3z"
    />
    <path
      className="unplayable-area"
      d="M417.5 592.5c-17 0-29.9-7-32.9-17.9-4.1-15 12-32.4 35.7-38.8 5.9-1.6 11.8-2.4 17.5-2.4 17 0 29.9 7 32.9 17.9 2 7.2-.7 15.2-7.3 22.5-6.7 7.4-16.8 13.2-28.4 16.3-5.9 1.6-11.8 2.4-17.5 2.4z"
    />
  </g>
);

export const Tone2 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--2', {active}, className)} onClick={() => onClick('Tone2')}>
    <path
      className="playable-area"
      d="M209.2 584.2c-17.2 0-34.7-6.2-49.3-17.5-15.7-12.1-26.4-28.6-30.2-46.5-3.8-17.9-.2-35.1 10-48.4 10.8-14 28.1-22 47.6-22 17.2 0 34.7 6.2 49.3 17.5 32.3 24.9 41.3 67.5 20.2 94.9-10.8 14-28.1 22-47.6 22z"
    />
    <path
      className="unplayable-area"
      d="M202.5 551.6c-7.8 0-15.8-2.8-22.5-8-14.6-11.3-18.9-30.2-9.5-42.3 4.7-6.1 12.3-9.5 20.8-9.5 7.8 0 15.8 2.8 22.5 8 7.1 5.5 12 12.9 13.8 20.9 1.8 8 .3 15.6-4.2 21.4-4.7 6.1-12.3 9.5-20.9 9.5z"
    />
  </g>
);

export const Tone3 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--3', {active}, className)} onClick={() => onClick('Tone3')}>
    <path
      className="playable-area"
      d="M577.5 459.8c-5.6 0-11.1-.9-16.4-2.7-14.2-4.9-25.4-15.7-31.6-30.5-6.2-14.8-6.5-31.9-1-48 9.2-26.7 32.3-44.7 57.5-44.7 5.6 0 11.1.9 16.4 2.7 14.2 4.9 25.4 15.7 31.6 30.5 6.2 14.8 6.5 31.9 1 48-9.2 26.8-32.3 44.7-57.5 44.7z"
    />
    <path
      className="unplayable-area"
      d="M579.8 425c-2.5 0-4.9-.4-7.3-1.2-13.1-4.5-19.6-20.2-14.5-35.1 4-11.8 14.6-20 25.7-20 2.5 0 4.9.4 7.3 1.2 13.1 4.5 19.6 20.2 14.5 35.1-4 11.8-14.6 20-25.7 20z"
    />
  </g>
);

export const Tone4 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--4', {active}, className)} onClick={() => onClick('Tone4')}>
    <path
      className="playable-area"
      d="M96.1 425.5c-28.4 0-53.6-23.7-60.1-56.4-3.5-17.8-1-35.7 7.2-50.4 8.2-14.7 21-24.4 36.1-27.4 3.2-.6 6.4-.9 9.6-.9 28.4 0 53.6 23.7 60.1 56.4 3.5 17.8 1 35.7-7.2 50.4-8.2 14.7-21 24.4-36.1 27.4-3.1.6-6.4.9-9.6.9z"
    />
    <path
      className="unplayable-area"
      d="M93.5 383.5c-11.6 0-22-9.7-24.7-23.1-1.4-7.3-.4-14.7 3-20.7s8.6-10 14.8-11.2c1.3-.3 2.6-.4 3.9-.4 11.6 0 22 9.7 24.7 23.1 1.4 7.3.4 14.7-3 20.7s-8.6 10-14.8 11.2c-1.2.3-2.5.4-3.9.4z"
    />
  </g>
);

export const Tone5 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--5', {active}, className)} onClick={() => onClick('Tone5')}>
    <path
      className="playable-area"
      d="M564.7 272.8c-22.4 0-42.7-17.2-49.3-41.8-7.9-29.1 6.4-58.4 31.8-65.2 3.6-1 7.3-1.5 11-1.5 22.4 0 42.7 17.2 49.3 41.8 3.8 14.1 2.6 28.7-3.4 41S588 268 575.7 271.3c-3.6 1-7.3 1.5-11 1.5z"
    />
    <path
      className="unplayable-area"
      d="M562.9 242.8c-10 0-19-7.7-22-18.7-3.5-13 2.8-26.1 14.2-29.1 1.6-.4 3.2-.7 4.9-.7 10 0 19 7.7 22 18.7 1.7 6.3 1.2 12.8-1.5 18.3s-7.2 9.3-12.6 10.8c-1.7.5-3.4.7-5 .7z"
    />
  </g>
);

export const Tone6 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--6', {active}, className)} onClick={() => onClick('Tone6')}>
    <path
      className="playable-area"
      d="M127.1 246.7c-8 0-15.6-1.9-22.6-5.6-12.2-6.5-21-17.8-24.7-31.8-3.7-14-1.8-29.2 5.3-42.5 10.1-19.1 29.6-31.4 49.8-31.4 8 0 15.6 1.9 22.6 5.6 12.2 6.5 21 17.8 24.7 31.8 3.7 14 1.8 29.2-5.3 42.5-10.1 19.1-29.7 31.4-49.8 31.4z"
    />
    <path
      className="unplayable-area"
      d="M129.6 208.9c-2.7 0-5.2-.6-7.6-1.9-4.1-2.2-7.1-6-8.3-10.7-1.2-4.7-.6-9.8 1.8-14.4 3.4-6.4 10-10.6 16.8-10.6 2.7 0 5.2.6 7.6 1.9 4.1 2.2 7.1 6 8.3 10.7 1.2 4.7.6 9.8-1.8 14.4-3.4 6.4-10 10.6-16.8 10.6z"
    />
  </g>
);

export const Tone7 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--7', {active}, className)} onClick={() => onClick('Tone7')}>
    <path
      className="playable-area"
      d="M436.2 151.3c-9.5 0-19.2-2.4-27.8-7-27.2-14.4-38.7-46.3-25.5-71.2 8.5-16.1 25.9-26 45.3-26 9.5 0 19.2 2.4 27.8 7 13.2 7 23.1 18.2 27.9 31.7 4.8 13.4 4 27.5-2.4 39.5-8.4 16-25.8 26-45.3 26z"
    />
    <path
      className="unplayable-area"
      d="M433.4 114.7c-2.9 0-5.7-.7-8.3-2.1-3.9-2.1-6.9-5.4-8.3-9.5-1.4-4-1.2-8.2.7-11.8 2.5-4.8 7.7-7.7 13.5-7.7 2.9 0 5.7.7 8.3 2.1 8.1 4.3 11.5 13.8 7.6 21.2-2.5 4.8-7.7 7.8-13.5 7.8z"
    />
  </g>
);

export const Tone8 = ({className, active, onClick = () => {}}: HandpanElement) => (
  <g className={clsx(baseClass, 'tone--8', {active}, className)} onClick={() => onClick('Tone8')}>
    <path
      className="playable-area"
      d="M261.1 134.4c-17.1 0-31.5-8.3-37.7-21.8-9.3-20.3 3-45.8 27.3-57 7.4-3.4 15.5-5.2 23.3-5.2 17.1 0 31.5 8.3 37.7 21.8 9.3 20.3-3 45.8-27.3 57-7.4 3.4-15.5 5.2-23.3 5.2z"
    />
    <path
      className="unplayable-area"
      d="M265 105.5c-5.4 0-9.9-2.6-11.9-6.8-2.9-6.4 1-14.4 8.6-18 2.4-1.1 4.9-1.6 7.4-1.6 5.4 0 9.9 2.6 11.9 6.8 2.9 6.4-1 14.4-8.6 18-2.4 1-4.9 1.6-7.4 1.6z"
    />
  </g>
);
