export default function text(){
    let style = `
        {
            font-size:20px;
            color:var(--colorBlack);
        }`

    const text = cE("div",style)
    text.innerHTML = "Transforme sua ideia"
    return(text)
}