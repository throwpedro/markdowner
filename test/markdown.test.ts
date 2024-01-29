import { describe, expect, test } from "bun:test";
import { buildHtml, mapMarkdownToHtmlTagName } from "../src/markdownMapper";

describe("map markdown to html tag name", () => {
    test("markdown maps to tag name", () => {
        const input = "# Heading";
        const expected = "h1";
        expect(mapMarkdownToHtmlTagName(input)).toBe(expected);
    });
});
describe("parse markdown to html", () => {
    test("parse line", () => {
        const input = ["# Heading"];
        const expected = "<h1>Heading</h1>";
        expect(buildHtml(input)).toBe(expected);
    });
    test("parse multiple lines", () => {
        const input = ["# Heading", "## Subheading"];
        const expected = "<h1>Heading</h1><h2>Subheading</h2>";
        expect(buildHtml(input)).toBe(expected);
    });
});
