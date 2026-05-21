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
            height:100%;
            background:orange;
            opacity:0;
            transition:all 0.5s;
        }`

    const finance = cE("div",style)
    finance.id = "finance"
    finance.innerHTML = 'Finance'
    return(finance)
}