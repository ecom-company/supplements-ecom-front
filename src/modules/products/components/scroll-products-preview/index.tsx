import Link from "next/link"
import clsx from "clsx"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const ProductPreview2 = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const boxes = gsap.utils.toArray(".app")

    boxes.forEach((app) => {
      gsap.to(app, {
        opacity: 1,
        y: 50,
        duration: 2,
        delay: 1,
        ease: "power3.in",
        stagger: 0.3,
        smoothScroll: true,
        scrollTrigger: {
          trigger: app,
          scrub: true,
          start: "top 80%",
          end: "top center",
          once: true,
        },
      })
    })
  }, [])

  return (
    <Link className="h-[500px]" href={`/products/${handle}`}>
      <a>
        <div
          className=" relative  opacity-0 transition-all hover:contrast-125 app"
          ref={containerRef}
        >
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className="text-base-regular mt-2">
            <span>{title}</span>
            <div className="flex items-center gap-x-2 mt-1">
              {price ? (
                <>
                  {price.price_type === "sale" && (
                    <span className="line-through text-gray-500">
                      {price.original_price}
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview2
