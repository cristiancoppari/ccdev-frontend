export type BurgerProps = {
    onClick: () => void;
    isOpen: boolean;
};

export type HeroData = {
    title: string;
    subtitle: string;
    subtitile_2: string;
    text: string;
};

export type ButtonProps = {
    type?: string;
    label: string;
    onClick?: () => void;
};

export type Technology = {
    name: string;
    icon?: any;
};

export type ExperienceItem = {
    title: string;
    date: string;
    description: string;
    position: string;
    is_actual_position?: boolean;
    technologies: Technology[];
};

export type Project = {
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    link: {
        url: string;
        label: string;
    };
    repo?: {
        url: string;
        label: string;
    };
};
