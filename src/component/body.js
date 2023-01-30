import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import slider from '../assets/slider.jpg';
import employee from '../assets/employee.png';
import scissor from '../assets/scissor.png';
import quality from '../assets/quality.png';
import rating from '../assets/rating.png';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import cover from '../assets/watch-video-cover.jpg';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'

const Body = () => {
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

<div class="home-about-sec">
          <div class="row">
              <div class="col-md-8">
                  <div class="about-text">
                      <h2>Welcome to USA Roofing Group</h2>
                      <p><strong>USA Roofing Group is a renowned roofing company that offers top-notch roof installation and removal services for all types of roofs.</strong></p>
                      <p>Walter Gonz founded the company in 2005 with an aim to make premium roofing solutions available to homeowners, constructors, contractors, builders, and engineers.</p>
                      <p>Our team is made up of highly skilled and trained professionals that stay up to date with the latest advancements in the roofing sector. We are dedicated to excellence in roofing, which is why we utilize top-of-the-line materials and leverage cutting-edge technologies.</p>
                      <a href="/" class="custom-btn">learn more</a>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="home-about-img">
                      <figure><img src={about1} alt="about1" /></figure>
                      <div class="second-img">
                          <figure><img src={about2} alt="about2" /></figure>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="third-img">
                      <figure><img src={about3} alt="about3" /></figure>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="fourth-img">
                      <figure><img src={about4} alt="about4" /></figure>
                  </div>
              </div>
          </div>
      </div>
        <div class="watch-video">
              <figure><img src={cover} alt="watch-video-cover" /></figure>
              <a href="/" class="play-btn"><i className="fas fa-home"></i></a>
        </div>

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

<div class="gallery-sec">
	<div class="container-fluid">
		<div class="custom-heading">
			<h2>Our Gallery</h2>
			<p>Our professional and certified staff has years of experience under their belts. Check out some of our latest projects below.</p>
		</div>
        <div className='gallery-item'>
            <ReactOwlCarousel className='gallery-slider owl-carousel owl-theme' items='3' autoplay loop margin={30} dots={false} >
                <div class="gallery-single-item">
                    <figure><a href="/"><img src={gallery1} alt="gallery1" /></a></figure>
                </div>
                <div class="gallery-single-item">
                    <figure><a href="/"><img src={gallery2} alt="gallery2" /></a></figure>
                </div>
                <div class="gallery-single-item">
                    <figure><a href="/"><img src={gallery3} alt="gallery3" /></a></figure>
                </div>
            </ReactOwlCarousel>
            <a href="/" class="custom-btn">view all projects</a>
        </div>
	</div>
</div>

<div class="home-contact">
	<div class="container">
		<div class="custom-heading">
			<h2>Send a Message</h2>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="location">
                    <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6530.035359768646!2d-80.792759!3d35.081291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854279e8863a289%3A0xaf0e9a40cf75180b!2s4820%20Truesdale%20Pl%2C%20Charlotte%2C%20NC%2028277!5e0!3m2!1sen!2sus!4v1673298678541!5m2!1sen!2sus' title="This is a unique title"></iframe>
				</div>
			</div>
			<div class="col-md-6">
				<div class="home-info">
				<p><strong>I am the voice of the streets. … I believe that we, every day, 24-7</strong></p>
				<form>
					<div class="row">
						<div class="col-md-6"><input type="text" name="username" placeholder="Name*" /></div>
						<div class="col-md-6"><input type="email" name="email" placeholder="Email*" /></div>
						<div class="col-md-6"><input type="password" name="password" placeholder="Password*" /></div>
						<div class="col-md-6"><input type="tel" placeholder="Phone*" /></div>
						<div class="col-md-12"><textarea placeholder="Your Message*" ></textarea></div>
						<div class="col-md-12"><button type="submit" class="custom-btn">Send Message</button></div>
					</div>
				</form>	
				</div>
			</div>
		</div>
	</div>
</div>

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

export default Body