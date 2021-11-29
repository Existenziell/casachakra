import Layout from '../components/Layout'
import Social from '../components/Social'

const About = () => {

  return (
    <div className='pb-32'>
      <div className="flex flex-col items-center justify-content text-center md:max-w-xl">
        <h1 className="text-4xl mb-8">Michelle Kaprielian</h1>
        <p className='mb-4'>
          My journey into the world of professional Yoga began after several
          years of informal practice with my grandmother since I was a child,
          In the year 2010 I did my first training for teachers in Yoga by the
          International Yoga Federation in Buenos Aires, Argentina.
        </p>
        <p className='mb-4'>
          Since then I have been expanding my training in the year 2011
          perform the training of Tantra and KundaliniYoga on the island of
          Cozumel (Mexico) and in 2012 I was trained as
          Integral Yoga Trainer at the International Federation in
          Uruguay, from there and taught as a Trainer numerous
          workshops, retreats, seminars and teacher trainings in
          various styles (Integral Yoga, Kundalini and Tantra, Kundalini
          shaktiananda Yoga, Hatha, Namaskar, Pre natal Yoga,
          Yoga Dance). In 2020 the possibility of doing the
          Master Yogacharia in Kundalini Shaktiananda Yoga in the international
          federation.
        </p>
        <p className='mb-4'>
          This formative work has taken me to different parts of the world
          like the entire American continent in particular the United States
          and Mexico, and Southeast Asia like Thailand and Cambodia.
          Where I have also trained as a therapist and masseur of
          various techniques such as: Thai massage, Hindu massage,
          meditation
        </p>
        <p className='mb-4'>
          Aquatic Janzu, Swara prana healing therapy, Reiki,
          Harmonization with programmed quartz, sound therapy.
          My great curiosity about the human body and the certainty that the
          emotional blocks of my lineage inhabit have led me to
          study acupuncture at the Alcocer school in playa del carmen, and train
          as an emotional bio-decoder of human bridge.
        </p>
        <h2 className='mt-8 mb-4 text-xl'>Casa Chakras</h2>
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
