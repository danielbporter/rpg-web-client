import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { updateLayout } from '../../actions/ActionCreators';

const ResponsiveGridLayout = WidthProvider(Responsive);

function mapStateToProps(state) {
  return {
    // layout: state.dashboard.layout,
    dashboard: state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLayout: (layout) => dispatch(updateLayout(layout)),
  };
}

class Dashboard extends Component {

  // onDrag(layout, oldItem, newItem, placeholder, e, element) {
  onDrag(...args) {
    console.log('OnDrag');
    console.log(args);
  }

  // onDragStart(layout, oldItem, newItem, placeholder, e, element) {
  onDragStart(...args) {
    console.log('OnDragStart');
    console.log(args);
  }

  // onDragStop(layout, oldItem, newItem, placeholder, e, element) {
  onDragStop(...args) {
    console.log('OnDragStop');
    console.log(args);
  }

  onLayoutChange(layout, ...rest) {
    console.log('OnLayoutChange');
    console.log(layout);
    console.log('Rest...');
    console.log(rest);
  }

  // onResize(layout, oldItem, newItem, placeholder, e, element) {
  onResize(...args) {
    console.log('OnResize');
    console.log(args);
  }

  // onResizeStart(layout, oldItem, newItem, placeholder, e, element) {
  onResizeStart(...args) {
    console.log('OnResizeStart');
    console.log(args);
  }

  // onResizeStop(layout, oldItem, newItem, placeholder, e, element) {
  onResizeStop(...args) {
    console.log('OnResizeStop');
    console.log(args);
  }

  getWidgetLayout() {
    return {
      border: '1px solid black',
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
      onLayoutChange: this.onLayoutChange,
      onResize: this.onResize,
      onResizeStart: this.onResizeStart,
      onResizeStop: this.onResizeStop,
    };

    const widgetLayout = this.getWidgetLayout();

    return (
      <div className="dashboard">
        <h1>Hello, World!</h1>
        <ResponsiveGridLayout {...rglProps} {...this.props.dashboard}>
          {/* this.props.children */}
          <div key={'a'} style={widgetLayout}>
            A
          </div>
          <div key={'b'} style={widgetLayout}>
            B
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
