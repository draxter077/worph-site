import item from "./item/main.js"

export default function status(ps){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:80%;
        }`

    const status = cE("div",style)
    let toBeApproved = 0, approved = 0, lastMonthResult = 0;
    let nowMonth = ps[0].date.split("/")[1], lastMonth = "";

    for(let i = 0; i < ps.length; i++){
        let m = ps[i].date.split("/")[1]
        if(m == nowMonth){
            if(ps[i].status){approved += ps[i].value}
            else{toBeApproved += ps[i].value}
        }
        else if(m != nowMonth && lastMonth == ""){
            lastMonthResult += ps[i].value
            lastMonth = m
            break
        }
        else if(m == lastMonth){
            lastMonthResult += ps[i].value
        }
    }

    status.appendChild(item(stringifyNumber(toBeApproved),"Faturamento do mês"))
    status.appendChild(item(stringifyNumber(approved),"Margem de lucro"))
    status.appendChild(item(stringifyNumber(lastMonthResult),"Último mês"))
    return(status)
}