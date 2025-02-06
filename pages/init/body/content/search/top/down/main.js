import input from "./input/main.js"

export default function down(){
    let style = `
        {
            width: 100%;
        }`

    const down = cE("div", style)
    down.appendChild(input())
    return(down)
}