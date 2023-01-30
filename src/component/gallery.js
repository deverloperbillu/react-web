import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'

const Gallery = () => {
  return (
    <>
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
    </>
  )
}

export default Gallery