import React, { Component, PropTypes } from 'react';
import { GRID_UNIT } from '../../constants';

const SIZE_CLASSES = {
  thumbnail: [1, 1],
  normal: [3, 1],
  full: [3, 3],
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
        this.props.changeSize(...SIZE_CLASSES.normal);
        break;
      case 'normal':
        this.props.changeSize(...SIZE_CLASSES.full);
        break;
      case 'full':
        this.props.changeSize(...SIZE_CLASSES.thumbnail);
        break;
      default:
        console.log('ERROR: Hit default case of handleContextMenu in AssetWidget.');
    }
  }

  render() {
    const widgetProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} ${this.getClassName()}`,
        handleContextMenu: this.handleContextMenu,
      });

    // console.log(widgetProps);

    const iconSrc = `${this.props.assetType}_icon.png`;

    return (
      <div {...widgetProps}>
        {/* <h3 style={{ textAlign: 'center' }}>{this.props.name}</h3> */}
        <img src={iconSrc} alt={'placeholder icon'} width={GRID_UNIT} height={GRID_UNIT} />
        {this.props.children}
      </div>
    );
  }
}

AssetWidget.propTypes = {
  assetType: PropTypes.string.isRequired,
  changeSize: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  sizeClass: PropTypes.string,
};

export default AssetWidget;
