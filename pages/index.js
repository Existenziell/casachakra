import Layout from '../components/Layout'
import Image from 'next/image'

export default function Index() {
  return (
    <div className='flex flex-col items-center justify-center gap-8' >
      <h1 className="text-4xl mb-8">Welcome to Casa Chakra</h1>
      <p className='mb-8'>Casa Chakras is a homey place with plenty of space for each one to have their privacy. Trees, flowers, and animals such as birds and iguanas are part of the place.
        %The rooms are simple yet comfortable in the morning sunlight comes through the window.
      </p>
      <Image src="/yoga/miel1.jpg" width={1000} height={750} alt="Miel" />
      <Image src="/yoga/miel2.jpg" width={1000} height={667} alt="Miel2" />
      <Image src="/yoga/miel3.jpg" width={1000} height={654} alt="Miel3" />
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
