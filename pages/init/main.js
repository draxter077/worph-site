import top from "./top/main.js"
import body from "./body/main.js"

export default function init(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            height: 100dvh;
            width: 100%;
        }`

    const init = cE("div", style)
    init.appendChild(top())
    init.appendChild(body())
    return(init)
}