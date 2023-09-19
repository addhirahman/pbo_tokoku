import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
  MobileOutlined,
  CoffeeOutlined,
  ShoppingCartOutlined, // Mengganti ikon "Shopping" dengan ikon keranjang belanja
  DownSquareOutlined,
} from '@ant-design/icons';

const Corosel = () => {
  const slidesData = [
    {
      id: 1,
      icon: (
        <a href="#handphone">
          <MobileOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
        </a>
      ), // Mobile phone icon
    },
    {
      id: 2,
      icon: (
        <a href="#coffee" >
          <CoffeeOutlined style={{ fontSize: '64px', color: '#ff4d4f' }} />
        </a>
      ), // Coffee cup icon
    },
    {
      id: 3,
      icon: (
        <a>
          <ShoppingCartOutlined style={{ fontSize: '64px', color: '#52c41a' }} />
        </a>
      ), // Shopping cart icon
    },
    {
      id: 4,
      icon: (
        <DownSquareOutlined style={{ fontSize: '64px', color: '#faad14' }} />
      ), // Pants icon
    },
  ];

  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border : 'solid black',
    width : '100px',
    height : '100px',
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
        className='p-12  '
      >
        {slidesData.map((slide) => (
          <SwiperSlide className='mt-10 mx-auto  ' key={slide.id}>
            <div className='mx-auto shadow-xl hover:mb-10 bg-slate-100 justify-center items-center w-24 h-24' >
              <div className=''>{slide.icon}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Corosel;
