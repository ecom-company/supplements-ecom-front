import React from "react"
import { useProducts } from "medusa-react"
import { Product } from "@medusajs/medusa"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"

//import swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
import { CircleLoader } from "react-spinners"

const CarusellSectionHome = () => {
  const { products, isLoading } = useProducts()

  return (
    <div className="flex justify-center items-center text-center">
      {isLoading && (
        <div className="flex items-center justify-center w-[100vw]">
          <CircleLoader color="#e61a1a" size="100" />
        </div>
      )}
      {products && !products.length && <span>No Products</span>}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className=""
      >
        {products?.map((product: Product) => (
          <SwiperSlide className="drop-shadow-lg p-3">
            <Link href={`/products/${product.handle}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="hover:opacity-50 cursor-pointer transition-all   shadow-lg  rounded-md"
              />
            </Link>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default CarusellSectionHome
