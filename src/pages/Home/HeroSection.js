import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import {
  Parallax,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

import cameraImage from "../../assets/images/CameraImageForSlider.jpg";
import gameControler from "../../assets/images/GameControler.jpg";
import speakers from "../../assets/images/SpeakersImage.jpg";
// import HeroSectionCard from "../../components/HeroSectionCard";
import { FetchDataContext } from "../../store/FetchDataContext";
// import speaker from "../../assets/images/speakers.jpg";

export default function HeroSection() {
  const { fetchedProducts } = useContext(FetchDataContext);
  // console.log("fetchedProducts", fetchedProducts);

  const electronicProducts = fetchedProducts.filter((product) => {
    if (product.category === "electronics") {
      return product;
    }
  });
  // console.log('electronicProducts', electronicProducts)
  return (
    <>
      <div className="mt-[40px]  ">
        {/* Main landing page */}
        <div className="heroSecSwipper">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#EDA415",
            }}
            speed={1000}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Parallax, Pagination]}
            className="mySwiper"
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
            {/* Camera */}
            <SwiperSlide>
              {/* Jab bhi flexbox ki properties apply karni ho tou flex property dena lazmi ha baysahak direction koi bhi deni ho */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full md:mb-[40px] w-full lg:px-[50px]">
                {/* Buttons Section */}
                <div className=" flex flex-col justify-center mt-[20px] md:mt-[0px] mb-[70px] md:mb-[0px]  items-center h-full  py-[8px] lg:p-[15px]">
                  <div className="mb-[20px] text-start  lg:ml-[-55px]">
                    <h2 className="text-[#1B5A7D] font-extrabold  text-[24px] md:text-[30px] lg:text-[43px]">
                      Canon <br className="hidden lg:block" /> Camera{" "}
                    </h2>
                    {/* <h2 className="text-[#1B5A7D] font-extrabold text-[43px]">
                    Camera{" "}
                  </h2> */}
                  </div>

                  <div className="lg:flex md:gap-[21px] justify-center">
                    <button className="bg-[#EDA415] mb-[15px] lg:mb-0 w-full lg:w-auto py-[8px] px-[8px] md:py-[10px] md:px-[15px] text-[16px] text-[#fff] rounded-[10px]">
                      Shop now
                    </button>
                    <button className="outline outline-[#316887] w-full lg:w-auto outline-offset-0 py-[7px]  md:py-[7px] md:px-[15px] text-[16px] px-[15px] hover:brightness-50 text-[#316887] rounded-[10px]">
                      View more
                    </button>
                  </div>
                </div>

                {/* Img section */}
                <div className="flex  items-end lg:mr-[20px]  ">
                  {/* 1 */}
                  <div className="w-[200px] h-[200px] md:w-[250px]  md:h-full">
                    <img src={cameraImage} alt="Camera Image" />
                  </div>

                  {/* 2 */}
                  <div className="circleWithCamera w-[80px] h-[80px] md:w-[100px] md:h-[100px] ml-[-70px]">
                    <p className="textInCircle ">
                      only <br /> $89
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Speakers */}
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full md:mb-[40px] w-full lg:px-[50px]">
                {/* Buttons Section */}
                <div className=" flex flex-col justify-center mt-[20px] md:mt-[0px] mb-[70px] md:mb-[0px]  items-center h-full  py-[8px] lg:p-[15px]">
                  <div className="mb-[20px] text-start  lg:ml-[-55px]">
                    <h2 className="text-[#1B5A7D] font-extrabold  text-[24px] md:text-[30px] lg:text-[43px]">
                      Electon <br className="hidden lg:block" /> Speakers{" "}
                    </h2>
                    {/* <h2 className="text-[#1B5A7D] font-extrabold text-[43px]">
                    Camera{" "}
                  </h2> */}
                  </div>

                  <div className="lg:flex md:gap-[21px] justify-center">
                    <button className="bg-[#EDA415] mb-[15px] lg:mb-0 w-full lg:w-auto py-[8px] px-[8px] md:py-[10px] md:px-[15px] text-[16px] text-[#fff] rounded-[10px]">
                      Shop now
                    </button>
                    <button className="outline outline-[#316887] w-full lg:w-auto outline-offset-0 py-[7px]  md:py-[7px] md:px-[15px] text-[16px] px-[15px] hover:brightness-50 text-[#316887] rounded-[10px]">
                      View more
                    </button>
                  </div>
                </div>

                {/* Img section */}
                <div className="flex  items-end lg:mr-[20px]  ">
                  {/* 1 */}
                  <div className="w-[200px] h-[200px] md:w-[250px]  md:h-[250px]">
                    <img src={speakers} alt="Camera Image" />
                  </div>

                  {/* 2 */}
                  <div className="circleWithCamera w-[80px] h-[80px] md:w-[100px] md:h-[100px] ml-[-20px]">
                    <p className="textInCircle text-[14px] md:text-[16px]">
                      only <br /> $299
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Game Controller */}
            <SwiperSlide>
              {/* Jab bhi flexbox ki properties apply karni ho tou flex property dena lazmi ha baysahak direction koi bhi deni ho */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full md:mb-[40px] w-full lg:px-[50px]">
                {/* Buttons Section */}
                <div className=" flex flex-col justify-center mt-[20px] md:mt-[0px] mb-[70px] md:mb-[0px]  items-center h-full  py-[8px] lg:p-[15px]">
                  <div className="mb-[20px] text-start  lg:ml-[-25px]">
                    <h2 className="text-[#1B5A7D] font-extrabold  text-[24px] md:text-[30px] lg:text-[43px]">
                      Game <br className="hidden lg:block" /> Controller{" "}
                    </h2>
                    {/* <h2 className="text-[#1B5A7D] font-extrabold text-[43px]">
                    Camera{" "}
                  </h2> */}
                  </div>

                  <div className="lg:flex md:gap-[21px] justify-center">
                    <button className="bg-[#EDA415] mb-[15px] lg:mb-0 w-full lg:w-auto py-[8px] px-[8px] md:py-[10px] md:px-[15px] text-[16px] text-[#fff] rounded-[10px]">
                      Shop now
                    </button>
                    <button className="outline outline-[#316887] w-full lg:w-auto outline-offset-0 py-[7px]  md:py-[7px] md:px-[15px] text-[16px] px-[15px] hover:brightness-50 text-[#316887] rounded-[10px]">
                      View more
                    </button>
                  </div>
                </div>

                {/* Img section */}
                <div className="flex  items-end lg:mr-[20px]  ">
                  {/* 1 */}
                  <div className="w-full h-[200px] md:w-[300px]  md:h-[250px]">
                    <img
                      src={gameControler}
                      alt="Camera Image"
                      className="imageProperties"
                    />
                  </div>

                  {/* 2 */}
                  <div className="circleWithCamera w-[80px] h-[70px] md:w-[100px] md:h-[90px] ml-[-20px] mb-[-10px]">
                    <p className="textInCircle text-[14px] md:text-[16px]">
                      only <br /> $59
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* _____________________________________________________ */}

        {/* Cards Section */}
        <div className="md:mt-[20px] ">
          <div
            slot="container-start"
            className="parallax-bg"
            // style={{
            //   'background-image':
            //     'url(https://swiperjs.com/demos/images/nature-1.jpg)',
            // }}
            data-swiper-parallax="-23%"
          ></div>
          <Swiper
            modules={[Navigation, Parallax, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            navigation
            parallax={true}
            // pagination={{ clickable: true }}
            // loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
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
          >
            {/* ... */}
            {electronicProducts.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  {" "}
                  {/* Hum ya bhi kar skty thy k <HeroSectionCard/> ko idar laga kar props pass kar dety jesy hum nay <ProductListing/> component k sath kia ha or yahi sahi tarika tha lakin ab mai ny asy kar dia ha tou asy hi theek ha */}
                  <div>
                    <div className="flex justify-between rounded-xl items-center px-[30px] py-[20px] border-solid border-[1px] border-[#A5A5A5] mx-[10px]">
                      <div>
                        <img
                          src={product.image}
                          className="w-[60px] h-[80px]"
                          alt="Speakers"
                        />
                      </div>
                      <div>
                        <div className="mb-[3px]">
                          <h5 className="text-[#1B5A7D] text-[18px] font-semibold ">
                            {product.title.slice(0, 10)}...
                          </h5>
                        </div>
                        <div>
                          <p className="text-[#1B5A7D] text-[14px]">
                            ({product.rating.count})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* ... */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
