import React from 'react';
import AssetWidget from './AssetWidget';
import DiceWidget from './DiceWidget';
import CardFun from './CardFun';
//import headerNavToolbar from './core/headerNavToolbar'


// intentionally using different style from actiontypes
// to test differences

export const WidgetFactories = {
  AssetWidget: React.createFactory(AssetWidget),
  DiceWidget: React.createFactory(DiceWidget),
  CardFun: React.createFactory(CardFun),
  //headerNavToolbar: React.createFactory(headerNavToolbar),
};

// export {
//   AssetWidget,
// };
