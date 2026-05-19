export default function calendar(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:purple;
        }`

    const calendar = cE("div",style)
    calendar.innerHTML = 'Calendário'
    return(calendar)
}