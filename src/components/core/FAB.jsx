import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
import { addWidget as addWidgetAction } from '../../actions/ActionCreators';
import FloatingActionButton from 'material-ui/FloatingActionButton';



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
      <FloatingActionButton>
            </FloatingActionButton> 

        );

    //   <button class="mdc-fab app-fab--absolute" aria-label="Edit">
    //     <span class="mdc-fab__icon">
    //      <svg width="24" height="24" viewBox="0 0 24 24">
    //       <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    //      </svg>
    //     </span>
    //   </button>
    // );
  }

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
}

FAB.propTypes = {
  addWidget: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
};

//export default connect(() => Object(), mapDispatchToProps)(FAB);
export default FAB;
