import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import CarusellSectionHome from "../carussel-section"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Nuevos productos
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Nuestros nuevos productos están aqui para ayudarte con tu nutrición.
          </p>
          <UnderlineLink href="/store">Explorar productos</UnderlineLink>
        </div>
        <CarusellSectionHome />
      </div>
    </div>
  )
}

export default FeaturedProducts
