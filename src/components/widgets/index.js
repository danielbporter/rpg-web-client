import React from 'react';
import AssetWidget from './AssetWidget';
import DiceWidget from './DiceWidget';
import CardFun from './CardFun';
import FABWidget from './FABWidget';


// intentionally using different style from actiontypes
// to test differences

export const WidgetFactories = {
  AssetWidget: React.createFactory(AssetWidget),
  FABWidget: React.createFactory(FABWidget),
  DiceWidget: React.createFactory(DiceWidget),
  CardFun: React.createFactory(CardFun),
};

// export {
//   AssetWidget,
// };
