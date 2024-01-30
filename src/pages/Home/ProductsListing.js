import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
import ProductListCard from "../../components/ProductListCard";
import { FetchDataContext } from "../../store/FetchDataContext";

export default function ProductsListing() {
 
  const { fetchedProducts } = useContext(FetchDataContext);
  // console.log("fetchedProducts: ProductsListing", fetchedProducts);
  
  const exceptJeweleryProducts = fetchedProducts.filter((product) => {
    if (product.category !== "jewelery") {
      return product;
    } 
  });
  // console.log("exceptJeweleryProducts", exceptJeweleryProducts);

const limitedProducts = exceptJeweleryProducts.slice(0,12)

  return (
    <div className="mt-[70px] mb-[30px] w-full ">
      {/* Navbar */}

      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between text-[#1B5A7D]">
        <div>
          <h3 className="font-semibold text-[20px] ml-[8px] md:ml-[0px]">
            Popular products
          </h3>
        </div>

        <div>
          <ul className="flex gap-2 md:gap-3 text-[#1B5A7D] flex-wrap leading-[35px]">
            <li>
              <div>
                <Link to={'/products'} className="lowBrightness font-medium outline text-[13px] outline-[1px] outline-[#003F62] hover:bg-[#418ab1] hover:text-[#fff] rounded-full py-[10px] px-[17px] ">
                  All products
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link className="lowBrightness font-medium outline text-[13px] outline-[1px] outline-[#003F62] hover:bg-[#418ab1] hover:text-[#fff] rounded-full py-[10px] px-[17px]  ">
                  Laptops
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link className="lowBrightness font-medium outline text-[13px] outline-[1px] outline-[#003F62] hover:bg-[#418ab1] hover:text-[#fff] rounded-full py-[10px] px-[17px]  ">
                  Tablets
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link className="lowBrightness font-medium outline text-[13px] outline-[1px] outline-[#003F62] hover:bg-[#418ab1] hover:text-[#fff] rounded-full py-[10px] px-[19px]  ">
                  Mouse
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar end here */}

      {/* Products List Swiper */}
      <div>
        <div className="my-[40px] w-full">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#EDA415",
              paddingBottom: "60px",
            }}
            // slidesPerView={4}
            grid={{
              fill: "row",
              rows: 2,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 4,
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

            {/* ... */}
         
         
            {limitedProducts.map((product) => {
              return (
        
               <SwiperSlide key={product.id}>
                  <ProductListCard productID= {product.id} imageSrc = {product.image} productTitle = {product.title} productRatings = {product.rating.rate} productPrice ={product.price}/>
                </SwiperSlide>
       
                
              );
            })}
            {/* ... */}

          </Swiper>
        </div>
      </div>


    </div>
  );
}
