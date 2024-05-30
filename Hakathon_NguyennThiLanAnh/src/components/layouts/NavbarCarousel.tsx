import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function NavbarCarousel() {
  return (
    <>
        <div className='flex justify-center'>
            <Carousel className='w-9/12 py-8'>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-1.jpg?raw=true" alt="Banner 1" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-2.jpg?raw=true" alt="Banner 2" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-3.jpg?raw=true" alt="Banner 3" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-4.jpg?raw=true" alt="Banner 4" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-5.jpg?raw=true" alt="Banner 5" />
            </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}
