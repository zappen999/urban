export const ON_DRAG = 'ON_DRAG';
export const ON_DRAG_OVER = 'ON_DRAG_OVER';
export const ON_DROP = 'ON_DROP';

export function setDragSource(id) {
  console.log('setting drag source ' + id);
  return {
    type: ON_DRAG,
    dragSourceId: id
  };
};

export function setDragTarget(id) {
  console.log('setting drag target ' + id);
  return {
    type: ON_DRAG_OVER,
    dragTargetId: id
  };
};

// moves the current drag source to the current drag target
export function move() {
  return {
    type: ON_DROP
  };
};

