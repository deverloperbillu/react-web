import React from 'react'
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import cover from '../assets/watch-video-cover.jpg';



const About = () => {
  return (
    <>
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
      </div><div class="watch-video">
              <figure><img src={cover} alt="watch-video-cover" /></figure>
              <a href="/" class="play-btn"><i className="fas fa-home"></i></a>
          </div>
          </>
  )
}

export default About