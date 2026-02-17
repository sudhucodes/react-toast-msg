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
        enabled: true,
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
            { name: "Usage", href: "/docs/usage/basic" },
            { name: "API", href: "/docs/api/toast" },
            { name: "Examples", href: "/docs/examples" },
        ],
    },
    sidebar: {
        links: [
            {
                section: 'Getting Started',
                items: [
                    {
                        name: 'Introduction',
                        href: '/docs',
                        icon: 'NotebookPenIcon'
                    },
                    {
                        name: 'Installation',
                        href: '/docs/installation',
                        icon: 'DownloadIcon'
                    },
                    {
                        name: 'Quick Start',
                        href: '/docs/quick-start',
                        icon: 'RocketIcon'
                    },
                    {
                        name: 'Examples',
                        href: '/docs/examples',
                        icon: 'LayoutTemplateIcon'
                    }
                ],
            },
            {
                section: 'Usage',
                items: [
                    {
                        name: 'Basic Usage',
                        href: '/docs/usage/basic',
                        icon: 'FileTextIcon'
                    },
                    {
                        name: 'Advanced Usage',
                        href: '/docs/usage/advanced',
                        icon: 'Settings2Icon'
                    },
                ],
            },
            {
                section: 'API Reference',
                items: [
                    {
                        name: 'Toast API',
                        href: '/docs/api/toast',
                        icon: 'CodeIcon'
                    },
                    {
                        name: 'Container API',
                        href: '/docs/api/container',
                        icon: 'BoxIcon'
                    },
                    {
                        name: 'Types',
                        href: '/docs/api/types',
                        icon: 'TypeIcon'
                    }
                ],
            },
        ],
    },
});