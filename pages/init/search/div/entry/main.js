import input from "./input/main.js"

export default function entry(){
    let style = `
        {
            width: 100%;
            height: fit-content;
        }`

    const entry = cE("div", style)
    entry.appendChild(input())
    return(entry)
}