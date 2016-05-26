import React, { Component, PropTypes } from 'react';
import { GRID_UNIT } from '../../constants';

const SIZE_CLASSES = {
  thumbnail: [1, 1],
  normal: [3, 1],
  full: [3, 2],
};

class AssetWidget extends Component {

  constructor() {
    super();
    this.getClassName = this.getClassName.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  getClassName() {
    // return 'widget ' + this.props.assetType;
    return `widget ${this.props.assetType}`;
  }

  handleContextMenu(e) {
    switch (this.props.sizeClass) {
      case 'thumbnail':
        // change to normal
        // console.log('In thumbnail case.');
        this.props.changeSize(...SIZE_CLASSES.normal, 'normal');
        e.preventDefault();
        break;
      case 'normal':
        // console.log('In normal case.');
        // change to full
        this.props.changeSize(...SIZE_CLASSES.full, 'full');
        e.preventDefault();
        break;
      case 'full':
        // console.log('In full case.');
        // change to thumbnail
        this.props.changeSize(...SIZE_CLASSES.thumbnail, 'thumbnail');
        e.preventDefault();
        break;
      default:
        return;
    }
  }

  render() {
    // const draggableChild = React.Children.only(this.props.children);
    const children = React.Children.toArray(this.props.children)
      .filter((c) => c !== undefined);

    // console.log(this.props.children);

    const widgetProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} ${this.getClassName()}`,
        onContextMenu: this.handleContextMenu,
      });

    if (widgetProps.name === 'A') {
      // console.log(widgetProps);
    }

    const iconSrc = `${this.props.assetType}_icon.png`;

    return (
      <div {...widgetProps}>
        {/* <h3 style={{ textAlign: 'center' }}>{this.props.name}</h3> */}
        <img
          key={widgetProps.id}
          src={iconSrc}
          draggable={false}
          alt={'placeholder icon'}
          width={'100%'}
          height={'100%'}
        />
        {children}
        {/* draggableChild */}
        {/* this.props.children */}
      </div>
    );
  }
}

AssetWidget.propTypes = {
  // ReactProps
  children: PropTypes.any,
  className: PropTypes.string,

  // widgetProps
  id: PropTypes.string,
  sizeClass: PropTypes.string,
  changeSize: PropTypes.func,

  // contentProps
  assetType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AssetWidget;
