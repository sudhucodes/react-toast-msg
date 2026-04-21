import { defaultMdxComponents } from "docstra/mdx";
import { DocstraCodeBlock } from "docstra";

export function getMDXComponents(): any {
    return {
        ...defaultMdxComponents,
        code: DocstraCodeBlock,
    };
}