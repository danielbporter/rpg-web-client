import React, { PropTypes } from 'react';

import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';

const CardFun = () =>
  <Card /* onExpandChange={() => console.log('expand change.')} */>
    <CardHeader
      title="Example Card"
      subtitle="An additional sentence displayed in the 'folded' card."
      actAsExpander
      showExpandableButton
    />
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus euismod arcu at faucibus. Praesent luctus est sit amet orci sollicitudin tincidunt. Mauris consectetur diam ac nunc auctor, sit amet elementum enim lobortis. Duis eu libero feugiat, volutpat enim ut, varius erat. Phasellus venenatis felis et consequat viverra. Donec suscipit tempus nulla malesuada mattis. Cras quam justo, vestibulum at mauris eu, egestas lobortis tortor. Cras ac vulputate massa, sed ornare nisi. Aenean tincidunt risus auctor, gravida leo sed, ornare quam. Proin malesuada imperdiet elit in semper. Integer vitae tellus ultrices, tempus nisi in, porttitor augue. Vestibulum vitae eleifend elit, et.
    </CardText>
  </Card>
;

CardFun.propTypes = {

};

export default CardFun;

