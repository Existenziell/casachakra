import Link from 'next/link'
import Layout from '../../components/Layout'

const Retreats = () => {
    return (
        <div className='px-4 md:px-16 py-16 w-full'>
            <h1 className="text-4xl mb-8">Retreats</h1>
            <p className='leading-normal text-lg mb-12'>
                We offer various retreats with different activities - here is a list of our current ones:<br />
                <Link href="/contact"><a className="link">Contact us</a></Link> for special inquieres, we try to make every dream come true :)
            </p>

            <div className='flex flex-col items-center justify-center h-full w-full'>
                <iframe className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-snorkeling-and-horseback-riding-retreat-in-cozumel"></iframe>
                <iframe className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.tripaneer.com/yoga-kundalini-teacher-training-in-cozumel/14-days-yoga-therapy-and-pranachikitza-retreat-in-cozumel"></iframe>
                <iframe className="w-full min-h-screen mb-16 border-b-2 pb-16" src="https://www.tripaneer.com/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-retreat-with-live-music-and-energetic-herbalism-in-the-island-of-cozumel?refr_s=bmr&path=/yoga-kundalini-teacher-training-in-cozumel/4-day-yoga-retreat-with-live-music-and-energetic-herbalism-in-the-island-of-cozumel"></iframe>
                <iframe className="w-full min-h-screen mb-16 border-b-2 pb-16" src=" https://www.bookyogaretreats.com/yoga-kundalini-teacher-training-in-cozumel/14-day-kundalini-tantra-yoga-retreat-in-cozumel"></iframe>
            </div>
        </div>
    )
}

Retreats.getLayout = function getLayout(page) {
    return (
        <Layout title="Retreats">
            {page}
        </Layout>
    )
}

export default Retreats
