import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
import Appbar from 'material-ui/Appbar';



class appbar extends Component {
  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }
  render() {
     return (
      <Appbar>
           </Appbar> 
        );
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

Appbar.propTypes = {
  addWidget: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
};

//export default connect(() => Object(), mapDispatchToProps)(FAB);
export default Appbar;
