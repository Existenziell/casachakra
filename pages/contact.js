import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Social from '../components/Social'

const Contact = () => {

    const [formData, setFormData] = useState()

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = (e) => {
        e.preventDefault()

        // ToDo: send formData to server & deliver mail
        setTimeout(() => {
            Router.push('/success')
        }, 2000)
    }

    return (
        <div className='px-4 md:px-16 py-16 w-full md:w-2/3'>
            <div className="flex flex-col items-center justify-content text-center">
                <h1 className="text-4xl mb-8">Write me something nice :)</h1>
                <div className="p-12 mt-6 shadow w-full">
                    <form onSubmit={submitForm} className="flex flex-col space-y-6 ">
                        <input type="text" name="name" placeholder="Your Name" onChange={setData} required></input>
                        <input type="email" name="email" placeholder="Your Email" onChange={setData} required></input>
                        <textarea placeholder="Your Message" name="message" onChange={setData} rows="10" required></textarea>
                        <input type="submit" className='button'></input>
                    </form>
                </div>
            </div>
        </div >
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout title="Contact">
            {page}
        </Layout>
    )
}

export default Contact
