export default function title(){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "O que esperar do seu novo site?"
    return(title)
}