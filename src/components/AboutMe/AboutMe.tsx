import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useRef } from "react";

const AboutMe = () => {
    const imageRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useIsomorphicLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 768px)",
                isTablet: "(min-width: 768px)",
                isDesktop: "(min-width: 1024px)",
                isDesktopXL: "(min-width: 1280px)",
            },
            (ctx) => {
                let { isMobile, isTablet, isDesktop, isDesktopXL }: any =
                    ctx.conditions;

                if (isMobile) {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: "-300px center",
                            end: "bottom 80%",
                        },
                    });
                }

                if (isTablet) {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: "-200px center",
                            end: "bottom 80%",
                        },
                    });
                }
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <section className="about-me wrapper section-margin-top">
            <div className="about-me__content">
                <h2 className="underline-red max-content">About me</h2>

                <p>
                    Hello! I'm Cristian Coppari, a passionate Full-Stack Web
                    Developer based in Villa Crespo, 🇦🇷. With a keen eye for
                    detail and a relentless drive to create visually appealing
                    and user-friendly websites, I've dedicated myself to
                    crafting digital experiences that captivate and engage
                    users.
                </p>

                <p>
                    Skilled in <strong>JavaScript</strong>,{" "}
                    <strong>TypeScript</strong>, <strong>React</strong>, and{" "}
                    <strong>Redux</strong>, I have a knack for developing
                    responsive, accessible, and performance-optimized web
                    applications.
                </p>

                <p>
                    In addition to my technical skills, I'm well-versed in{" "}
                    <strong>Search Engine Optimization (SEO)</strong>, which
                    allows me to create websites that not only look and function
                    beautifully but also rank well on search engines.
                </p>

                <p>When I'm not coding, I'm driking coffee.</p>
            </div>

            <div className="about-me__image-section">
                {/* <img src="/images/about-me.jpg" alt="Cristian Coppari" /> */}
                <Image
                    src={"/images/foto-cris.jpeg"}
                    alt="CC Portfolio"
                    className={"about-me__image"}
                    fill={true}
                    ref={imageRef}
                />
            </div>
        </section>
    );
};

export default AboutMe;
