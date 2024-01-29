const markdownMap = {
    '#': 'h1',
    '##': 'h2',
    '###': 'h3',
    '####': 'h4',
    '#####': 'h5',
    '######': 'h6',
    '*': 'li',
    '+': 'li',
    '-': 'li',
    '>': 'blockquote',
    '```': 'pre',
}

const olRegex = /^\d+\./

export const mapMarkdownToHtmlTagName = (line: string) => {
    const [key] = line.split(' ')
    if (markdownMap[key]) {
        return markdownMap[key]
    }
    if (olRegex.test(key)) {
        return 'ol'
    }
    return 'p'
}

export const buildHtml = (lines: string[]) => {
    let textContent = '';
    let html = '';
    lines.forEach(line => {
        const tagName = mapMarkdownToHtmlTagName(line);
        textContent = line.split(' ').slice(1).join(' ');
        html += `<${tagName}>${textContent}</${tagName}>`;
    });
    return html;
}