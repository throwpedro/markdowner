import { buildHtml } from "./markdownMapper";

function run() {
    const interval = setInterval(() => {
        const input = document.getElementById('input') as HTMLTextAreaElement;
        const output = document.getElementById('output') as HTMLDivElement;
        const lines = input.value.split('\n');
        output.innerHTML = buildHtml(lines);
    }, 1000);
}

run();
