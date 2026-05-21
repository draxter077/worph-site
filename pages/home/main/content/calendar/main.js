export default function calendar(d){
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
            background:purple;
            opacity:0;
            transition:all 0.5s;
        }`

    const calendar = cE("div",style)
    calendar.id = "calendar"
    calendar.innerHTML = 'Calendário'
    return(calendar)
}