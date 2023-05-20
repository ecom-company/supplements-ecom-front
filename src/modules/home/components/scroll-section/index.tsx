import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import repeat from "@lib/util/repeat"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview2 from "@modules/products/components/scroll-products-preview"
import { motion, useScroll } from "framer-motion"

const Products = () => {
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <main className=" mt-10 p-10">
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {products?.map((product) => (
            <ProductPreview2 {...product} key={product.id} />
          ))}
          {loadingProducts &&
            repeat(4).map((index) => <SkeletonProductPreview key={index} />)}
        </div>
      </div>
    </main>
  )
}

export default Products
