function traversePreOrder(node) {
    if (node) {
        console.log(node.nodeName); 

        node.childNodes.forEach(child => {
            traversePreOrder(child); 
        });
    }
}

const body = document.body; 
traversePreOrder(body); 