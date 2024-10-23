"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "cursor-pointer hover:opacity-50 absolute -bottom-12 right-0 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
      }
      onClick={onClick}
    >
      <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8.5 8.5L1 16" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "cursor-pointer hover:opacity-50 absolute -bottom-12 right-12 w-10 h-10 rounded-md border-[#696A75] border flex justify-center items-center"
      }
      onClick={onClick}
    >
      <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 16L1 8.5L8.5 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export const Carousels = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="container relative">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};