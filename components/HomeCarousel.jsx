"use client"
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { MdTour } from 'react-icons/md';
const HomeBanner01 = '/Images/Banners/rajasthan-banner01.webp';
const HomeBanner02 = '/Images/Banners/agra-banner.webp';
const HomeBanner03 = '/Images/Banners/jaipur-banner.webp';
const HomeCarousel = () => {
    return (
        <div className="container-fluid home-banner px-0 bg-tertary-down">
            <Carousel fade pause={false} controls={false} interval={4000}>
                <Carousel.Item>
                    <Image src={HomeBanner01} alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Majestic Rajasthan</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={HomeBanner02} alt="Home Banner" width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Thrilling Adventures</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={HomeBanner03} alt="Home Banner" width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Cultural Splendor</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
