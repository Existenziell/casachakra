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
          Casa Chakras is our place for retreats, workshops and everything surrounding Yoga.
          It is a place quietly located in El Cedral, the first original town on the island of Cozumel in Mexico.
          You will find all the vegetation you can imagine, the birds are the natural sound of the village.
          The trees are old, the trails are friendly and the nearby cenotes are ready to be explored.
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
