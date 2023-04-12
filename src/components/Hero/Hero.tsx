import Button from "../Buttons/Button";

const Hero = () => {
    return (
        <section className="hero screen-height wrapper">
            <p className="first-title">
                Hi! <span className="wave">👋🏼</span>, my name is
            </p>

            <h1>
                <span className="underline-yellow underline-center max-content">
                    Cristian
                </span>{" "}
                <span>Coppari.</span>
            </h1>
            <h2>
                I build things for the{" "}
                <span className="underline-gray-light underline-center">
                    web
                </span>
                .
            </h2>

            <div className="text-container">
                <p className="text">
                    I'm a Full Stack Developer specializing in building websites
                    and web applications.
                </p>

                <p className="text">
                    {" "}
                    Currently, I'm working at{" "}
                    <a
                        href="https://egodesign.io/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        EGO
                    </a>{" "}
                    as a{" "}
                    <span className="underline-blue underline-center position">
                        Front End Developer
                    </span>
                    .
                </p>
            </div>

            <Button label="Contact me" />
        </section>
    );
};

export default Hero;
