import Layout from '../components/Layout'

export default function Index() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Casa Chakra</h1>

      <div className="mt-16 flex flex-col gap-8">
        <p>Casa Chakras is a homey place with plenty of space for each one to have their privacy. Trees, flowers, and animals such as birds and iguanas are part of the place.
          %The rooms are simple yet comfortable in the morning sunlight comes through the window.
        </p>
      </div>
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
