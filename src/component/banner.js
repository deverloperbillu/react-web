import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import slider from '../assets/slider.jpg';
import employee from '../assets/employee.png';
import scissor from '../assets/scissor.png';
import quality from '../assets/quality.png';
import rating from '../assets/rating.png';

const Banner = () => {
  return (
    <>
    <ReactOwlCarousel className='banner-slider owl-carousel owl-theme' items={1} loop={true} autoplay={true} dots={false}>
        <div class="main-slider">
            <figure><img src={slider} alt="Slider" /></figure>
            <div className="slider-content">
                <p><strong>roofers you can trust</strong></p>
				<h1>premium roofing<br /> solutions</h1>
				<p>we deliver roofing solutions beyond comparison<br /> operating since 2005.</p>
            </div>
        </div>
		<div class="main-slider">
            <figure><img src={slider} alt="Slider" /></figure>
            <div className="slider-content">
                <p><strong>roofers you can trust</strong></p>
				<h1>premium roofing<br /> solutions</h1>
				<p>we deliver roofing solutions beyond comparison<br /> operating since 2005.</p>
            </div>
        </div>
    </ReactOwlCarousel>
    <div class="experiance-sec">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3">
				<div class="experiance-box">
					<div class="experiance-img">
						<figure><img src={employee} alt="employee" /></figure>
					</div>
					<div class="experiance-content">
						<h5>CERTIFIED ROOFERS</h5>
						<p>Executive Team</p>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="experiance-box">
					<div class="experiance-img">
						<figure><img src={scissor} alt="scissor" /></figure>
					</div>
					<div class="experiance-content">
						<h5>CUTTING-EDGE TOOLS</h5>
						<p>Destination</p>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="experiance-box">
					<div class="experiance-img">
						<figure><img src={quality} alt="quality" /></figure>
					</div>
					<div class="experiance-content">
						<h5>HIGH-QUALITY MATERIALS</h5>
						<p>Quality Services</p>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="experiance-box">
					<div class="experiance-img">
						<figure><img src={rating} alt="rating" /></figure>
					</div>
					<div class="experiance-content">
						<h5>100% SATISFACTION</h5>
						<p>Customers 100%</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Banner