import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

//import { BrowserRouter as Router, Route, Switch } from "react-dom";

import profile from './profile.jpg';

import Navbar2 from './Navbar';
import { Navbar } from 'react-bootstrap';
//import { View} from "react-native";

function Home() {
	return (
		<div id="home" class="header">
			<head>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</head>
			<Navbar2 color="transparent"/>
			
				{/* <div class="top-header">
					
					<div class="top-nav">
						<div class="navigation">
							<div class="logo">
								<h1><a href="index.html"><span>R</span>RAMAN</a></h1>
							</div>
							<div class="navigation-right">
								<span class="menu"><img src={menu} alt=" " /></span>
								<nav class="nav-collapse collapse" id="link-effect-3">
									<ul class="nav navbar-nav">
										<li class="active"><Link data-hover="Home" to="/">Home</Link></li>
										<li><Link class="scroll" data-hover="About" to="#about">About</Link></li>
										<li><Link class="scroll" data-hover="Services" to="#services" >Services</Link></li>
										<li><Link class="scroll" data-hover="Experience" to="#work">Experience</Link></li>
										<li><Link class="scroll" data-hover="Portfolio" to="#port">Portfolio</Link></li>
										<li><a class="scroll" data-hover="Blog" to="#blogs">Blog</a></li>
										<li><Link class="scroll" data-hover="Contact" to="/contact">Contact</Link></li>
									</ul>
								</nav>

							</div>

						</div>
						
					</div>
					
				


				</div>
			</div>  */}

			<div className="container  banner-info" >
				<div className="row">
					<div className=" p-5 mx-auto col-sm-6 col-lg-6 text-white pop5">
						<h1 align="left" className="dialog">Hi !</h1>
						<h6 align="left">APP & WEB DEVELOPER</h6>
						<hr className="bg-white" />
						<table className="col-sm-6"  align="left">

							<tr  >

								<th ><b>NAME</b></th>
								<td>Rewati RAMAN PRASAD</td>

							</tr>
							<tr >

								<th><b>D.O.B</b></th>
								<td>31-07-1999</td>

							</tr>
							<tr >

								<th><b>PHONE </b></th>
								<td>+91 7250324730</td>

							</tr>
							<tr >

								<th><b>ADDRESS </b></th>
								<td >BB Colony, Patna, Bihar, India.</td>

							</tr>
							<tr >

								<th><b>E-MAIL</b></th>
								<td><a id="email" href="mailto:ramanprasad.0203@gmail.com"> ramanprasad.0203@gmail.com</a></td>
							</tr>

						</table>

					</div>

					<div className="p-5 col-sm-6 col-lg-6 pop3">
						<p>
							<img width="320" className="img-fluid " src={profile}  />
						</p>


					</div>
				</div>


			</div>

		</div>
	);
}

export default Home;
