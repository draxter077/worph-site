import head from "./head/main.js"
import content from "./content/main.js"

export default function payments(){
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
            margin:0px 5px 0px 0px;
        }
        :responsive{
            height:50%;
        }`

    const payments = cE("div",style)
    payments.appendChild(head())
    payments.appendChild(content())
    return(payments)
}