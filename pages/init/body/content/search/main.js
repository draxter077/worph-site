import top from "./top/main.js"
import options from "./options/main.js"

export default function search(content){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 90%;
            width: 100%;
        }`

    const search = cE("div", style)
    search.appendChild(top())
    search.appendChild(options(content))
    return(search)
}