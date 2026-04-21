import { DocstraLayout } from 'docstra';
import { source } from '@/lib/source';

export default async function Page({ children }: { children: React.ReactNode }) {
    return <DocstraLayout tree={source.getTree()}>{children}</DocstraLayout>;
}