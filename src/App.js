import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Home";
import Contact from "./Contact";
import Test from"./Test";


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
	
  return (
    <Router>
	<div>
		<Switch>
			<Route exact path="/Portfolio" component={Home}/>
			<Route exact path="/Contact" >
				<Contact/>
				</Route>
			<Route exact path="/Test" component={Test}/>
			<Route component={Home}/>
		</Switch>
	</div>
	</Router>
	
  );
		
}

export default App;
