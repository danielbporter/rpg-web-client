import React from 'react';
import RanfiltratorWidget from './RanfiltratorWidget';
import AssetWidget from './AssetWidget';
import DiceWidget from './DiceWidget';
import CardFun from './AssetWidget/CardFun';


// intentionally using different style from actiontypes
// to test differences

export const WidgetFactories = {
  AssetWidget: React.createFactory(AssetWidget),
  DiceWidget: React.createFactory(DiceWidget),
  CardFun: React.createFactory(CardFun),
  RanfiltratorWidget: React.createFactory(RanfiltratorWidget),
};

// export {
//   AssetWidget,
// };
