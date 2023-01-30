import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

const Testimonial = () => {
  return (
    <>
    <div class="home-testimonial">
	<div class="container">
		<div class="custom-heading">
			<h2>Testimonials</h2>
		</div>
		<div class="testimonial-item">
			<ReactOwlCarousel className='testimonial-slider owl-carousel owl-theme' items='3' autoplay loop margin={15} dots={false} nav>
                <div class="single-item">
					<div class="item">
						<div class="info">
							<p>My home need it a new roof and I called USA ROOFING GROUP,  base on my friend Mr. Copney.  Walter came out and meet me He was on time, gave us a free estimate and inspection.  the job went great, on time, on budget, and very eficient, I will recommend  USA ROOFING GROUP.</p>
							<h2>Dean Taylor</h2>
						</div>
					</div>
				</div>
				<div class="single-item">
					<div class="item">
						<div class="info">
							<p>I need it a new roof, I called various roofing companies, my 2 estimate was from USA ROOFING GROUP, and absolutely happy with the service this company did, I highly recomded for all your roofing needs.  </p>
							<h2>Mike Henry</h2>
						</div>
					</div>
				</div>
				<div class="single-item">
					<div class="item">
						<div class="info">
							<p>I was in the market for a new roof I called USA ROOFING GROUP, I calles USA ROOFNG GROUP, i got the service and price no questions asked.</p>
							<h2>Burnie Boyde</h2>
						</div>
					</div>
				</div>
            </ReactOwlCarousel>
		</div>
	</div>
</div>
    </>
  )
}

export default Testimonial