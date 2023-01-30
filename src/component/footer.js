import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

const Footer = () => {
  return (
   <>
<footer class="footer">
    <div class="footer-slider-ec">
        <ReactOwlCarousel className='footer-slider owl-carousel owl-theme' loop items='1' autoPlay={true} dots={false}>
            <div class="footer-slider-txt">
                <h2>usaroofing</h2>
            </div>
            <div class="footer-slider-txt">
                <h2>usaroofing</h2>
            </div>
        </ReactOwlCarousel>
    </div>
<div className='mid-footer'>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div className='col-md-8'>
						<div className='footer-info'>
							<ul>
								<li><a href="tel:(704) 738-8684">(704) 738-8684</a></li>
								<li>4820 Truesdale Pl, Charlotte, NC 28277, USA</li>
							</ul>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='custom-btn footer-btn'>
							<a href="/">GET A QUOTE</a>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-md-6">
				<div class="footer-info-text">
					<p>We are a USA-based roofing company known for offering top-notch roof installation and removal services for roofs of all types.</p>
					<div class="bottem-text">
					<p>© <a href="https://www.anaxdesigns.com/" target="_blank" rel="noreferrer">Anax Designs</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</footer>
   </>
  )
}

export default Footer