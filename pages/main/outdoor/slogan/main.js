export default function slogan(){
    let style = `
        {
            width:fit-content;
            font-size:28px;
            font-weight:900;
            color:var(--colorWhite);
            background:var(--colorBlue);
            padding:15px 20px;
        }`

    const slogan = cE("div",style)
    slogan.innerHTML = "Somos especialistas em desenvolvimento web"
    return(slogan)
}