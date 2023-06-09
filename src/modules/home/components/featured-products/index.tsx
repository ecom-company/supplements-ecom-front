import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import CarusellSectionHome from "../carussel-section"

const FeaturedProducts = () => {
  return (
    <div className="h-[70vh] py-2 snap-item">
      <div className="content-container py-12">
        <CarusellSectionHome />
      </div>
    </div>
  )
}

export default FeaturedProducts
