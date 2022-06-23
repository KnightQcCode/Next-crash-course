import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head >
                <title>WebDev Newz</title>
            </Head>

            <h1>Welome to Next</h1>
            <a href={'/about'}>About</a>
        </div>
    )
}
