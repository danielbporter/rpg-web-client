import React, { Component, PropTypes } from 'react';

class Widget extends Component {
  render() {
    return (
      <div>Widget placeholder.</div>
    );
  }
}

Widget.propTypes = {
  children: PropTypes.node,
};

Widget.defaultProps = {

};

export default Widget;
