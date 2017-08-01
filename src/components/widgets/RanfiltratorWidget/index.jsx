import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
// import {
//   ranfiltratorWidgetRun,
// } from '../../../actions/ActionCreators';
//import ranfiltrateButton from 'src/components/widgets/RanfiltratorWidget/RanfiltrateButton';
//import Button from 'src/components/core/Button';

// the information this component requires from redux
function mapStateToProps(state) {
  // empty because this component gets its information from the dashboard-widget interaction
  return {};
}

// the actions this component will perform, passed in by redux
function mapDispatchToProps(dispatch) {
//   return {
//     ranfiltrateFunction: (id, sides) => dispatch(ranfiltratorWidgetRun(id, sides)),
//   };
}

// declare a new component, RanfiltratorWidget
class RanfiltratorWidget extends Component {

  // build a ranfiltratorButton with some number of sides
  // ranfiltratorButton(sides, ranfiltrateFunc) {
  //   return (
  //     <div className={'ranfiltrator-widget-ranfiltrate-button'} onClick={ranfiltrateFunc}>
  //       {sides}
  //     </div>
  //   );
  // }

  render() {
    // console.log(this.props.rolls.toString());

    // grab the id specifcally because it will get used a few times
    const id = this.props.id;

    // const draggableChild = React.Children.only(this.props.children);
    const children = React.Children.toArray(this.props.children)
      .filter((c) => c !== undefined);

    // put all of this widget's props into one object to be attached the the DOM
    const widgetProps = Object.assign({},
      this.props,
      {
        className: `${this.props.className} widget-ranfiltrator-widget`,
      });

    // build the roll buttons from the list of dice
    // const rollButtons = this.props.dice.map((d) =>
    //   this.diceButton(d, () => this.props.rollFunction(id, d)));

    // const ranfiltrateButton = this.props.dice.map(sides =>
    //   <RanfiltrateButton
    //     sides={sides}
    //     onClick={() => this.props.ranfiltrateFunction(this.props.id, sides)}
    //   />
    // );
   
    // return the widget!
    // widget has the properties from its parent and what it set itself
    // it also contains its roll buttons and reset button and the children
    // its parent gave it (react grid layout stuff, e.g. Resize Handle)
    //       {ranfiltrateButton} would go in here. 
    return (
      <div {...widgetProps}>
        {children}
        <Card>
          <CardHeader
            title="Ranfiltrator"
            />
          <CardText>
             Susie needs her swords back. It was stolen long ago from...
          </CardText>  
          <CardText>
             Susie needs her swords back. It was stolen long ago from...
          </CardText> 
          <CardText>
             Susie needs her swords back. It was stolen long ago from...
          </CardText> 
          <CardText>
             Susie needs her swords back. It was stolen long ago from...
          </CardText> 
          <RaisedButton label="Ranfiltrate" primary={true} 
            style={
              {
              padding: '10px',
              }}
            />
         </Card>
      </div>
    );
  }
}

// All the props this component will have, and their types
RanfiltratorWidget.propTypes = {
  // component props
  children: PropTypes.any,

  // widget props
  className: PropTypes.string,
  id: PropTypes.string.isRequired,

  // redux-content props
  asset: PropTypes.arrayOf(PropTypes.number),
  assetWidget: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),

  // redux-dispatch props
  //ranfiltrateFunction: PropTypes.func,
};

// connect RanfiltratorWidget to redux and export the connected thing as RanfiltratorWidget
export default connect(mapStateToProps, mapDispatchToProps)(RanfiltratorWidget);
