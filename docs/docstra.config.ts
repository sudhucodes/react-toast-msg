import { defineDocstraConfig } from "docstra/config";

export default defineDocstraConfig({
    siteName: "rtm",
    githubRepo: "https://github.com/sudhucodes/react-toast-msg",
    editOnGithub: {
        owner: "sudhucodes",
        repo: "react-toast-msg",
        path: "content",
    },
    contentDir: 'content',
    feedback: {
        enabled: false,
        formSyncFormID: "",
    },
    navbar: {
        logo: {
            src: "/assets/logo.svg",
            alt: "rtm",
            link: "/",
            className: "h-7 w-auto",
        },
        links: [
            { name: "Guides", href: "/docs/guides" },
            { name: "APIs", href: "/docs/apis" },
        ],
    },
    sidebar: {
        links: [
            {
                section: 'Introduction',
                items: [
                    {
                        name: 'Overview',
                        href: '/docs',
                        icon: 'NotebookPenIcon'
                    },
                    {
                        name: 'Quick Start',
                        href: '/docs/quick-start',
                        icon: 'RocketIcon'
                    },
                    {
                        name: 'Integrations',
                        href: '/docs/integrations',
                        icon: 'CableIcon'
                    }
                ],
            },
        ],
    },
});