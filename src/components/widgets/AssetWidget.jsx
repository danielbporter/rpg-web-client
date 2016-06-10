import React, { Component, PropTypes } from 'react';
import { GRID_UNIT } from '../../constants';

const SIZE_CLASSES = {
  thumbnail: [1, 1],
  normal: [4, 1],
  full: [4, 2],
};

class AssetWidget extends Component {

  constructor() {
    super();
    this.getClassName = this.getClassName.bind(this);
    this.getIconName = this.getIconName.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.renderThumbnailContents = this.renderThumbnailContents.bind(this);
    this.renderContents = this.renderContents.bind(this);
  }

  getClassName() {
    // return 'widget ' + this.props.assetType;
    return `widget ${this.props.assetType}`;
  }

  getIconName() {
    return `${this.props.assetType}_icon.png`;
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

  renderContents() {
    switch (this.props.sizeClass) {
      case 'thumbnail':
        return this.renderThumbnailContents();
      case 'full':
        return this.renderFullContents();
      default:
        // 'normal' is implicit default
        return this.renderNormalContents();
    }
  }

  renderPlaceholderIcon(id, iconSrc) {
    return (
      <img
        key={`${this.props.id} icon`}
        src={iconSrc}
        draggable={false}
        alt={'placeholder icon'}
        width={`${GRID_UNIT}px`}
        height={`${GRID_UNIT}px`}
        className={'asset-widget-icon'}
      />
    );
  }

  renderThumbnailContents() {
    return this.renderPlaceholderIcon(this.props.id, this.getIconName());
  }

  renderNormalContents() {
    const img = this.renderPlaceholderIcon(this.props.id, this.getIconName());

    const name = (
      <h3 key={`${this.props.id} name`} className={'asset-widget-name'}>
        {this.props.name}
      </h3>
    );

    const slug = (
      <p key={`${this.props.id} slug`} className={'asset-widget-slug'}>
        {this.props.slug}
      </p>
    );

    const header = (
      <div key={this.props.id} className={'asset-widget-normal-header'}>
        {name}
        {slug}
      </div>
    );

    return [
      img,
      header,
    ];
  }

  renderFullContents() {
    const img = this.renderPlaceholderIcon(this.props.id, this.getIconName());

    const name = (
      <h3 key={`${this.props.id} name`} className={'asset-widget-name'}>
        {this.props.name}
      </h3>
    );

    const slug = (
      <p key={`${this.props.id} slug`} className={'asset-widget-slug'}>
        {this.props.slug}
      </p>
    );

    const description = (
      <p key={`${this.props.id} description`} className={'asset-widget-description'}>
        {this.props.description}
      </p>
    );

    const miniHeader = (
      <div key={this.props.id} className={'asset-widget-normal-header'}>
        {name}
        {slug}
      </div>
    );

    return (
      <div className={'asset-widget-full'}>
        <div className={'asset-widget-full-header'}>
          {img}
          {miniHeader}
        </div>
        {description}
      </div>
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
      <div {...widgetProps}>
        {contents}
        {children}
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
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AssetWidget;
