import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview2 = ({ title, handle, thumbnail }: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <a>
        <div className=" relative hover:opacity-50 transition-all">
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className="text-base-regular mt-2">
            <span>{title}</span>
            <div className="flex items-center gap-x-2 mt-1"></div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview2
