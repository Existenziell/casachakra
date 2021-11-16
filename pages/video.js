import Layout from '../components/Layout'

const Video = () => {

  return (
    <div>
      <main className="w-screen pb-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl">Video</h1>
        <div className="flex flex-wrap gap-6 items-center justify-center mt-8">
          <video src="/video/video.mp4" controls preload="true" autoPlay={true} />
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
