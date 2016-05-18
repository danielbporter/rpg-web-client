import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Responsive, WidthProvider } from 'react-grid-layout';
// import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import ReactGridLayout from 'react-grid-layout';
import { updateLayout, changeWidth } from '../../actions/ActionCreators';

import AssetWidget from '../widgets/AssetWidget';

// const ResponsiveGridLayout = WidthProvider(Responsive);
// const GridLayout = WidthProvider(ReactGridLayout);

function mapStateToProps(state) {
  return {
    // layout: state.dashboard.layout,
    dashboard: state.dashboard.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLayout: (layout) => dispatch(updateLayout(layout)),
    changeWidth: (width, rowHeight) => dispatch(changeWidth(width, rowHeight)),
  };
}

function makeWidget(key, type, text) {
  const classes = 'widget ' + type;
  return (
    <article key={key} className={classes}>
      <header>
        <h3 style={{ textAlign: 'center' }}>{text}</h3>
      </header>
    </article>
  );
}


class Dashboard extends Component {

  // constructor() {
  //   super();

  //   this.props.changeWidth(this.calculateWidthAndCols(800, 50));
  // }

  // onDrag(layout, oldItem, newItem, placeholder, e, element) {
  onDrag(...args) {
    // console.log('OnDrag');
    // console.log(args);
  }

  // onDragStart(layout, oldItem, newItem, placeholder, e, element) {
  onDragStart(...args) {
    // console.log('OnDragStart');
    // console.log(args);
  }

  // onDragStop(layout, oldItem, newItem, placeholder, e, element) {
  onDragStop(...args) {
    // console.log('OnDragStop');
    // console.log(args);
  }

  // onResize(layout, oldItem, newItem, placeholder, e, element) {
  onResize(...args) {
    // console.log('OnResize');
    // console.log(args);
  }

  // onResizeStart(layout, oldItem, newItem, placeholder, e, element) {
  onResizeStart(...args) {
    // console.log('OnResizeStart');
    // console.log(args);
  }

  // onResizeStop(layout, oldItem, newItem, placeholder, e, element) {
  onResizeStop(...args) {
    // console.log('OnResizeStop');
    // console.log(args);
  }

  getWidgetLayout() {
    return {
      border: '1px solid black',
    };
  }

  calculateWidthAndCols(oldWidth, rowHeight) {
    const cols = Math.floor(oldWidth / rowHeight);
    const width = cols * rowHeight;

    return {
      cols,
      width,
    };
  }

  render() {
    // RGL required
    // width
    // layout (or _grid prop of children)
    // onLayoutChange

    // callbacks
    // (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
    //     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void
    // * start and stop use undefined for placeholder
    // onDragStart
    // onDrag
    // onDragStop
    // onResizeStart
    // onResize
    // onResizeStart

    const rglProps = {
      onDrag: this.onDrag,
      onDragStart: this.onDragStart,
      onDragStop: this.onDragStop,
      onLayoutChange: (layout) => this.props.updateLayout(layout),
      onResize: this.onResize,
      onResizeStart: this.onResizeStart,
      onResizeStop: this.onResizeStop,
    };

    // const widgetLayout = this.getWidgetLayout();

    // console.log(this.props.dashboard);

    return (
      <div className="dashboard">
        <h1>Hello, World!</h1>
        <ReactGridLayout {...rglProps} {...this.props.dashboard}>
          {/* this.props.children */}
          <AssetWidget key={'a'} id={'a'} name="A" assetType="item" />
          <AssetWidget key={'b'} id={'b'} name="N" assetType="npc" />
          <AssetWidget key={'c'} id={'c'} name="E" assetType="encounter" />
          <AssetWidget key={'d'} id={'d'} name="L" assetType="locale" />
        </ReactGridLayout>
      </div>
    );
  }
}

          // <AssetWidget key={'a'} name="A" assetType="item" />
          // <AssetWidget key={'b'} name="N" assetType="npc" />
          // <AssetWidget key={'c'} name="E" assetType="encounter" />
          // <AssetWidget key={'d'} name="L" assetType="locale" />


          // {makeWidget('a', 'item', 'I')}
          // {makeWidget('b', 'npc', 'N')}
          // {makeWidget('c', 'encounter', 'E')}
          // {makeWidget('d', 'locale', 'L')}

Dashboard.propTypes = {
  changeWidth: PropTypes.func.isRequired,
  dashboard: PropTypes.object.isRequired,
  updateLayout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
