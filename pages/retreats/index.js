import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Retreats = ({ posts }) => {

    const [postsVisible, setPostsVisible] = useState(false)
    const router = useRouter()

    // Check url params for postsVisible=true
    useEffect(() => {
        if (router.query.postsVisible) {
            setPostsVisible(true)
        }
    }, [])

    return (
        <div>
            <h1 className="text-4xl">Retreats</h1>
            <button onClick={() => setPostsVisible(!postsVisible)} className='button'>
                {!postsVisible ? `Show Retreats` : `Hide Retreats`}
            </button>

            {postsVisible &&
                <div className='flex flex-col text-left'>
                    {posts.map((post) => {
                        const { body, id, title, userId } = post
                        return (
                            <Link href={`/retreats/${id}`} key={id}>
                                <a className="shadow p-8 bg-gray-50 rounded mb-6 hover:shadow-none">
                                    <p className="mb-4"><span className="font-bold">ID: </span>{id}</p>
                                    <p className="mb-4"><span className="font-bold">Title: </span>{title}</p>
                                    <p className="mb-4"><span className="font-bold">Content: </span>{body}</p>
                                    <p className="mb-4"><span className="font-bold">User: </span>{userId}</p>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            }

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

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(ctx) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await response.json()

    return {
        props: {
            posts,
        }
    }
}

export default Retreats
