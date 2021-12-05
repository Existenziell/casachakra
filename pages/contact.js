import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Social from '../components/Social'
import CircleLoader from "react-spinners/CircleLoader"

const Contact = () => {

    const [formData, setFormData] = useState()
    const [sending, setSending] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            res.ok ?
                Router.push("/success")
                :
                setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
        } catch (error) {
            setErrorMsg("Sorry, an error occured. Have you tried turning it off and on again?")
        }
    }

    return (
        <div className='px-4 md:px-16 py-16 w-full md:w-2/3'>
            <div className="flex flex-col items-center justify-content text-center">
                <h1 className="text-4xl mb-8">Connect with us</h1>
                <p className='text-lg'>
                    We would love to hear from you, get your feedback or respond to your questions.
                    If you have special wishes, ideas or needs for a retreat, let us know.
                </p>
                <div className="p-12 mt-6 shadow w-full">
                    <form onSubmit={submitForm} className="flex flex-col space-y-6 ">
                        <input type="text" name="name" placeholder="Name" onChange={setData} required disabled={sending}></input>
                        <input type="email" name="email" placeholder="Email" onChange={setData} required disabled={sending}></input>
                        <textarea placeholder="Write me something nice :)" name="message" onChange={setData} rows="10" required disabled={sending}></textarea>

                        {errorMsg ?
                            <div className='text-left bg-red-700 text-white p-4'>
                                {errorMsg}
                            </div>
                            :
                            sending
                                ? <CircleLoader size={50} color="var(--color-brand)" />
                                : <input type="submit" className='button' value="Send"></input>
                        }
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
