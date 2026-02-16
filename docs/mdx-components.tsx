import { defaultMdxComponents } from "docstra/server";
import { DocstraCodeBlock } from "docstra";

export function useMDXComponents() {
    return {
        ...defaultMdxComponents,
        code: DocstraCodeBlock,
    };
}