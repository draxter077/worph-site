import head from "./head/main.js"
import content from "./content/main.js"

export default function transactions(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            height:50%;
            padding:10px 15px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
        }
        :responsive{
            height:80svh;
            width:95%;
        }`

    const transactions = cE("div",style)
    transactions.appendChild(head())
    transactions.appendChild(content(ps))
    return(transactions)
}