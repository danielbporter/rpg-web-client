import Immutable from 'immutable';
import {
	 NAV_MENU_TOGGLE,
 	 NAV_MENU_CLOSE,
   ACCOUNT_POPOVER_MENU,
  //account button 
  //other stuff button
} from '../actions/ActionTypes';


const initialState = Immutable.fromJS({
  drawer: {
    id:'toggle',
    type:'core',
    state: {open:false},
    drawer: {open:false},
         }
});

// this is where the drawer opens... but how? 

 function NavMenuToggle() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };



  //   state.updateIn([action.id, 'state'], (state) =>
  //       state
  //         .update(state = {open:true}, action)
  //    );
  // }
//     this.updateIn([action.state, 'toggle'], 
//     this.setState([action.id, 'state'],
//    (action) =>  state.update('drawer', (action) => state.closed())
//   );
// }  

 // state.updateIn([action.state, 'toggle'], 
 //    this.state.bind({ open: !this.state.open });
// function NavMenuClose(state, action) {
//   return state.updateIn([action.id, 'state'], (state) =>
//     state.update('drawer', (state) => state.closed())
//   );
// }



function AccountPopoverMenu(state, action) {
  return state;
}

export default function (state = initialState, action) {
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case NAV_MENU_TOGGLE:
      return NavMenuToggle(state, action);
    // case NAV_MENU_CLOSE:
    //   return NavMenuClose(state, action);
    // case ACCOUNT_POPOVER_MENU:
    //   return AccountPopoverMenu(state, action);
    default:
      return state;
  }
}

   