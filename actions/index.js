export const INIT = 'INIT';
export const DRAG_START = 'DRAG_START';
export const DRAG = 'DRAG'
export const DRAG_STOP = 'DRAG_STOP';

export function init () {
  return { type: INIT };
}
export function dragStart () {
  return { type: DRAG_START };
}
export function drag (x, y) {
  return { type: DRAG, x, y }
}
export function dragStop () {
  return { type: DRAG_STOP };
}
