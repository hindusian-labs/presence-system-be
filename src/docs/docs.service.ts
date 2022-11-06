import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export function renderMarkdownDocs() {
  const filePath = path.resolve() + "/README.md";
  const docs = fs.readFileSync(filePath);
  const renderedDocs = md.render(docs.toString());
  return renderedDocs;
}
