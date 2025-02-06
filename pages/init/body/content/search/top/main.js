import input from "./input/main.js"
import newFolder from "./newFolder/main.js"
import uploadFile from "./uploadFile/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }`

    const top = cE("div", style)
    top.appendChild(input())
    top.appendChild(newFolder())
    top.appendChild(uploadFile())
    return(top)
}