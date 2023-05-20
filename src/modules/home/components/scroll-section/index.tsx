import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import repeat from "@lib/util/repeat"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview2 from "@modules/products/components/scroll-products-preview"
import UnderlineLink from "@modules/common/components/underline-link"
// import { motion, useScroll } from "framer-motion"

const Products = () => {
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <main className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our newest styles are here to help you look your best.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <div className="grid small:grid-cols-2 max-lg:grid-cols-2 gap-x-4 gap-y-8">
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
