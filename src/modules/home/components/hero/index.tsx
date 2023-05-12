import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute top-24 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-5xl mb-4 drop-shadow-md shadow-black uppercase font-extrabold">
          Suplementos
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explorar productos</UnderlineLink>
      </div>
      <Image
        src="/hero.jpeg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Hero image"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
