import { UnsplashImage } from "@/models/unsplash-image"
import Image from "next/image";

export const metadata = {
    title: 'Images-Next 13.4',
   
  }

export default async function Images() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=' + process.env.UNSPLASH_ACCESS_KEY)
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">

            <Image src={image.urls.regular} alt={image.description} height={height} width={width} className="rounded shadow mw-100 h-100 "/>

        </div>
    );
}