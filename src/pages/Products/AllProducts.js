import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa6";
import { FetchDataContext } from "../../store/FetchDataContext";
import CardForProductPage from "../../components/CardForProductPage";

const initialState = "All";
export default function AllProducts() {
  const { fetchedProducts } = useContext(FetchDataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getUniqueData = (data, property) => {
    //Hum currentElem[property] ki jaga currentElem.category bhi likh skty thy lkin ya sahi nai ha ab hum is getUnique waly func ko export kar k param use kar k use kar skty ha
    let cataegoryValues = data.map((currentElem) => currentElem[property]);
    return (cataegoryValues = ["All", ...new Set(cataegoryValues)]);
    // console.log("cataegoryValues", cataegoryValues); // Ab humry pas all type ki dynamic categories aa rahi ha wo bhi ik ik kar k wo 1 1 bar upar wali line ki waja sy hoi ha
  };

  // GET UNIQUE DATA
  const categories = getUniqueData(fetchedProducts, "category");
  console.log("categories are here", categories);

  const updateFiteredProducts = (category) => {
    setSelectedCategory(category);

    let filtered_Products = fetchedProducts;
    let temporaryFilteredProducts = [...filtered_Products]; //is ka mtlb ha k by default jo value ho gi wo yai ha

    if (category !== "All") {
      temporaryFilteredProducts = temporaryFilteredProducts.filter(
        (product) => {
          return product.category === category;
        }
      );
    }
    setFilteredProducts(temporaryFilteredProducts);
    console.log("temporaryFilteredProducts", temporaryFilteredProducts);
  };

  useEffect(() => {
    updateFiteredProducts();
  }, []);

  console.log("selectedCategory", selectedCategory);

  return (
    <>
      {/* Small filter icon */}
      <div className="flex mt-[15px] mx-[7px] md:hidden  justify-between">
        <div className="font-semibold text-[19px] text-[#1B5A7D]">
          Electon Products
        </div>
        <div className="flex">
          <Link className="border-[1px] border-solid border-[#EDA415] rounded-full   px-[12px] py-[2px]">
            <span className="text-[#EDA415] ">
              <FaFilter className="inline" /> <span>Filter</span>{" "}
            </span>
          </Link>
        </div>
      </div>
      {/* Small filter icon end*/}

      {/* ---------- Filters & Products --------- */}

      <div className="flex  md:mt-[90px]  gap-4">
        {/* Categories */}
        <div className="hidden md:block px-[10px]">
          {/* ... */}
          {/* ----- 1- Categories ----- */}

          <div className="flex flex-col justify-between ">
            {/* Head */}
            <div className="flex justify-between gap-[100px] items-center mb-[15px]">
              <div>
                {" "}
                <h4 className="text-[#003F62] font-semibold">
                  Categories
                </h4>{" "}
              </div>
              <div>
                {" "}
                <Link className="text-[#595959]">Reset</Link>{" "}
              </div>
            </div>

            {/* checkbox - 1*/}

            {categories.map((category, index) => {
              return (
                <>
                  <div key={index} className="flex justify-between ">
                    <label className="checkboxContainer">
                      {category}
                      <input
                        type="checkbox"
                        name="category"
                        onChange={() => updateFiteredProducts(category)}
                        checked={selectedCategory === category}
                        value={category}
                      />

                      <span className="checkmark"></span>
                    </label>

                    <div>
                      <p className="text-[#222] text-[13px]">
                        {category.length}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}

            {/* Line */}
            <div className="border-b-[1px] border-solid border-[#BDBDBD] my-[10px]"></div>
          </div>
          {/* ... */}

          {/* ... */}
          {/* ----- 2- Avaliability ----- */}

          <div className="flex flex-col justify-between">
            {/* Head */}
            <div className="flex items-center mb-[15px]">
              <div>
                {" "}
                <h4 className="text-[#003F62] font-semibold">
                  Avaliability
                </h4>{" "}
              </div>
            </div>

            {/* How many selected */}
            <div className="flex items-center justify-between mb-[7px]">
              <div>
                {" "}
                <h4 className="text-[#595959] ">0 selected</h4>{" "}
              </div>
              <div>
                {" "}
                <Link className="text-[#595959]">Reset</Link>{" "}
              </div>
            </div>

            {/* checkbox - 1*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                In stock
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* checkbox - 2*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                Out of stock
                <input type="checkbox" disabled />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">0</p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-b-[1px] border-solid border-[#BDBDBD] my-[10px]"></div>
          </div>
          {/* ... */}

          {/* ... */}
          {/* ----- 3- Product-type ----- */}

          <div className="flex flex-col justify-between">
            {/* Head */}
            <div className="flex items-center mb-[15px]">
              <div>
                {" "}
                <h4 className="text-[#003F62] font-semibold">
                  Product type
                </h4>{" "}
              </div>
            </div>

            {/* How many selected */}
            <div className="flex items-center justify-between mb-[7px]">
              <div>
                {" "}
                <h4 className="text-[#595959] ">0 selected</h4>{" "}
              </div>
              <div>
                {" "}
                <Link className="text-[#595959]">Reset</Link>{" "}
              </div>
            </div>

            {/* checkbox - 1*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                Smart-watch
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-b-[1px] border-solid border-[#BDBDBD] my-[10px]"></div>
          </div>
          {/* ... */}

          {/* ... */}
          {/* ----- 4- Color ----- */}

          <div className="flex flex-col justify-between">
            {/* Head */}
            <div className="flex items-center mb-[15px]">
              <div>
                {" "}
                <h4 className="text-[#003F62] font-semibold">Color</h4>{" "}
              </div>
            </div>

            {/* How many selected */}
            <div className="flex items-center justify-between mb-[7px]">
              <div>
                {" "}
                <h4 className="text-[#595959] ">0 selected</h4>{" "}
              </div>
              <div>
                {" "}
                <Link className="text-[#595959]">Reset</Link>{" "}
              </div>
            </div>

            {/* colors div */}
            <div className="flex justify-between my-3">
              <Link className="w-[15px] h-[15px] bg-[#EDA415] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#E42424] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#1B5A7D] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#ACACAC] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#1D5F23] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#2E56A3] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#8131A7] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#BC2944] rounded-full"></Link>
              <Link className="w-[15px] h-[15px] bg-[#9BC14C] rounded-full"></Link>
            </div>

            {/* Bottom Line */}
            <div className="border-b-[1px] border-solid border-[#BDBDBD] my-[10px]"></div>
          </div>
          {/* ... */}

          {/* ----- 5- Size ----- */}

          <div className="flex flex-col justify-between">
            {/* Head */}
            <div className="flex items-center mb-[15px]">
              <div>
                {" "}
                <h4 className="text-[#003F62] font-semibold">Size</h4>{" "}
              </div>
            </div>

            {/* How many selected */}
            <div className="flex items-center justify-between mb-[7px]">
              <div>
                {" "}
                <h4 className="text-[#595959] ">0 selected</h4>{" "}
              </div>
              <div>
                {" "}
                <Link className="text-[#595959]">Reset</Link>{" "}
              </div>
            </div>

            {/* checkbox - 1*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                M
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* checkbox - 2*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                S
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* checkbox - 3*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                X
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* checkbox - 4*/}
            <div className="flex justify-between ">
              <label className="checkboxContainer">
                XX
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <div>
                <p className="text-[#222] text-[13px]">5</p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-b-[1px] border-solid border-[#BDBDBD] my-[10px]"></div>
          </div>
          {/* ... */}
        </div>
        {/* Categories ends*/}

        {/* _______________________________________________________________________ */}

        {/* Products List  */}
        <div className=" flex md:mb-[0px] md:ml-[20px] lg:ml-[40px] mt-[40px] md:mt-[0px]  flex-wrap  ">
          {filteredProducts.map((product) => {
            return (
              <>
                <div className="px-[10px] pb-[15px]  ">
                  <CardForProductPage
                    imageSrc={product.image}
                    productTitle={product.title}
                    productRatings={product.rating.rate}
                    productPrice={product.price}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
