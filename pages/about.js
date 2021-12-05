import Layout from '../components/Layout'
import Image from 'next/image'

const About = () => {

  return (
    <div className='px-8 md:px-16 py-16'>
      <div className="flex flex-col items-center justify-content md:max-w-xl">
        <h1 className="text-4xl mb-12">Michelle Kaprielian</h1>
        <p className='italic mb-1'>Hola :)</p>
        <div className='image-wrapper shadow-xl mb-8'>
          <Image src="/about.jpg" alt="Miel" width={640} height={426} />
        </div>
        <p className='my-6'>
          My journey into the world of professional Yoga began after several
          years of informal practice with my grandmother since I was a child.
          In the year 2010 I did my first Yoga teacher training organized by the
          International Yoga Federation in Buenos Aires, Argentina.
        </p>
        <div className='image-wrapper shadow-xl'>
          <Image src='/diploma/diploma4.jpg' alt='Diploma4' width={384} height={256} />
        </div>

        <p className='my-6'>
          Since then I have been expanding my trainings,
          in the year 2011 I performed a training for Tantra and Kundalini Yoga on the island of Cozumel (Mexico)
          and in 2012 I was trained as Integral Yoga Trainer at the International Federation in Uruguay.
        </p>
        <div className='image-wrapper shadow-xl'>
          <Image src='/diploma/diploma1.jpg' alt='Diploma1' width={384} height={256} />
        </div>
        <p className='my-6'>
          Over the last years I had many opportunities to teach in numerous
          workshops, retreats, seminars and teacher trainings in
          various styles (Integral Yoga, Kundalini and Tantra, Kundalini
          Shaktiananda Yoga, Hatha, Namaskar, Prenatal Yoga, Yoga Dance, ...).
        </p>
        <div className='image-wrapper shadow-xl'>
          <Image src='/diploma/diploma3.jpg' alt='Diploma3' width={384} height={256} />
        </div>
        <p className='my-6'>
          In 2020 I had the possibility of doing the
          Master Yogacharia in Kundalini Shaktiananda Yoga at the International
          Federation, in Uruguay.
        </p>
        <div className='image-wrapper shadow-xl'>
          <Image src='/diploma/diploma2.jpg' alt='Diploma2' width={384} height={256} />
        </div>
        <p className='my-6'>
          These formations have taken me to many different parts of the world,
          the entire American continent in particular the United States
          and Mexico, Southeast Asia to Thailand and Cambodia.
          This is also where I was trained as a therapist and masseur for various techniques such as:
          Thai Massage, Hindu Massage, Oil Massage, as well as Meditation.
        </p>
        <div className='image-wrapper shadow-xl'>
          <Image src='/diploma/diploma5.jpg' alt='Diploma' width={384} height={256} />
        </div>
        <p className='my-6'>
          Additionally, I have experience in Aquatic Janzu, Swara Prana healing therapy, Reiki,
          Harmonization with programmed Quartz and Sound therapy.
          My great curiosity about the human body and the certainty that the
          emotional blocks of our lineage inhabit us, have led me to
          study acupuncture at the Alcocer school in Playa del Carmen (Mexico), and train
          as an emotional bio-decoder of human bridge.
        </p>

        <h2 className='mt-8 mb-4 text-4xl'>Casa Chakras</h2>
        <p className="mb-4">
          Casa Chakras is our place for retreats, workshops and everything surrounding Yoga.
          It is a place quietly located in El Cedral, the first original town on the island of Cozumel in Mexico.
        </p>
        <p className='mb-4'>
          Casa Chakras is 20 minutes from downtown - 5 minutes from the beaches.
          You will find all the vegetation you can imagine, the birds are the natural sound of the village.
          The trees are old, the trails are friendly and the nearby cenotes are ready to be explored.
          Trees, flowers, plants and all animals are part of Casa Chakras.
        </p>
        <p className="mb-8">
          The rooms are simple yet furnished with love -
          if you so desire, the morning sunlight can wake you up, shining through the window.
          The outdoor area comprises a pool, the Yoga Shala, a fireplace and a hammock area.
        </p>
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
