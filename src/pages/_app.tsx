import type { AppProps } from "next/app";
import { Space_Mono, Nunito_Sans } from "next/font/google";
import "../styles/base.scss";

const SpaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const NunitoSans = Nunito_Sans({
    weight: ["300", "400", "600"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --spaceMono-font: ${SpaceMono.style.fontFamily};
                    --nunitoSans-font: ${NunitoSans.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
