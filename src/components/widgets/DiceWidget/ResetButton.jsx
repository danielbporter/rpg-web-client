import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ResetButton = (props) =>
    <RaisedButton className={'dice-widget-reset-button'} onClick={props.onClick} label="Reset" 
            style={
              {
              padding: '10px',
              float: 'right',
              }}
            />;


ResetButton.propTypes = {
  onClick: PropTypes.func,
};

export default ResetButton;
