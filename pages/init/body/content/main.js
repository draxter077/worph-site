import path from "./path/main.js"
import search from "./search/main.js"

export default function content(){
    let style = `
        {
            width: 100%;
            height: 100%;
            padding: 20px;
            transition: width var(--transitionTime);
        }`

    const content = cE("div", style)
    content.id = "content"
    content.appendChild(path())
    content.appendChild(search())
    return(content)
}