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

            <Hero src="https://images.unsplash.com/photo-1531113463068-6f334622d795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
            <Hero src="https://images.unsplash.com/photo-1540073280202-6e5c781befec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
            <h1>Hello, Welrd!</h1>
            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                }
            `}</style>
        </>
    );
}