"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

export const Carousels1 = () => {
  return (
    <div className="container relative">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          enabled: true,
          nextEl: "#nextBtn",
          prevEl: "#prevBtn",
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <div>
            <div className="h-[600px] bg-[#ccc] rounded-xl overflow-hidden relative">
              <Image className="object-cover w-full h-full" src="/server-woman.jpeg" alt="" width={1216} height={600} />
              <div className="bg-[#141624]/40 absolute inset-0" />
              <div className="p-10 bg-white rounded-xl w-[600px] absolute left-3 bottom-3">
                <div>Technology</div>
                <div>Grid system for better Design User Interface</div>
                <div>August 20, 2022</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-[600px] bg-[#ccc] rounded-xl overflow-hidden relative">
              <Image className="object-cover w-full h-full" src="/server-woman.jpeg" alt="" width={1216} height={600} />
              <div className="bg-[#141624]/40 absolute inset-0" />
              <div className="p-10 bg-white rounded-xl w-[600px] absolute left-3 bottom-3">
                <div>Technology</div>
                <div>Grid system for better Design User Interface</div>
                <div>August 20, 2022</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        id="prevBtn"
        className={
          "cursor-pointer hover:opacity-50 absolute -bottom-12 right-12 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
        }
      >
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 16L1 8.5L8.5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        id="nextBtn"
        className={
          "cursor-pointer hover:opacity-50 absolute -bottom-12 right-0 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
        }
      >
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L8.5 8.5L1 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};