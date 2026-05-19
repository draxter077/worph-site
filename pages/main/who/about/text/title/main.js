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
    title.innerHTML = `Transformamos sua ideia em uma realidade no mundo digital`
    return(title)
}