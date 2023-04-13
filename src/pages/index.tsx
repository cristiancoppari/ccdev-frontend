import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Form from "@/components/Form/Form";

import type { HomeProps } from "@/types/types";

export default function Home(props: any) {
    const { API_ENDPOINT } = props;

    return (
        <>
            <Head>
                <title>Cristian Coppari - Portfolio</title>
                <meta
                    name="description"
                    content="Hello! Im Cristian, a fullstack developer from Villa Crespo, Buenos Aires, Argentina."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />

                <Hero />

                <AboutMe />

                <Experience />

                <Projects />

                <Form endpoint={API_ENDPOINT} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const API_ENDPOINT = process.env.API_ENDPOINT;

    return {
        props: {
            API_ENDPOINT,
        },
    };
}
