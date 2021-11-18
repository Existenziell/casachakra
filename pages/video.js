import Layout from '../components/Layout'

const Video = () => {

  return (
    <div>
      <main className="w-screen pb-32 flex flex-col items-center justify-center px-16">
        <h1 className="text-4xl">Video</h1>
        <div className="flex flex-col items-center justify-center mt-8 space-y-6">
          <video src="/video/video1.mp4" controls preload="true" autoPlay={true} className='w-full' />
        </div>
      </main>
    </div>
  )
}

Video.getLayout = function getLayout(page) {
  return (
    <Layout title="Video">
      {page}
    </Layout>
  )
}

export default Video
