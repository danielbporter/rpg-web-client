import React, { Component } from 'react';
import FAB from './core/FAB';
import Dashboard from './Dashboard';
import headerNavtoolbar from './core/headerNavtoolbar';
import AppBar from './core/AppBar';
// import AssetWidget from './widgets/AssetWidget';
// only the 
// import * as widgets from './widgets';
// console.log(widgets);
// console.log(widgets['AssetWidget']);
// export default () =>
//   <Dashboard />;

// console.log(AssetWidget);

// PETER NOTES: Where should the fab go? What level? Here or in dashboard.jsx. 

class App extends Component {
  render() {
    return (
    	<div class="wrapper ">
	      <nav id="toptoolbar" class= "headerNavtoolbar">
	      		<headerNavtoolbar className="headerNavtoolbar"/>
	      			</nav>
	      <nav id="menu" class="menu-wrapper">
	      		<div class="scroller">
	      			<AppBar/> 
		      		</div>
	      		</nav>
	      <Dashboard/>
	      <div id="FAB" class="FAB">
	      			<FAB/> 
	      		</div>
	     </div>    
    );
  }
}

export default App;

//appBar for the nav 

