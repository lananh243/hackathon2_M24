import React from 'react'

export default function Header() {
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
    </>
  )
}
