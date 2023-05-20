import Link from "next/link"
import clsx from "clsx"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview2 = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <Link className="h-[500px]" href={`/products/${handle}`}>
      <a>
        <div className=" relative hover:opacity-95 transition-all">
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
