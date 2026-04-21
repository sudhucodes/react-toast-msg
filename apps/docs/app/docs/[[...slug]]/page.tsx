import docstraConfig from '@/docstra.config';
import { DocstraBody, DocstraProvider } from 'docstra';

import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    const page = source.getPage(slug);

    if (!page) return notFound();

    const MDX = source.getPageMdx(slug);

    return (
        <DocstraProvider docstraConfig={docstraConfig} page={page}>
            <DocstraBody>
                <MDX components={getMDXComponents()} />
            </DocstraBody>
        </DocstraProvider>
    );
}

export const dynamic = "force-static";

export function generateStaticParams() {
    return source.generateStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;
    const page = source.getPage(slug);
    if (!page) return notFound();

    return {
        title: page.metadata.title,
        description: page.metadata.description
    };
}