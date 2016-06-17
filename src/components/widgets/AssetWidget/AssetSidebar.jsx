import React, { PropTypes } from 'react';
import Thumbnail from './Thumbnail';

const AssetSidebar = (props) =>
  <div key={props.id}>
    <Thumbnail
      key={`${props.id}_bar_thumb`}
      id={props.id}
      width={props.width}
      height={props.width}
      assetType={props.assetType}
    />
    {/* Iterate through all buttons or whatever. */}
  </div>
;

AssetSidebar.propTypes = {
  assetType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
};

AssetSidebar.defaultProps = {
  width: 50,
};

export default AssetSidebar;
