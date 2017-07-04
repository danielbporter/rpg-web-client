import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addWidget as addWidgetAction } from '../../actions/ActionCreators';

function mapDispatchToProps(dispatch) {
  return {
    addWidget: (w) => dispatch(addWidgetAction(w)),
  };
}

class FABWidget extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  render() {
    // const props = {
    //   ...this.props
    //   onClick: this.handleClick,
    // };

    const children = React.Children.toArray(this.props.children)
      .filter((c) => c !== undefined);

    const props = Object.assign({},
      this.props,
      {
        width: '100%',
        height: '100%',
        onClick: this.handleClick,
        className: `${this.props.className} widget`,
      });

    return (
      <div {...props}>
        <p style={{ textAlign: 'center' }}>New</p>
        {children}
      </div>
    );
  }
}

FABWidget.propTypes = {
  addWidget: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default connect(() => Object(), mapDispatchToProps)(FABWidget);
