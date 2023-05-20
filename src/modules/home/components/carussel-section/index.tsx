/* eslint-disable @next/next/link-passhref */
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
import Image from "next/image"
import Thumbnail from "@modules/products/components/thumbnail"
import clsx from "clsx"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"

const CarusellSectionHome = () => {
  // const { products, isLoading } = useProducts()

  const { data: products, isLoading } = useFeaturedProductsQuery()

  console.log(products)

  return (
    <div className="flex justify-center items-center text-center">
      {isLoading && (
        <div className="flex items-center justify-center w-[100vw]">
          <CircleLoader color="#576090" size="80" />
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
        {products?.map((product) => (
          <SwiperSlide key={product.id} className="p-3">
            <Link
              className="hover:opacity-60"
              href={`/products/${product.handle}`}
            >
              <a>
                <Thumbnail thumbnail={product.thumbnail} size="full" />
                <div className="text-base-regular mt-2 w-full">
                  <span className="uppercase text-right flex items-start w-full">
                    {product.title}
                  </span>
                  <div className="flex items-center gap-x-2 mt-1">
                    {product?.price ? (
                      <>
                        {product?.price.price_type === "sale" && (
                          <span className="line-through text-gray-500">
                            {product?.price.original_price}
                          </span>
                        )}
                        <span
                          className={clsx("font-semibold", {
                            "text-rose-500":
                              product?.price.price_type === "sale",
                          })}
                        >
                          {product?.price.calculated_price}
                        </span>
                      </>
                    ) : (
                      <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
                    )}
                  </div>
                </div>
              </a>
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
