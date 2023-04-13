import type { Project } from "../../types/types";
import Image from "next/image";
import { FaNodeJs } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiDjango,
    SiGulp,
    SiSass,
    SiBootstrap,
    SiFirebase,
    SiHeroku,
    SiNextdotjs,
} from "react-icons/si";

const projects: Project[] = [
    {
        title: "Alertas Seguridad Privada",
        description:
            "The client had a website built in WordPress, but sadly it wasn't maintained. Because of that the website was vulnerable to attacks. Also the design was old, and needed a change. I built a new website from scratch, using Twig, Bootstrap and Node.js. The website is hosted in Heroku. The site now has a 95 points average score in Google PageSpeed Insights.",
        technologies: [
            {
                name: "Twig",
                icon: <SiDjango size={20} color="white" />,
            },
            {
                name: "Bootstrap",
                icon: <SiBootstrap size={20} color="white" />,
            },
            {
                name: "Node.js",
                icon: <FaNodeJs size={20} color="white" />,
            },
            {
                name: "Scss",
                icon: <SiSass size={20} color="white" />,
            },
            {
                name: "Heroku",
                icon: <SiHeroku size={20} color="white" />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript size={20} color="white" />,
            },
        ],
        image: "/images/alertas-web.png",
        link: {
            url: "https://wwwa.alertaseguridadprivada.com.ar/",
            label: "Website",
        },
    },
    {
        title: "Spice Node Clone",
        description:
            "This is a bootcamp project for Coderhouse. The goal was to clone a website using React.js. To store the data I used Firebase. You can do a CRUD in all the products, also has a cart and a search bar. The website is hosted in Netlify.",
        technologies: [
            {
                name: "React.js",
                icon: <SiReact size={20} color="white" />,
            },
            {
                name: "Scss",
                icon: <SiSass size={20} color="white" />,
            },
            {
                name: "Firebase",
                icon: <SiFirebase size={20} color="white" />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript size={20} color="white" />,
            },
        ],
        image: "/images/spice-node-clone-web.png",
        link: {
            url: "https://react-ecommerce-cristian-coppari.netlify.app/",
            label: "Website",
        },
        repo: {
            url: "https://www.github.com/cristiancoppari/react-ecommerce",
            label: "Repo",
        },
    },
];

const Projects = () => {
    return (
        <section className="projects wrapper section-margin-top">
            <h2 className="underline-gray-dark max-content">Projects</h2>

            <p>Here you can find some of the projects I've wordked on:</p>

            <div className="projects__container">
                {projects.map((project, index) => {
                    return (
                        <article className="project__card" key={index}>
                            <div className="project__image">
                                <h3>{project.title}</h3>

                                <div className="image__container">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill={true}
                                    />
                                </div>
                            </div>

                            <div className="project__content">
                                <div className="project__content-wrapper">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <ul className="technologies">
                                        {project.technologies.map((tech, i) => {
                                            return (
                                                <li
                                                    className="technology"
                                                    key={i}
                                                >
                                                    {tech.icon}

                                                    <span>{tech.name}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
