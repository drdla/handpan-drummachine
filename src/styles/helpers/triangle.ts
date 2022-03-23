export const triangle = (direction = 'down', color = 'currentcolor', size = '1em') => {
  let borderColor;
  let transform;

  switch (direction) {
    case 'up':
      borderColor = `transparent transparent ${color} transparent`;
      break;

    case 'right':
      borderColor = `transparent transparent transparent ${color}`;
      transform = 'translate(30%, 15%)';
      break;

    case 'left':
      borderColor = `transparent ${color} transparent transparent`;
      transform = 'translate(-30%, 15%)';
      break;

    case 'down':
    default:
      borderColor = `${color} transparent transparent transparent`;
      transform = 'translate(0, 50%)';
  }

  return `
    border-color: ${borderColor};
    border-style: solid;
    border-width: ${size};
    content: '';
    display: block;
    height: 0;
    ${transform ? `transform: ${transform};` : ''}
    width: 0;
  `;
};
