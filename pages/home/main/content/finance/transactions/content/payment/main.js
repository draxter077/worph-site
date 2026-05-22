import row from "./row/main.js"

export default function payment(p){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            font-size:16px;
            color:var(--colorWhite);
            padding:2px 5px;
            border-bottom:1px solid var(--colorWhite);
            width:100%;
        }`

    const payment = cE("div",style)
    payment.appendChild(row("80px",p.id))
    payment.appendChild(row("120px",p.date))
    payment.appendChild(row("80px",p.clientid))
    payment.appendChild(row("300px",p.title))
    payment.appendChild(row("120px",stringifyNumber(p.value)))
    payment.appendChild(row("120px",p.status?"Aprovado":"Em aberto"))
    return(payment)
}