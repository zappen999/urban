import * as types from './actions';

const initalState = {
  // form a component hierarchy
  // todo: read non-hardcoded component tree from other source
  tree: [
    {
      component: 'Root', // which component to use for this
      data: {}, // data needed to render this component
      id: 'root', // unique identifier for this component in the tree
      children: [
        {
          component: 'Button',
          data: {
            text: 'Post'
          },
          id: 'childbtn',
          children: []
        },
        {
          component: 'Root',
          data: {},
          id: 'childroot',
          children: []
        }
      ]
    }
  ],
  dragSourceId: null, // the component being dragged
  dragTargetId: null // the component that is the current target
};

/**
 * General app reducer
 * @param  {Object} state  Inital state.
 * @param  {Object} action Redux action descriptor.
 * @return {Object}        Next state.
 */
function app(state = initalState, action = {}) {
  switch (action.type) {
    case types.ON_DRAG:
      return {
        ...state,
        dragSourceId: action.dragSourceId,
        dragTargetId: null
      };
    case types.ON_DRAG_OVER:
      return {
        ...state,
        dragTargetId: action.dragTargetId
      };
    case types.ON_DROP:
      // todo: find and move the dragSource to dragTarget container
      // in the tree structure
      return {
        ...state
      };
    default:
      return state;
  }
}

export default app;
