import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import "./styles/Gallery.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const Gallery2023 = () => {
  const text = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };
  const Head = styled.div`
    font-size: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    /* margin: 4rem; */
    text-align: center;
    @media (max-width: 600px) {
      font-size: 10vw;
    }
  `;
  const GallerHeader = styled.div`
    height: 100%;
    width: 100vw;
  `;
  return (
    <GallerHeader>
      <Head
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        variants={text}
      >
        <div className="GalleryHeadTxt">Memories </div>
      </Head>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
      >
         <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/1.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/2.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/3.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/4.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/5.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/6.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/7.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/8.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/9.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/10.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/11.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/12.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/13.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/14.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/15.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/16.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/17.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/18.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/19.webp" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img alt="gallery_img" src="/GalleryAssets/2023/20.webp" />
        </SwiperSlide>
      </Swiper>
    </GallerHeader>
  );
};

export default Gallery2023;