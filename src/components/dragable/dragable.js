import React, { Component, PropTypes } from 'react';
import style from './dragable-style.styl';

import {
  setDragTarget,
  setDragSource,
  move
} from 'flux/app/actions';

import componentRegistry from '../component-registry';

/**
 * This component is used to render a a node and the nodes children
 * nodes.
 *
 * This component allows the user to drag and drop the node, changing
 * the component state tree.
 */

export default class Dragable extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  renderChildren() {
    return this.props.children.map(child => {
      const ChildComponent = componentRegistry[child.component];

      return (
        <ChildComponent
          id={ child.id }
          data={ child.data }
          children={ child.children }
          dispatch={ this.props.dispatch }
          dragTargetId={ this.props.dragTargetId }
          dragSourceId={ this.props.dragSourceId }
          key={ child.id }
        />
      );
    });
  }

  renderNode() {
    return (
      <div>
        { `Default dragable (${this.props.id})`}
        { this.renderChildren() }
      </div>
    );
  }

  onDrop(ev) {
    // todo: get this event to trigger
    this.props.dispatch(move());
  }

  onDragStart(ev) {
    this.props.dispatch(setDragSource(this.props.id));
  }

  onDragOver(ev) {
    // do not set the same drag target again
    if (this.props.dragTargetId === this.props.id) {
      console.log('unnecessary to set same drag target twice...');
      return;
    }

    // do not set drag target to the current component
    if (this.props.dragSourceId === this.props.id) {
      console.log('do not set drag target to current component...');
      return;
    }

    // todo: do not set the drag target to a child of itself
    this.props.dispatch(setDragTarget(this.props.id));
  }

  render() {
    return (
      <div
        draggable
        className={ style.dragable }
        onDrop={ this.onDrop }
        onDragStart={ this.onDragStart }
        onDragOver={ this.onDragOver }
      >
        { this.renderNode() }
      </div>
    );
  }
}

Dragable.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  dragTargetId: PropTypes.number,
  dragSourceId: PropTypes.number
};
