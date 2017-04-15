import Dragable from '../../dragable';
import React from 'react';

class Button extends Dragable {
  renderNode() {
    return (
      <button>{ this.props.data.text }</button>
    );
  }
}

export default Button;
