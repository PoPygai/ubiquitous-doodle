import type {CardSkillsItem, ContactItem, PortfolioItem} from "./types";

export const valueHeaderBtns = ["About","Skills","Portfolio","Mini-Games","Connect"]

export const valueCardSkills:CardSkillsItem[] = [
    {
        title:"🧱 HTML / CSS / SASS",
        description:"Clean and responsive layout. Confident in using SASS for better structure and maintainability.",
    },
    {
        title:"🟨 JavaScript / TypeScript",
        description:"Solid knowledge of JS and TS. Experienced with logic, arrays, objects, promises, async/await, and OOP.",
    },
    {
        title:"⚛️ React",
        description:"Building single-page applications using components, hooks (useState, useEffect, useContext), routing, and state management.",
    },
    {
        title:"🌐 Node.js / Express",
        description:"Creating backend logic, setting up routes, middlewares, and building RESTful APIs.",
    },
    {
        title:"🧠 Full Stack Thinking",
        description:"Understanding the full cycle of web development — from client-side to server-side integration.",
    },
    {
        title:"🚀 Pet Projects & Fast Learning",
        description:"Working on personal projects, constantly learning new tools and technologies, and growing as a developer.",
    },

]

export const textBio = "Hi! My name is David, I’m 17 years old, and I’m an aspiring Full Stack developer. I'm passionate about web development and always eager to learn new technologies. I’m actively growing my skills in both frontend and backend development. I have hands-on experience with HTML, CSS, SASS, JavaScript, TypeScript, React, Node.js, and Express. Currently, I’m working on personal pet projects and aiming to gain my first commercial experience in the industry. I’ve completed a Full Stack Developer course at the Tel-Ran training center. I’m open to new knowledge, exciting challenges, and collaboration opportunities."

export const valuePortfolio : PortfolioItem[] = [
    {
        title:"FitnessUi",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Website with HTML&CSS"
    },
    {
        title:"Website",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Website with HTML&SCSS"

    },
    {
        title:"About Me",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Website with REACT"

    },
    {
        title:"Bakery Shop",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Website with REACT&MUI"

    },
    {
        title:"Server1",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Server with Express&MySql"

    },
    {
        title:"Server2",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Server with Express&MongoDB"

    },
    {
        title:"Front + Back",
        href: "https://github.com/PoPygai/FintnessUi.git",
        description:"Front + Back"
    },
]

export const valueContact : ContactItem[] = [
    {
        topic:"Gmail",
        icon:"../../../icons/icons8-gmail-48.png",
        href:"mailto:davidrashkovskiy@gmail.com"
    },
    {
        topic:"Telegram",
        icon:"../../../icons/icons8-telegram-48.png",
        href:"https://t.me/user_nn_123"
    },
    {
        topic:"LeetCode",
        icon:"../../../icons/icons8-leetcode-48.png",
        href:"https://leetcode.com/u/PoPygai/"
    },
    {
        topic:"GitHub",
        icon:"../../../icons/icons8-github-50.png",
        href:"https://github.com/PoPygai"
    },
]