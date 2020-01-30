import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <title>Hello, Werld</title>
            </Head>

            <Header />

            <Hero src="/static/media/homepage-hero.jpg" style="height: 100vh; max-height: 50rem;">
                <h1>Hello, Welrd!</h1>
            </Hero>

            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>

            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                }
            `}</style>
        </>
    );
}
