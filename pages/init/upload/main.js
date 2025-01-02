import input from "./input/main.js"
import button from "./button/main.js"

export default function upload(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            margin: 0px 0px 20px 0px;
        }`

    const upload = cE("div", style)
    upload.appendChild(input())
    upload.appendChild(button())
    return(upload)
}