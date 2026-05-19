import head from "./head/main.js"
import content from "./content/main.js"

export default function orders(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            background:var(--colorDarkerBlue);
            padding:10px 15px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:10px;
            margin:0px 0px 0px 5px;
        }
        :responsive{
            height:50%;
            margin:20px 0px 0px 0px;
        }`

    const orders = cE("div",style)
    orders.appendChild(head())
    orders.appendChild(content())
    return(orders)
}