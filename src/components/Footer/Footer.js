import React from "react";
import { Link } from "react-router-dom";
import { LuSend } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import footerLogo from "../../assets/images/footerLogo-2.jpg";

export default function Footer() {
  return (
    <div className="bg-[#E2F4FF] w-full  mb-0 pt-[30px]">
      <div className="container">
        {/* Sec-1 (Mail Box) */}
        <div className="emailBox  bg-[#fff] rounded-[15px]  py-[15px] md:py-[25px] px-[20px] lg:px-[60px] ">
          {/* <div className="my-[30px]"> */}
          <div className="flex gap-[10px] md:gap-0 flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
            {/* Text */}
            <div>
              {" "}
              <h3 className="font-extrabold text-[#1B5A7D] text-[18px] lg:text-[20.38px]">
                Subscribe newsletter
              </h3>{" "}
            </div>
            {/* Email Button */}
            <div className="lowBrightness text-[#fff] bg-[#EDA415]  rounded-lg">
              <Link>
                <div className="flex justify-between items-center gap-[60px] lg:gap-[100px] py-[12px] px-[10px] lg:px-[15px] ">
                  <div className="font-semibold">Email address</div>
                  <div>
                    <LuSend />
                  </div>
                </div>
              </Link>{" "}
            </div>
            {/* Contact Num */}
            <div>
              <div className="flex items-center gap-2 lg:gap-4">
                <div>
                  <TfiHeadphoneAlt className="text-[#EDA415] " size={32} />
                </div>
                <div>
                  <Link className="text-[#606060] text-[12px] lg:text-[14px] font-[600] ">
                    Call us 24/7 : <br />
                    (+62) 0123 567 789
                  </Link>
                </div>
              </div>
            </div>
            {/* ... */}
          </div>
          {/* </div> */}
        </div>
        {/* ... Sec-1 Complete ...  */}

        {/* ................................... */}
      
        {/* Sec-2 (Lists) */}

        <div className="listItems flex flex-col ml-[-80px] md:ml-[0px] md:flex-row items-center gap-[20px]  md:justify-between py-[15px] md:py-[35px] ">
          {/* Column-1 (Logo Section) */}

          <div className="flex flex-col gap-[16px] ">
            {/* Logo Image */}
            <div className="ml-[-7px]">
              <img src={footerLogo} alt="" className="footerLogo" />
            </div>

            {/* Address */}
            <div className="text-[#1B5A7D] text-[13px]">
              <p>64 st james boulevard </p>
              <p>hoswick , ze2 7zj</p>
            </div>

            {/* Border Bottom */}
            <div className="bottomMarginLine">{/* border */}</div>

            {/* Social Links */}

            <div className="text-[#3B3B3B] flex gap-[22px] ">
              <div>
                <Link className="text-[#3B3B3B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M22.1 10.2H12.7V13.9H18.2C18.1 14.8 17.5 16.2 16.2 17.1C15.4 17.7 14.2 18.1 12.7 18.1C10.1 18.1 7.79995 16.4 6.99995 13.9C6.79995 13.3 6.69995 12.6 6.69995 11.9C6.69995 11.2 6.79995 10.5 6.99995 9.9C7.09995 9.7 7.09995 9.5 7.19995 9.4C8.09995 7.3 10.2 5.8 12.7 5.8C14.6 5.8 15.8 6.6 16.6 7.3L19.4 4.5C17.6999 3 15.4 2 12.7 2C8.79995 2 5.39995 4.2 3.79995 7.5C3.09995 8.9 2.69995 10.4 2.69995 12C2.69995 13.6 3.09995 15.1 3.79995 16.5C5.39995 19.8 8.79995 22 12.7 22C15.4 22 17.6999 21.1 19.2999 19.6C21.1999 17.9 22.2999 15.3 22.2999 12.2C22.2999 11.4 22.2 10.8 22.1 10.2Z"
                      stroke="#3B3B3B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M14.5 9.3V12.2H17.1C17.3 12.2 17.4 12.4 17.4 12.6L17 14.5C17 14.6 16.8 14.7 16.7 14.7H14.5V22H11.5V14.8H9.8C9.6 14.8 9.5 14.7 9.5 14.5V12.6C9.5 12.4 9.6 12.3 9.8 12.3H11.5V9C11.5 7.3 12.8 6 14.5 6H17.2C17.4 6 17.5 6.1 17.5 6.3V8.7C17.5 8.9 17.4 9 17.2 9H14.8C14.6 9 14.5 9.1 14.5 9.3Z"
                      stroke="#3B3B3B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H15.5C20.5 2 22.5 4 22.5 9V15C22.5 20 20.5 22 15.5 22Z"
                      stroke="#3B3B3B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M7.4 20.6C8.9 21.5 10.7 22 12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 13.8 3 15.5 3.8 17L2.94044 20.306C2.74572 21.0549 3.43892 21.7317 4.18299 21.5191L7.4 20.6Z"
                      stroke="#3B3B3B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 14.8485C17 15.0105 16.9639 15.177 16.8873 15.339C16.8107 15.501 16.7116 15.654 16.5809 15.798C16.36 16.041 16.1167 16.2165 15.8418 16.329C15.5714 16.4415 15.2784 16.5 14.9629 16.5C14.5033 16.5 14.012 16.392 13.4937 16.1715C12.9755 15.951 12.4572 15.654 11.9434 15.2805C11.4251 14.9025 10.9339 14.484 10.4652 14.0205C10.001 13.5525 9.58187 13.062 9.20781 12.549C8.83826 12.036 8.54081 11.523 8.32449 11.0145C8.10816 10.5015 8 10.011 8 9.543C8 9.237 8.05408 8.9445 8.16224 8.6745C8.27041 8.4 8.44166 8.148 8.68052 7.923C8.96895 7.6395 9.28443 7.5 9.61793 7.5C9.74412 7.5 9.87031 7.527 9.98297 7.581C10.1002 7.635 10.2038 7.716 10.2849 7.833L11.3305 9.3045C11.4116 9.417 11.4702 9.5205 11.5108 9.6195C11.5513 9.714 11.5739 9.8085 11.5739 9.894C11.5739 10.002 11.5423 10.11 11.4792 10.2135C11.4206 10.317 11.335 10.425 11.2268 10.533L10.8843 10.8885C10.8348 10.938 10.8122 10.9965 10.8122 11.0685C10.8122 11.1045 10.8167 11.136 10.8257 11.172C10.8393 11.208 10.8528 11.235 10.8618 11.262C10.9429 11.4105 11.0826 11.604 11.2809 11.838C11.4837 12.072 11.7 12.3105 11.9344 12.549C12.1778 12.7875 12.4121 13.008 12.651 13.2105C12.8853 13.4085 13.0791 13.5435 13.2323 13.6245C13.2549 13.6335 13.2819 13.647 13.3135 13.6605C13.3495 13.674 13.3856 13.6785 13.4261 13.6785C13.5028 13.6785 13.5613 13.6515 13.6109 13.602L13.9534 13.2645C14.0661 13.152 14.1743 13.0665 14.2779 13.0125C14.3816 12.9495 14.4852 12.918 14.5979 12.918C14.6835 12.918 14.7737 12.936 14.8728 12.9765C14.972 13.017 15.0756 13.0755 15.1883 13.152L16.68 14.2095C16.7972 14.2905 16.8783 14.385 16.9279 14.4975C16.973 14.61 17 14.7225 17 14.8485Z"
                      stroke="#3B3B3B"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Column-2 (Find Product Section) */}
          <div className="text-[#1B5A7D] ">
            {/* heading */}
            <div>
              <h4 className="font-semibold text-[16px] mb-[8px]">
                Find product
              </h4>
            </div>

            {/* List */}
            <div>
              <ul className="ml-[15px] leading-7 text-[14px]">
                <li>
                  {" "}
                  <Link>Brownze arnold</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Chronograph blue</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Smart phones</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Automatic watch</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Hair straighteners</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* Column-3 (Get help Section) */}
          <div className="text-[#1B5A7D] ">
            {/* heading */}
            <div>
              <h4 className="font-semibold text-[16px] mb-[8px]">Get help</h4>
            </div>

            {/* List */}
            <div>
              <ul className="ml-[15px] leading-7 text-[14px]">
                <li>
                  {" "}
                  <Link>About us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Contact us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Return Policy</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Privacy policy</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Payment policy</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* Column-4 (About us Section) */}
          <div className="text-[#1B5A7D] ">
            {/* heading */}
            <div>
              <h4 className="font-semibold text-[16px] mb-[8px]">About us</h4>
            </div>

            {/* List */}
            <div>
              <ul className="ml-[15px] leading-7 text-[14px]">
                <li>
                  {" "}
                  <Link>News</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Services</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Our policy</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Customer care</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>Faq's</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ... Sec-2 Complete ...  */}
      </div>
    </div>
  );
}
