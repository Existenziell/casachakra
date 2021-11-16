import Layout from '../components/Layout'
import Social from '../components/Social'

const About = () => {

  return (
    <div className='pb-32'>
      <div className="flex flex-col items-center justify-content text-center">
        <h1 className="text-4xl mb-8">About Casa Chakra</h1>
        <p className="mb-4">Casa Chakras is a homey place with plenty of space for each one to have their privacy. Trees, flowers, and animals such as birds and iguanas are part of the place.</p>
        <p className="mb-4">The rooms are simple yet comfortable in the morning sunlight comes through the window.</p>
        <p>El Cedral is the first original town on the island. It is 20 minutes from downtown, the only street in town is one block away from the retreat. You will find all the vegetation you can imagine, the birds are the natural sound of the town, the trees are very old, and the trails are very friendly to explore the cenotes and animal life.</p>
      </div>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout title="About">
      {page}
    </Layout>
  )
}

export default About
