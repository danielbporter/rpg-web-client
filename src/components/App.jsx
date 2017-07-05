import React, { Component } from 'react';
import FAB from './core/FAB';
import Dashboard from './Dashboard';
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
    	<div>
	      <Dashboard />
	      <FAB class="fab"/> 
	   </div> 
    );
  }
}

export default App;
