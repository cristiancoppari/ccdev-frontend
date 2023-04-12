import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

            <main className={inter.className}>
                <Header />

                <Hero />

                <AboutMe />

                <Experience />

                <Projects />
            </main>
        </>
    );
}
