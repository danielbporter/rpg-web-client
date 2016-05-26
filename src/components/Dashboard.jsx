import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactGridLayout from 'react-grid-layout';
import {
  updateDashboardLayout,
  changeWidth,
  changeWidgetSize,
} from '../actions/ActionCreators';
// import _ from 'underscore';

import { WidgetFactories } from './widgets';

// const ResponsiveGridLayout = WidthProvider(Responsive);
// const GridLayout = WidthProvider(ReactGridLayout);

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard
                 .set('layout', state.dashboard.get('layout').toList())
                 .toJS(),
    widgets: state.widgets.toList().toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLayout: (layout) => dispatch(updateDashboardLayout(layout)),
    changeWidth: (width, rowHeight) => dispatch(changeWidth(width, rowHeight)),
    widgetChangeSize: (id, width, height, sizeClass) =>
      dispatch(changeWidgetSize(id, width, height, sizeClass)),
  };
}

class Dashboard extends Component {

  constructor() {
    super();
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.renderWidget = this.renderWidget.bind(this);
  }

  // onDrag(layout, oldItem, newItem, placeholder, e, element) {}
  // onDragStart(layout, oldItem, newItem, placeholder, e, element) {}
  // onDragStop(layout, oldItem, newItem, placeholder, e, element) {}
  // onResize(layout, oldItem, newItem, placeholder, e, element) {}
  // onResizeStart(layout, oldItem, newItem, placeholder, e, element) {}
  // onResizeStop(layout, oldItem, newItem, placeholder, e, element) {}

  onLayoutChange(layout) {
    const layoutObj = {};
    layout.forEach((item) => {
      layoutObj[item.i] = item;
    });
    this.props.updateLayout(layoutObj);
    // if (!_.isEqual(layout, this.props.dashboard.layout)) {
    //   console.log('Meaninging layout change?');
    //   this.props.updateLayout(layout);
    // }
  }

  calculateWidthAndCols(oldWidth, rowHeight) {
    const cols = Math.floor(oldWidth / rowHeight);
    const width = cols * rowHeight;

    return {
      cols,
      width,
    };
  }

  renderWidget(widget) {
    const changeSize = (width, height, sizeClass) => {
      // console.log(`changeSize(${width}, ${height}, ${sizeClass})`);
      this.props.widgetChangeSize(
        widget.id,
        width,
        height,
        sizeClass);
    };

    const widgetObj = Object.assign({
      changeSize,
      id: widget.id,
      key: widget.id,
      sizeClass: widget.sizeClass,
    }, widget.content);

    // console.log(widget.type);
    if (widget.type === 'NewWidgetWidget') {
      console.log(widgetObj);
    }

    return WidgetFactories[widget.type](widgetObj);
  }

  render() {
    const rglProps = {
      // onDrag: this.onDrag,
      // onDragStart: this.onDragStart,
      // onDragStop: this.onDragStop,
      onLayoutChange: this.onLayoutChange,
      // onResize: this.onResize,
      // onResizeStart: this.onResizeStart,
      // onResizeStop: this.onResizeStop,
    };

    const renderedWidgets = this.props.widgets.map(this.renderWidget);

    const dashProps = this.props.dashboard;
    dashProps.layout = Object.freeze(dashProps.layout);

    return (
      <div className="dashboard">
        <h1>Hello, World!</h1>
        <ReactGridLayout {...rglProps} {...this.props.dashboard}>
          {/* this.props.children */}
          {renderedWidgets}
        </ReactGridLayout>
      </div>
    );
  }
}

Dashboard.propTypes = {
  changeWidth: PropTypes.func.isRequired,
  dashboard: PropTypes.object.isRequired,
  updateLayout: PropTypes.func.isRequired,
  widgets: PropTypes.array,
  widgetChangeSize: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

