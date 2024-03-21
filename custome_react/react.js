function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)


}


// react element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:' _blank'
    },
    children: "click me to visite"
}

// selecting root from html
const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer) 