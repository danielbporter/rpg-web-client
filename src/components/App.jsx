import React, { Component } from 'react';
import FAB from './core/FAB';
import Dashboard from './Dashboard';
import headerNavtoolbar from './core/headerNavtoolbar';
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
    	<div className="wrapper">
	      <header class="header">
	  	     <div class="toptoolbar">
	      		<div class="header">
	      		</div>
	      	 </div>
	     	 </header>
	      		<headerNavToolbar/>
	      <Dashboard/>
	      <div class="fab">
	      	<FAB className="fab"/> 
	      </div>
	    </div>
    );
  }
}

export default App;


//Some more bad code <div class="headerNavToolbar">
		     //<headerNavtoolbar className="toptoolbar">
	      		//<div className="header">
	      		//</div>
	      	   //</headerNavtoolbar>