import type { ExperienceItem, Technology } from "../../types/types";
import { FaNodeJs } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiDjango,
    SiGulp,
    SiWordpress,
    SiGoogleanalytics,
    SiGoogleads,
    SiGooglesearchconsole,
    SiSass,
    SiBootstrap,
    SiNextdotjs,
} from "react-icons/si";

const experience_items: ExperienceItem[] = [
    {
        title: "Freelance Web Developer",
        date: "2023 - Present",
        position: "Frontend Developer",
        description:
            "As a freelance web developer with 4 years of experience, I specialize in using Typescript, JavaScript, SCSS, Next.js, and Node.js to create visually stunning and highly functional web applications. My expertise in these technologies, along with my in-depth knowledge of the latest industry best practices and development standards, enables me to create exceptional user experiences for my clients. With my knowledge of Node.js, I can also create seamless backend solutions that integrate well with my frontend work. Overall, I am passionate about delivering high-quality web applications that drive success for my clients, and I am always seeking new ways to improve my skills and expertise in the field.",
        technologies: [
            {
                name: "TypeScript",
                icon: <SiTypescript className="icon-ts" size={20} />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript className="icon-js" size={20} />,
            },
            {
                name: "React.js",
                icon: <SiReact className="icon-react" size={20} />,
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs className="icon-next" size={20} />,
            },
            {
                name: "Twig",
                icon: <SiDjango className="icon-django" size={20} />,
            },
            {
                name: "Node.js",
                icon: <FaNodeJs className="icon-node" size={20} />,
            },
        ],
    },
    {
        title: "EGO Design",
        date: "2023 - Present",
        position: "Frontend Developer",
        description:
            "As a Frontend Developer, I create and maintain visually appealing and responsive websites for my company using React. I am committed to following the latest frontend and SEO best practices to deliver exceptional user experiences. By closely collaborating with clients, I understand their unique needs and requirements to deliver results that exceed their expectations. My passion for staying up-to-date with the latest design trends and best practices allows me to create websites that drive user engagement and improve conversion rates. Overall, my experience as a Frontend Developer has equipped me with the skills and expertise to create exceptional websites that deliver tangible results.",
        technologies: [
            {
                name: "JavaScript",
                icon: <SiJavascript className="icon-js" size={20} />,
            },
            {
                name: "React.js",
                icon: <SiReact className="icon-react" size={20} />,
            },
            {
                name: "Scss",
                icon: <SiSass className="icon-sass" size={20} />,
            },
            {
                name: "Django",
                icon: <SiDjango className="icon-django" size={20} />,
            },
        ],
    },
    {
        title: "Wunderman Thompson Argentina",
        date: "2021 - 2023",
        position: "Frontend Developer",
        description:
            "As a Frontend Developer, I designed visually appealing and user-friendly websites for clients such as Banco Galicia, L'Oréal, Life Seguros, and others. Using my expertise in HTML, CSS, JavaScript, and related technologies, I delivered exceptional results that met each client's unique needs. By staying up-to-date with the latest design trends and best practices, and prioritizing effective communication and collaboration with clients, I was able to create high-quality websites that exceeded expectations, while improving user engagement and conversion rates. My passion for delivering impactful online experiences has led me to become a skilled and versatile Frontend Developer.",
        technologies: [
            {
                name: "JavaScript",
                icon: <SiJavascript className="icon-js" size={20} />,
            },
            {
                name: "React.js",
                icon: <SiReact className="icon-react" size={20} />,
            },
            {
                name: "Bootstrap",
                icon: <SiBootstrap className="icon-bootstrap" size={20} />,
            },
            {
                name: "Twig",
                icon: <SiDjango className="icon-django" size={20} />,
            },
            {
                name: "Gulp",
                icon: <SiGulp className="icon-gulp" size={20} />,
            },
            {
                name: "Node.js",
                icon: <FaNodeJs className="icon-node" size={20} />,
            },
        ],
    },
    {
        title: "Creativedog Agency",
        date: "2020 - 2021",
        position: "Marketing Analyst - Frontend Developer",
        description:
            "As a web developer and digital marketer at this company, I utilized my skills to create visually stunning websites that adhered to the latest frontend best practices. In addition, I spearheaded the development and implementation of successful SEO and SEM strategies that helped increase traffic and improve search engine rankings for a range of clients, including IRAM, Singer, Cocinas Florencia, Rosmi Neumáticos, and others. Through my work with these clients, I was able to deliver exceptional results and help them achieve their business goals. My time at this company was a valuable learning experience that allowed me to further hone my skills and develop my expertise in frontend development and digital marketing.",
        technologies: [
            {
                name: "JavaScript",
                icon: <SiJavascript className="icon-js" size={20} />,
            },
            {
                name: "React.js",
                icon: <SiReact className="icon-react" size={20} />,
            },
            {
                name: "Bootstrap",
                icon: <SiBootstrap className="icon-bootstrap" size={20} />,
            },
            {
                name: "Twig",
                icon: <SiDjango className="icon-django" size={20} />,
            },
        ],
    },
    {
        title: "Best Drivers",
        date: "2019 - 2020",
        position: "Marketing Analyst - Frontend Developer",
        description:
            "As the lead for the SEO and SEM strategy of the company, I spearheaded the optimization of the website's frontend using WordPress and Elementor. Utilizing my expertise in search engine optimization, I managed to significantly improve the website's overall SEO score, which was initially rated at 40 by SEM Rush. Following my efforts, the score skyrocketed to 95, a testament to my success in implementing effective optimization techniques. My strategies also resulted in the website ranking #1 on Google for the most important keywords, further solidifying its dominance in the industry.",
        technologies: [
            {
                name: "WordPress",
                icon: <SiWordpress className="icon-wordpress" size={20} />,
            },
            {
                name: "Google Analytics",
                icon: <SiGoogleanalytics className="icon-ga" size={20} />,
            },
            {
                name: "Google Search Console",
                icon: <SiGooglesearchconsole className="icon-gsc" size={20} />,
            },
            {
                name: "Google Ads",
                icon: <SiGoogleads className="icon-ga" size={20} />,
            },
        ],
    },
];

const Experience = () => {
    return (
        <section className="experience wrapper">
            <h2 className="underline-blue max-content">Experience</h2>

            <div className="experience__items">
                {experience_items.map((item: ExperienceItem, index: number) => {
                    return (
                        <article className="experience__item" key={index}>
                            <div className="experience__item--left">
                                <h3>{item.title}</h3>

                                <p className="date">{item.date}</p>

                                <p className="description">
                                    {item.description}
                                </p>
                            </div>

                            <div className="experience__item--right">
                                <h3>Stack</h3>
                                <ul>
                                    {item.technologies.map(
                                        (technology: Technology, i: number) => {
                                            return (
                                                <li key={i}>
                                                    {technology.icon}

                                                    <span>
                                                        {technology.name}
                                                    </span>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
