import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Form from "@/components/Form/Form";

export default function Home(props: any) {
    const { TOKEN_ENDPOINT, MAIL_ENDPOINT } = props;

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

                <Form endpoints={[TOKEN_ENDPOINT, MAIL_ENDPOINT]} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const TOKEN_ENDPOINT: string = process.env.TOKEN_ENDPOINT || "";
    const MAIL_ENDPOINT: string = process.env.MAIL_ENDPOINT || "";

    // DEBUG
    // console.log("TOKEN_ENDPOINT", TOKEN_ENDPOINT);
    // console.log("MAIL_ENDPOINT", MAIL_ENDPOINT);

    if (!TOKEN_ENDPOINT || !MAIL_ENDPOINT) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            TOKEN_ENDPOINT,
            MAIL_ENDPOINT,
        },
    };
}
