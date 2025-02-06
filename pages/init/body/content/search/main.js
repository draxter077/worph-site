import top from "./top/main.js"
import options from "./options/main.js"

export default function search(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 90%;
            width: 100%;
            border-radius: 5px;
        }`

    const search = cE("div", style)
    search.appendChild(top())
    search.appendChild(options())
    return(search)
}