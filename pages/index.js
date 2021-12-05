import Layout from '../components/Layout'
import ImageGallery from 'react-image-gallery'
import * as Css from '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { images } from '../lib/carousell'

export default function Index() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen overflow-hidden relative">
        <div className="z-20 p-5 text-2xl text-white bg-brand bg-opacity-50 w-full">
          Casa Chakras &#x2764;
        </div>
        <video controls={false} autoPlay={true} muted loop preload='true'
          src="/video/video1.mp4"
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none' />
      </section>

      <div className="px-4 md:px-16 py-16 w-full">
        <p className='mb-8 text-lg lead bg-brand rounded-lg max-w-2xl mx-auto px-8 py-6 bg-opacity-50'>
          Casa Chakras is a homey place with plenty of space for each one to have their privacy. Trees, flowers, and animals such as birds and iguanas are part of the place.
          The rooms are simple, yet comfortable and furnished with love. The outdoor area comprises a pool, the Yoga Shala, a fireplace and a hammock area.
        </p>
        {/* https://www.npmjs.com/package/react-image-gallery */}
        <ImageGallery items={images} thumbnailPosition="top" />
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
