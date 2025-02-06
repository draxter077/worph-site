import newFolder from "./newFolder/main.js"
import uploadFile from "./uploadFile/main.js"

export default function up(){
    let style  = `
        {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            margin: 0px 0px 10px 0px;
        }`

    const up = cE("div", style)
    up.appendChild(newFolder())
    up.appendChild(uploadFile())
    return(up)
}