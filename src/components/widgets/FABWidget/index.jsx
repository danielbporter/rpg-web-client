import React, { Component, PropTypes } from 'react';
import { GRID_UNIT } from '../../../constants';
import FloatingActionButton from 'material-ui/';

const SIZE_CLASSES = {
  normal: [5, 1],
};

class FABWidget extends Component {

  
  // render

  renderNormalContents() {
    
    return (
      <button class="mdc-fab app-fab--absolute" aria-label="Edit">
        <span class="mdc-fab__icon">
         <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
         </svg>
        </span>
      </button>
    );
  }

    
  render() {
    // const draggableChild = React.Children.only(this.props.children);
    const children = React.Children.toArray(this.props.children)
      .filter((c) => c !== undefined);

    const widgetProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} ${this.getClassName()}`,
        onContextMenu: this.handleContextMenu,
      });

    const contents = this.renderContents();

    return (
      <div key={this.props.id} {...widgetProps}>
        {contents}
        {children}
      </div>
    );
  }
}

