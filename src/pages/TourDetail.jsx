import React, { useRef, useState } from 'react';
import '../styles/tour-detail.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/NewsLetter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const TourDetail = () => {
    const { id } = useParams();
    const reviewsMsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);
    // Fetch tour data
    const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);

    // Check if tour is undefined before destructuring
    if (!tour) {
        return <div>Loading...</div>
    }

    const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);
    const options = { day: "numeric", month: "long", year: "numeric" };

    const submitHandler = e => {
        e.preventDefault();
        const reviewText = reviewsMsgRef.current.value;
        alert(`${reviewText}.${tourRating}`);
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />
                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='tour__rating d-flex align-items-center gap-1'>
                                            <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i> {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                                        </span>
                                        <span>
                                            <i className='ri-map-pin-user-fill'></i> {address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className='ri-map-pin-2-line'></i>{city}</span>
                                        <span><i className='ri-money-dollar-circle-line'></i>${price} / per person</span>
                                        <span><i className='ri-map-pin-time-line'></i>{distance}Km</span>
                                        <span><i className='ri-group-line'></i>{maxGroupSize} people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                            <span onClick={() => setTourRating(1)}>1<i className='ri-star-s-fill'></i></span>
                                            <span onClick={() => setTourRating(2)} >2<i className='ri-star-s-fill'></i></span>
                                            <span onClick={() => setTourRating(3)}>3<i className='ri-star-s-fill'></i></span>
                                            <span onClick={() => setTourRating(4)}>4<i className='ri-star-s-fill'></i></span>
                                            <span onClick={() => setTourRating(5)}>5<i className='ri-star-s-fill'></i></span>
                                        </div>
                                        <div className="review__input">
                                            <input type="text" ref={reviewsMsgRef} placeholder='share your thoughts' required />
                                            <button className="btn primary_btn text-white" type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className='user__reviews'>
                                        {
                                            reviews?.map(review => (
                                                <div className="review__item">
                                                    <img src={avatar} alt="" />
                                                    <div className="w-100">
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>blair</h5>
                                                                <p>{new Date('01-04-2024').toLocaleDateString('en-KE', options)}</p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5<i className='ri-star-s-fill'></i>
                                                            </span>
                                                        </div>
                                                        <h6>Amazing tour</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <NewsLetter />
        </>
    );
}

export default TourDetail;
