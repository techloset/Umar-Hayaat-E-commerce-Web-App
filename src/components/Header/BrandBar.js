import React from "react";
import Logo from "../../assets/images/headerLogo.png";
import { Link } from "react-router-dom";

export default function BrandBar() {
  return (
    <div className="bg-[#003F62]">
      <div className="container flex items-center w-full h-[4.12rem] md:h-[6.12rem]  gap-[3rem] lg:gap-[5.31rem]">
        {/*Sec-1  */}
        <div>
          <div>
            <Link to={"/"}>
              <img className="BrandBarLogo min-w-[6rem]  min-h-[1.5rem] md:min-w-[8rem] md:min-h-[2rem]  box-border" src={Logo} alt="Web Logo" />
            </Link>
          </div>
        </div>

        {/* Sec-2 */}
        <div className="flex text-[#fff] items-center justify-end lg:justify-between w-full h-full">
          {/* 1 (Search Input) */}

          <div className="w-[27.375rem] text-black  hidden lg:block  ">
            <form className="flex items-center">
              <div>
                <input
                  type="text"
                  className="md:w-[15.375rem] lg:w-[20.375rem] placeholder:text-[#292D32] md:h-[2.4rem] caret-[#EDA415]  lg:h-[3rem] pl-[1.56rem] pr-[4.56rem] focus:outline-none  rounded-[1.50rem]"
                  placeholder="Search any things"
                />
              </div>
              <div>
                <button className="bg-[#EDA415] hover:shadow-sm hover:shadow-[#003F62] md:h-[2.4rem] lg:h-[3rem] md:w-[6.25rem]  lg:w-[6.25rem] rounded-[1.50rem] ml-[-70px] text-[#fff]">
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* 2 (Links) */}
          <div className="flex gap-[8px] md:gap-[15px] text-sm">
            <div>
              <Link to="#" className="flex items-center gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M12.7894 12C15.5509 12 17.7894 9.76142 17.7894 7C17.7894 4.23858 15.5509 2 12.7894 2C10.028 2 7.78943 4.23858 7.78943 7C7.78943 9.76142 10.028 12 12.7894 12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.3794 22C21.3794 18.13 17.5294 15 12.7894 15C8.04943 15 4.19943 18.13 4.19943 22"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="hidden md:inline ml-[0.35rem] ">SignIn </span>
              </Link>
            </div>

            <div>
              <Link to="#" className="flex items-center gap-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M13.4094 20.81C13.0694 20.93 12.5094 20.93 12.1694 20.81C9.26943 19.82 2.78943 15.69 2.78943 8.69001C2.78943 5.60001 5.27943 3.10001 8.34943 3.10001C10.1694 3.10001 11.7794 3.98001 12.7894 5.34001C13.7994 3.98001 15.4194 3.10001 17.2294 3.10001C20.2994 3.10001 22.7894 5.60001 22.7894 8.69001C22.7894 15.69 16.3094 19.82 13.4094 20.81Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div class="w-[14.21px] h-[15px] bg-amber-500 rounded-[394.74px] flex-col justify-center items-center gap-[7.89px] inline-flex">
                  <div class="text-white text-[9.47px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>

                <span className="ml-[0.35rem] hidden md:inline">
                  Favourites
                </span>
              </Link>
            </div>

            <div>
              <Link to="#" className="flex items-center gap-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    d="M1.99995 2H3.73996C4.81996 2 5.66996 2.93 5.57996 4L4.74995 13.96C4.60995 15.59 5.89995 16.99 7.53995 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.5399 6.88C21.6599 5.22 20.3999 3.87 18.7299 3.87H5.81996"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.25 22C16.9403 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9403 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.24995 22C8.94031 22 9.49995 21.4404 9.49995 20.75C9.49995 20.0596 8.94031 19.5 8.24995 19.5C7.5596 19.5 6.99995 20.0596 6.99995 20.75C6.99995 21.4404 7.5596 22 8.24995 22Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99995 8H21"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div class="w-[14.21px] h-[15px] bg-amber-500 rounded-[394.74px] flex-col justify-center items-center gap-[7.89px] inline-flex">
                  <div class="text-white text-[9.47px] font-normal font-['Poppins']">
                    0
                  </div>
                </div>
                <span className="ml-[0.35rem] hidden md:inline"> Cart</span>
              </Link>
            </div>
          </div>
          {/* ..... */}
        </div>
      </div>
    </div>
  );
}
