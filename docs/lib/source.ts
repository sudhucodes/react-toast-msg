import { docs } from "@/.docstra/index";
import { createSource } from "docstra/mdx";

export const source = createSource({
    source: docs,
    baseUrl: "/docs"
});