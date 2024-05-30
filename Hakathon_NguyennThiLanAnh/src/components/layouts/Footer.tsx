import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='flex justify-around w-[100%] h-[215px] bg-gray-200'>
            <div className='pt-5'>
            <h1 className='text-xl font-bold' >CHĂM SÓC KHÁCH HÀNG</h1>
            <br />
            <p className='text-lg font-medium'>Trung tâm trợ giúp</p>
            <p className='text-lg font-medium'>Hướng dẫn mua hàng</p>
            </div>
            <div className='pt-5'>
            <h1 className='text-xl font-bold'>GIỚI THIỆU</h1>
            <br />
            <p className='text-lg font-medium'>Điều khoản</p>
            <p className='text-lg font-medium'>Chính sách bảo mật</p>
            <p className='text-lg font-medium'>Tuyển dụng</p>
            </div>
            <div className='pt-5'>
            <h1 className='text-xl font-bold'>DANH MỤC SẢN PHẨM</h1>
            <br />
            <p className='text-lg font-medium'>Thời trang</p>
            <p className='text-lg font-medium'>Đồ tiêu dùng</p>
            <p className='text-lg font-medium'>Thiết bị điện tử</p>
            <p className='text-lg font-medium'>Sách</p>
            </div>
            <div className='pt-5'>
            <h1 className='text-xl font-bold'>THEO DÕI CHÚNG TÔI</h1>
            <br />
            <i className="fa-brands fa-facebook "></i>
            <span className='m-2 text-lg font-medium'>Facebook</span>
            <br />
            <i className="fa-brands fa-instagram"></i>
            <span className='m-2 text-lg font-medium'>Instagram</span>
            <br />
            <i className="fa-brands fa-twitter"></i>
            <span className='m-2 text-lg font-medium'>Twitter</span>
            </div>
            <div className='pt-5'>
            <h1 className='text-xl font-bold'>ĐỘI NGŨ PHÁT TRIỂN</h1>
            <br />
            <p className='text-lg font-medium text-red-500'>Nguyễn Thị Lan Anh</p>
            </div>
        </div>
    </>
  )
}
