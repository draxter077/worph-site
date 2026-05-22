import status from "./status/main.js"
import stats from "./stats/main.js"
import transactions from "./transactions/main.js"

export default function finance(d){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:fit-content;
            padding:1% 0px;
            opacity:0;
            transition:all 0.5s;
        }`

    const finance = cE("div",style)
    finance.id = "finance"
    finance.appendChild(status(d.payments.reverse()))
    finance.appendChild(stats())
    finance.appendChild(transactions(d.payments))
    return(finance)
}