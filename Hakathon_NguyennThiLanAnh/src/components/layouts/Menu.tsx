import React, { useState } from 'react'

export default function Menu() {
    const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <>
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
    </>
  )
}
