import React, { Component, PropTypes } from 'react';

class Widget extends Component {
  render() {
    return (
      <div>Widget placeholder.</div>
    );
  }
}

Widget.propTypes = {
  // ReactProps
  children: PropTypes.any,
  className: PropTypes.string,

  // widgetProps
  id: PropTypes.string,
  sizeClass: PropTypes.string,
  changeSize: PropTypes.func,

  // contentProps
  content: PropTypes.object,
};

Widget.defaultProps = {

};

export default Widget;
