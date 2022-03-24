export const percentToDecibel = (percent: number = 100): number | null => {
  // The volume used by tone is given as negative value relative to digital zero, e.g. -3.
  // Null means "muted".

  const decibelRange = 100;
  const defaultDamping = 3;

  const percentClamped = Math.min(Math.max(percent, 0), 100);
  const decibel = -1 * (decibelRange - decibelRange * (percentClamped / 100));
  const volume = decibel < 0 ? null : decibel - defaultDamping;

  return volume;
};
