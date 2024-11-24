
const deprecatedTags = [
    'acronym', 'applet', 'basefont', 'big', 'center', 'dir', 'font',
    'frame', 'frameset', 'noframes', 'isindex', 'listing', 'menu',
    'marquee', 's', 'strike', 'tt', 'u', 'xmp'
];

function isDeprecated(tagName) {
    return deprecatedTags.includes(tagName.toLowerCase());
}

function traversePreOrder(node) {
    if (!node)
        return;

    console.log(node);

    if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
        if (isDeprecated(tagName)) {
            console.log(`Tag deprecated found: <${tagName}>`);
        }
    }
    
    node.childNodes.forEach(child => {
        traversePreOrder(child);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    traversePreOrder(body);
});