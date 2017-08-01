import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NAV_MENU_TOGGLE from 'actions/ActionTypes';
import { connect } from 'react-redux';
import {
  //actions for drawer
} from '../../../actions/ActionCreators';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import NestedList from 'material-ui';

// import SumDisplay from './SumDisplay';
// import ResetButton from './ResetButton';

// the information this component requires from redux

// export default class drawer extends React.Component {

function mapStateToProps(state) {
  // empty because this component gets its information from the dashboard-widget interaction
  return {};
}

// the actions this component will perform, passed in by redux
function mapDispatchToProps(dispatch) {
  return {

    // @Peter drawer functions (this is needed)
    // rollFunction: (id, sides) => dispatch(diceWidgetRoll(id, sides)),
    // resetFunction: (id) => dispatch(diceWidgetReset(id)),
  };
}

// declare a new component, DiceWidget
class Drawer extends Component {

  // build a diceButton with some number of sides
  // diceButton(sides, rollFunc) {
  //   return (
  //     <div className={'dice-widget-roll-button'} onClick={rollFunc}>
  //       {sides}
  //     </div>
  //   );
  // }

  // build a reset button
  resetButton(resetFunc) {
    return (
      <div className={'dice-widget-reset-button'} onClick={resetFunc}>
        Reset
      </div>
    );
  }

  // build the sum display
  sumDisplay(sumValue) {
    // The dice widget will not show '0' if no dice have been rolled,
    // so ' ' is the default value (since it would display as whitespace)
    let displayValue = '\u00a0';

    // if the sum is greater than 0, dice have been rolled, and the sum should be displayed
    if (sumValue > 0) {
      displayValue = sumValue;
    }

    return (
      <div className={'dice-widget-sum-display'}>
        {displayValue}
      </div>
    );
  }

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
        className: `${this.props.className} widget dice-widget`,
      });

    // build the roll buttons from the list of dice
    // const rollButtons = this.props.dice.map((d) =>
    //   this.diceButton(d, () => this.props.rollFunction(id, d)));

    const rollButtons = this.props.dice.map(sides =>
      <DiceButton
        sides={sides}
        onClick={() => this.props.rollFunction(this.props.id, sides)}
      />
    );


    const sumDisplay = this.sumDisplay(this.props.sum);

    // build the reset button
    const resetButton = this.resetButton(() => this.props.resetFunction(id));

    // return the widget!
    // widget has the properties from its parent and what it set itself
    // it also contains its roll buttons and reset button and the children
    // its parent gave it (react grid layout stuff, e.g. Resize Handle)
    return (
      <div {...widgetProps}>
        <Card>
          <CardHeader
            title="Dice"
            />
          <CardText>
             Roll some dice
          </CardText>  
           <RaisedButton label="Roll" 
            style={
              {
              padding: '10px',
              }}
            />
         </Card>
        {rollButtons}
        {sumDisplay}
        {resetButton}
        {children}
      </div>
    );
  }
}

// All the props this component will have, and their types
Drawer.propTypes = {
  // component props
  children: PropTypes.any,
  className: PropTypes.string,
  open: PropTypes.bool

  // widget props
  className: PropTypes.string,
  id: PropTypes.string.isRequired,

  // redux-content props
  dice: PropTypes.arrayOf(PropTypes.number),
  rolls: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  sum: PropTypes.number,

  // redux-dispatch props
  resetFunction: PropTypes.func,
  rollFunction: PropTypes.func,

};

};

// connect DiceWidget to redux and export the connected thing as DiceWidget
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);


class Drawer extends Component {
    constructor(props) {
    super(props);
    this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
     return (
      <div className="Drawer">
          <Drawer open={this.state.open}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    </div>
         );
    }
}


