import React, { Component, PropTypes } from 'react';
import style from './app-style.styl';
import { connect } from 'react-redux';

import componentRegistry from '../component-registry';

class App extends Component {
  render() {
    return (
      <div className={ style.app }>
        { this.props.tree.map(child => {
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
        })}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tree: PropTypes.array.isRequired,
  dragTargetId: PropTypes.number,
  dragSourceId: PropTypes.number
};

export default connect(state => {
  const {
    tree,
    dragTargetId,
    dragSourceId
  } = state.app;

  return {
    tree,
    dragTargetId,
    dragSourceId
  };
})(App);
