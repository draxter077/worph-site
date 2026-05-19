export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorBlue);
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `Nós cuidamos de tudo para você focar no que faz de melhor`
    return(title)
}