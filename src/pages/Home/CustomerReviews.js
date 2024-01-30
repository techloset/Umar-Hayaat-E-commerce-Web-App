import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";

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

// import cameraImage from "../../assets/images/CameraImageForSlider.jpg";
// import gameControler from "../../assets/images/GameControler.jpg";
// import speakers from "../../assets/images/SpeakersImage.jpg";

import CustomerReviewCard from "../../components/CustomerReviewCard";
import yellowBg from "../../assets/customerImages/yellowBg.png";
import blueBg from "../../assets/customerImages/blueBg.png";
import skinBg from "../../assets/customerImages/skinBg.png";

export default function CustomerReviews() {
  return (
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
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
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
            <CustomerReviewCard
              customerImage={blueBg}
              customerName={"Savannah Nguyen"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerReviewCard
              customerImage={yellowBg}
              customerName={"Esther Howard"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerReviewCard
              customerImage={skinBg}
              customerName={"Mr Donal"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <CustomerReviewCard
              customerImage={blueBg}
              customerName={"Savannah Nguyen"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerReviewCard
              customerImage={yellowBg}
              customerName={"Esther Howard"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerReviewCard
              customerImage={skinBg}
              customerName={"Mr Donal"}
            />
          </SwiperSlide>
          {/* ..... */}

     
        </Swiper>
      </div>
    </div>
  );
}
