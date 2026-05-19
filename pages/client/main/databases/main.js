import payments from "./payments/main.js"
import orders from "./orders/main.js"

export default function databases(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:90%;
            height:50%;
        }
        :responsive{
            flex-direction:column;
            height:50svh;
            width:95%;
            margin:5% 0px 0px 0px;
        }`

    const databases = cE("div",style)
    databases.appendChild(payments())
    databases.appendChild(orders())
    return(databases)
}