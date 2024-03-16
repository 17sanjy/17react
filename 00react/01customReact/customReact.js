// function customRender(reactElement, container){
//    /* const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);

//     container.appendChild(domElement);*/

//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;

//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue; 
            
//         domElement.setAttribute(prop, reactElement.props[prop])       
//     }

//     container.appendChild(domElement);
// }

// let reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

// let mainConatainer = document.querySelector('#root');

// customRender(reactElement, mainConatainer);



function customRender(element, container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    // domElement.setAttribute('href', element.props.href);
    // domElement.setAttribute('target', element.props.target);

    for (const prop in element.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const mainConatainer = document.getElementById('root');

customRender(reactElement, mainConatainer);
