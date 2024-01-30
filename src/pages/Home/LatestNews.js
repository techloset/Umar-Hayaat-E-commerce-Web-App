import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blog1 from "../../assets/LatestNewsImages/Blog-1_540x490_crop_center 1.png";
import blog2 from "../../assets/LatestNewsImages/Blog-2_540x490_crop_center 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/grid";

// import required modules
import {
  Grid,
  Parallax,
  Pagination,
  // Navigation,
  // Scrollbar,
  // A11y,
} from "swiper/modules";
import LatestNewsCard from "../../components/LatestNewsCard";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="mb-[-30px] md:mb-[60px]">
      {/* Navbar */}
      <div className="flex justify-between items-center mx-[15px] mb-[-20px]">
        <div>
          <h4 className="text-[16px] font-extrabold text-[#1B5A7D]">
            Latest news
          </h4>
        </div>
        <div>
          <Link className="lowBrightness text-[14px] font-medium border border-solid border-[#1B5A7D] rounded-full px-[15px] py-[3px] hover:bg-[#1B5A7D] hover:text-[#fff] text-[#1B5A7D]">
            View all
          </Link>
        </div>
      </div>

      {/* Blogs */}
      <div>
        <div className="mt-[50px]  w-full">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#EDA415",
              paddingBottom: "60px",
            }}
            // slidesPerView={4}
            grid={{
              fill: "row",
              rows: 1,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 1,
              },

              992: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={20}
            speed={1000}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Grid, Parallax, Pagination]}
            className="mySwiper "
          >
            <div
              slot="container-start"
              className="parallax-bg"
              // style={{
              //   'background-image':
              //     'url(https://swiperjs.com/demos/images/nature-1.jpg)',
              // }}
              data-swiper-parallax="-23%"
            ></div>

            {/* ..... */}

            <SwiperSlide>
              <LatestNewsCard blogImage={blog1} />
            </SwiperSlide>
            <SwiperSlide>
              <LatestNewsCard blogImage={blog2} />
            </SwiperSlide>

            <SwiperSlide>
              <LatestNewsCard blogImage={blog1} />
            </SwiperSlide>
            <SwiperSlide>
              <LatestNewsCard blogImage={blog2} />
            </SwiperSlide>

            <SwiperSlide>
              <LatestNewsCard blogImage={blog1} />
            </SwiperSlide>
            <SwiperSlide>
              <LatestNewsCard blogImage={blog2} />
            </SwiperSlide>

            {/* ..... */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
