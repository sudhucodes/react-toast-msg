import { defineDocstraConfig } from "docstra/mdx";

export default defineDocstraConfig({
    collections: {
        docs: '../../content/docs',
    },
    editOnGithub: {
        owner: "sudhucodes",
        repo: "react-toast-msg",
        path: "content/docs",
        branch: "main"
    },
    feedback: {
        enabled: true,
        formSyncFormID: "",
    },
    navbar: {
        logo: {
            src: "/assets/logo.svg",
            alt: "rtm",
            link: "/",
            className: "h-8.5 w-auto",
        },
        links: [
            { name: "Usage", href: "/docs/usage/basic" },
            { name: "API", href: "/docs/api/toast" },
            { name: "Examples", href: "/docs/examples" },
        ],
    },
});