export type CardSkillsItem ={
    title: string,
    description: string,
}

export type PortfolioItem = {
        title:string,
        href: string,
        description:string
};

export type ContactItem = {
    href: string;
    icon: string;
    topic: string;
};

type Tasks = {
    title: string,
    taskDone : boolean,
}