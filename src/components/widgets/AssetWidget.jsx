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
  }

  getClassName() {
    return 'widget ' + this.props.assetType;
  }

  handleContextMenu(e) {
    this.props.changeSize();
  }

  render() {
    const widgetProps = Object.assign({},
      this.props,
      {
        className: this.props.className + ' ' + this.getClassName(),
        handleContextMenu: this.handleContextMenu,
      });

    console.log(widgetProps);

    const iconSrc = this.props.assetType + '_icon.png';

    return (
      <article {...widgetProps}>
        <header>
          {/* <h3 style={{ textAlign: 'center' }}>{this.props.name}</h3> */}
          <img src={iconSrc} alt={'placeholder icon'} width={GRID_UNIT} height={GRID_UNIT} />
          {this.props.children}
        </header>
      {/* content */}
      </article>
    );
  }
}

AssetWidget.propTypes = {
  assetType: PropTypes.string.isRequired,
  changeSize: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizeClass: PropTypes.string,
};

export default AssetWidget;
