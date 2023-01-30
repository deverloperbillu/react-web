import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

export const Service = () => {
  return (
    <>
    <div class="home-service">
	<div class="container-fluid">
		<div class="custom-heading">
			<h2>Service</h2>
		</div>
        <ReactOwlCarousel className='service-slider owl-carousel owl-theme' items='3' autoplay loop center margin={60}>
            <div class="single-item">
                <div class="item">
                    <div class="thumb"><img src={service1} alt="service1" /></div>
                    <div class="info">
                        <h4>Installing the Gutters</h4>
                    </div>
                </div>
            </div>
            <div class="single-item">
					<div class="item">
						<div class="thumb"><img src={service2} alt="service3" /></div>
						<div class="info">
							<h4>Metal Roofing</h4>
						</div>
					</div>
				</div>
				<div class="single-item">
					<div class="item">
						<div class="thumb"><img src={service3} alt="service3" /></div>
						<div class="info">
							<h4>Roofing</h4>
						</div>
					</div>
				</div>
        </ReactOwlCarousel>
		<div class="sehedul-sec">
			<div class="sehedule-text">
				<h2>Schedule us Today</h2>
				<h4>FREE ESTIMATION</h4>
				<p>Got a roofing project? Book us &amp; get a free estimate &amp; inspection with us today.</p>
				<a href="/" class="custom-btn">call now</a>
			</div>
		</div>
	</div>
</div>
    </>
  )
}
export default Service