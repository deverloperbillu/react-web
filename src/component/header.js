import React from 'react'
import logo from '../assets/mainlogo.png';
import bar from '../assets/bar.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <> 
<header class="header">
	<div class="row">
		<div class="col-md-4">
			<div class="get-quote">
				<a href="/">get a quote</a>
			</div>
		</div>
		<div class="col-md-4">
			<div class="site-logo">
				<a href="/"><img src={logo} alt="Site-Logo"/></a>
			</div>
		</div>
		<div class="col-md-4">
			<div class="side-menu">
				<Link to={'/'} class="menu-btn"><img src={bar} alt="Side-Bar" /></Link>
				{/* <a href="/" class="menu-btn"><img src={bar} alt="Side-Bar" /></a> */}
			</div>
		</div>
	</div>
</header>

<div class="siderbar">		
	<nav class="navbar navbar-expand-md navbar-light">
		<div class="siderbar-logo">
			<a class="navbar-brand" href="/">
				<img src={logo} alt="Logo" />
			</a>
			<a href="/" class="btn-close"><i class="fa fa-times"></i></a>
		</div>
		
		<div class="siderbar-menu">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/">Services</a></li>
				<li><a href="/">Training</a></li>
				<li><a href="/">Clients</a></li>
				<li><a href="/">Contact</a></li>
			</ul>
		</div>
	</nav>
</div>	
   </>
  )
}

export default Header