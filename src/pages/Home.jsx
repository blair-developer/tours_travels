import React from 'react';
import { Container, Row,Col } from 'reactstrap';
import heroimg from '../assets/images/hero-img01.jpg';
import heroimg02 from '../assets/images/hero-img02.jpg';
import herovideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/subtitle';
import worldImg from './../assets/images/world.png';
import heroVideo from './../assets/images/hero-video.mp4';
import SearchBar from '../shared/searchBar';
import ServiceList from '../services/ServiceList';
import './../styles/home.css';
import FeaturedTourList from '../components/Featured-tours/featuredTourList';
import experienceImg from '../assets/images/experience.png';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return <><section>
      <Container>
         <Row>
            <Col lg='6'>
               <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before you go'}/>
                  <img src={worldImg} alt="" />
             </div>
                 <h1>Travelling opens the door to creating{" "} <span className='highlight'> memories</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a magni maxime consequatur aperiam quis animi, fugit pariatur debitis hic esse qui voluptatibus rem asperiores illum expedita incidunt laborum ipsam!
                </p>
               </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={heroimg} alt="" />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt="" controls/>
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-5">
                    <img src={heroimg02} alt="" />
                </div>
            </Col>
            <SearchBar/>
         </Row>
      </Container>
      </section>

      <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">what we serve</h5>
                    <h2 className="services__title">we offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
      </section>

<section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <Subtitle subtitle={'Explore'} />
                <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>

            <FeaturedTourList/>
        </Row>
    </Container>
</section>

<section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>We provide experience <br/> we will server you</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    <br/>Ut adipisci ipsa error eum facilis laudantium accusantium cupiditate? Sed, laborum earum? Consequatur eius corrupti temporibus mollitia obcaecati veniam laudantium laborum! Commodi.
                </p>
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                   <div className="counter__box">
                      <span>12K+</span>
                      <h6>Successful trip</h6>
                   </div>
                   <div className="counter__box">
                      <span>14</span>
                      <h6>Regular clients</h6>
                   </div>
                   <div className="counter__box">
                      <span>12</span>
                      <h6>Years experienced</h6>
                   </div>
                </div>
            </Col>
            <Col lg='6'>
                <div className="experience__img">
                    <img src={experienceImg} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
                <MasonryImagesGallery />
            </Col>
        </Row>
    </Container>
</section>
<section>
    <Container>
        <Row>
            <Col lg='12'>
               <Subtitle subtitle={'Fans Love'} />
               <h2 className="testimonial__title">
                   What our fans say abiut us
               </h2>
            </Col>
            <Col lg='12'>
                <Testimonial />
            </Col>
        </Row>
    </Container>
</section>
<NewsLetter />
      </>
}

export default Home
