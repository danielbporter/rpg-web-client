import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class CampaignSelectDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Ember Shadows" />
          <MenuItem value={2} primaryText="Masks of Nyarlaethotep" />
          <MenuItem value={3} primaryText="The Rebellion Begins" />
          <MenuItem value={5} primaryText="New" />
        </DropDownMenu>
     </div>
    );
  }
}

CampaignSelectDropdown.propTypes = {
  onClick: PropTypes.func,
  sides: PropTypes.number.isRequired,
};
