// src/markdownMapper.ts
var markdownMap = {
  "#": "h1",
  "##": "h2",
  "###": "h3",
  "####": "h4",
  "#####": "h5",
  "######": "h6",
  "*": "li",
  "+": "li",
  "-": "li",
  ">": "blockquote",
  "```": "pre"
};
var olRegex = /^\d+\./;
var mapMarkdownToHtmlTagName = (line) => {
  const [key] = line.split(" ");
  if (markdownMap[key]) {
    return markdownMap[key];
  }
  if (olRegex.test(key)) {
    return "ol";
  }
  return "p";
};
var buildHtml = (lines) => {
  let textContent = "";
  let html = "";
  lines.forEach((line) => {
    const tagName = mapMarkdownToHtmlTagName(line);
    if (tagName !== "p") {
      textContent = line.split(" ").slice(1).join(" ");
    } else {
      textContent = line;
    }
    html += `<${tagName}>${textContent}</${tagName}>`;
  });
  return html;
};

// src/main.ts
var run = function() {
  const interval = setInterval(() => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const lines = input.value.split("\n");
    output.innerHTML = buildHtml(lines);
  }, 1000);
};
run();
