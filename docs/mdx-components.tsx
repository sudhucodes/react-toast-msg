import { defaultMdxComponents } from "docstra/mdx";
import { DocstraCodeBlock } from "docstra";

export function getMDXComponents() {
    return {
        ...defaultMdxComponents,
        code: DocstraCodeBlock,
    };
}