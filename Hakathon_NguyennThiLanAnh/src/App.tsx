import React, { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';

export default function App() {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      <div className='w-full h-20 bg-red-500 flex justify-around items-center'>
        <h1 className='font-bold text-3xl text-white'>Rikkei_shop</h1>
        <div className='flex gap-1'>
          <input className='w-96 h-8' type="text" placeholder='Nhập để tìm kiếm' />
          <button className='w-10 h-8 bg-white'>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className='flex space-x-8 text-white gap-10 font-medium'>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>Giỏ hàng</span>
          </div>
          <span>Đăng nhập</span>
          <span>Đăng kí</span>
        </div>
      </div>
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
      <div className='flex'>
        <div className='px-4'>
          <div className='flex items-center w-72 h-10 bg-gray-50'>
            <span className="material-symbols-outlined">list</span>
            <span>Danh mục sản phẩm</span>
          </div>
          <div className='w-72 h-70 bg-gray-50 mt-1 flex flex-col p-1'>
            <div className='flex items-center cursor-pointer' onClick={() => setShowOptions(!showOptions)}>
              <span className="material-symbols-outlined">arrow_left</span>
              <span className='ml-2 text-red-500'>Tất cả các sản phẩm</span>
            </div>
            {showOptions && (
              <ul className='mt-2 px-4'>
                <li>Thiết bị điện tử</li>
                <li>Sách</li>
                <li>Đồ tiêu dùng</li>
                <li>Thời trang</li>
              </ul>
            )}
          </div>
        </div>
        <div className='w-[100%] bg-gray-50'>
            <div className='flex gap-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone6.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 6</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    29.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>30 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone6plus.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 6 Plus</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    3.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>500 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 7</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>500 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone7.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 7 Plus</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 8</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='flex gap-3 py-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone8plus.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 8 Plus</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonex.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone X</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexr.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone Xr</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexsmax.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone Xs Max</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexs.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone Xs</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='flex gap-3 py-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12pro.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 12 Pro</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphone12promax.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Iphone 12 Promax</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    35.000.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/HoangTuBe.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Hoàng tử bé</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    53.700đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MuonKiepNhanSinh.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Muôn kiếp nhân sinh</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    109.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThietBiDienTu/iphonexs.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Nhà giả kim</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    55.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
            </div>


            <div className='flex gap-3 py-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/ToiTuHoc.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Tôi tự học</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    32.900đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Apple</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/DacNhanTam.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Đắc nhân tâm</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    56.100đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/MatBiec.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Mắc biếc</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    76.400đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=truehttps://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Không gia đình</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    75.400đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/YourName.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Your name</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    45.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='flex gap-3 py-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan1.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Quần nỉ họa tiết</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    2.299.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>246 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan2.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-base'>Quần nỉ đen sọc trắng</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    1.759.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao1.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Áo phông</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    1.479.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan3.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Quần nỉ Jorden</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    1.919.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao2.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Áo phông</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    819.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className='flex gap-3 py-3'>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan6.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Quần đùi</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    659.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/quan4.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Quần nỉ xám</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    1.019.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/ThoiTrang/ao6.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Áo khoác</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    1.739.00đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=truehttps://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/Sach/KhongGiaDinh.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Quần đùi</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    659.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span>Nike</span>
                    <span>Hà nội</span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/products/DoTieuDung/comfort.jpg?raw=true" />
                <Card.Body>
                  <Card.Title className='text-lg'>Nước xả vải comfort</Card.Title>
                  <Card.Text className='text-center text-red-500'>
                    145.000đ
                  </Card.Text>
                  <div className='flex justify-between'>
                    <span className="material-symbols-outlined text-blue-500">favorite</span>
                    <span>48 đã bán</span>
                  </div>
                  <div className='flex justify-between text-xs'>
                    <span></span>
                    <span>Hồ Chí Minh</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
      
    </>
  );
}
