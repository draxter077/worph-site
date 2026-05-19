export default function finance(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:orange;
        }`

    const finance = cE("div",style)
    finance.innerHTML = 'Finance'
    return(finance)
}