import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
import { addWidget as addWidgetAction } from '../../actions/ActionCreators';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


function mapDispatchToProps(dispatch) {
  return {
    addWidget: (w) => dispatch(addWidgetAction(w)),
  };
}

class FAB extends Component {
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }
  render() {
     return (
      <div className="FAB">
          <FloatingActionButton style='FAB'>
              <ContentAdd />
          </FloatingActionButton>
      </div>
         );
    }
}



FAB.propTypes = {
  addWidget: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,

};

//export default connect(() => Object(), mapDispatchToProps)(FAB);
export default FAB;













  //   //const children = React.Children.toArray(this.props.children)
  //     .filter((c) => c !== undefined);

  //   //const props = Object.assign({},
  //     this.props,
  //     {
  //       width: '100%',
  //       height: '100%',
  //       onClick: this.handleClick,
  //       className: `${this.props.className} widget`,
  //     });

  //  // return (
  //     <div {...props}>
  //       <p style={{ textAlign: 'center' }}>New</p>
  //       {children}
  //     </div>
  //   );
  // }