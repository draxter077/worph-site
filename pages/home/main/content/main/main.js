import status from "./status/main.js"
import data from "./data/main.js"
import databases from "./databases/main.js"

export default function main(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
        }`

    const main = cE("div",style)
    main.appendChild(status())
    main.appendChild(data())
    main.appendChild(databases())
    return(main)
}