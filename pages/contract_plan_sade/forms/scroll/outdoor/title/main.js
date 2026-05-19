export default function title(){
    let style = `
        {
            width:fit-content;
            font-size:21px;
            font-weight:900;
            padding:5px 10px;
            background:var(--colorBlue);
        }`

    const title = cE("div",style)
    title.innerHTML = "Você está a um passo da sua presença digital"
    return(title)
}