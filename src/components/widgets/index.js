import React from 'react';
import AssetWidget from './AssetWidget';
import NewWidgetWidget from './NewWidgetWidget';
import DiceWidget from './DiceWidget';

// intentionally using different style from actiontypes
// to test differences

export const WidgetFactories = {
  AssetWidget: React.createFactory(AssetWidget),
  NewWidgetWidget: React.createFactory(NewWidgetWidget),
  DiceWidget: React.createFactory(DiceWidget),
};

// export {
//   AssetWidget,
// };