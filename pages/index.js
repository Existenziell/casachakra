import Layout from '../components/Layout'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'
import * as Css from '../node_modules/react-image-gallery/styles/css/image-gallery.css'

export default function Index() {

  const images = [
    {
      original: '/yoga/miel1.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: '/yoga/miel2.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '/yoga/miel3.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-8' >
      <h1 className="text-4xl mb-8">Welcome to Casa Chakra</h1>
      <p className='mb-8'>Casa Chakras is a homey place with plenty of space for each one to have their privacy. Trees, flowers, and animals such as birds and iguanas are part of the place.
        %The rooms are simple yet comfortable in the morning sunlight comes through the window.
      </p>
      <ImageGallery items={images} />
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
