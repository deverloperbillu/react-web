import React from 'react'
import logo from '../assets/mainlogo.png';
import bar from '../assets/bar.png';
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
				<a href="/" class="menu-btn"><img src={bar} alt="Side-Bar" /></a>
			</div>
		</div>
	</div>
</header>
   </>
  )
}

export default Header