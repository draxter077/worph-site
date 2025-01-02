import title from "./title/main.js"
import input from "./input/main.js"

export default function entry(){
    let style = `
        {
            width: 100%;
            height: fit-content;
            position: relative;
        }`

    const entry = cE("div", style)
    entry.appendChild(title())
    entry.appendChild(input())
    return(entry)
}